import React, { useState, useEffect, useRef } from "react";
import { type CellContext } from "@tanstack/react-table";

import { type SheetDataType } from "../../../data/sheetData";
import { CurrencyCell, DateCell, PriorityCell, StatusCell, UrlCell } from "./CellVariants";

// Props for data cells (existing rows)
type DataCellProps = {
  info: CellContext<SheetDataType, any>;
  onCellUpdate?: (rowIndex: number, columnId: string, value: any) => void;
  isEmptyRow?: false;
};

// Props for empty cells (new rows)
type EmptyCellProps = {
  rowIndex: number;
  columnId: string;
  value?: any;
  onCellUpdate?: (rowIndex: number, columnId: string, value: any) => void;
  isEmptyRow: true;
  info?: never; // Ensure info is not provided for empty rows
};

type TableCellProps = DataCellProps | EmptyCellProps;

const TableCell: React.FC<TableCellProps> = (props) => {
  // Extract common values based on cell type
  const columnId = props.isEmptyRow ? props.columnId : props.info.column.id;
  const initialValue = props.isEmptyRow ? (props.value || "") : props.info.getValue();
  const rowIndex = props.isEmptyRow ? props.rowIndex : props.info.row.index;

  const [isfocused, setIsfocused] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState<any>(initialValue);

  const cellRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    console.log('Saving data:', { rowIndex, columnId, value });

    if (props.onCellUpdate) {
      props.onCellUpdate(rowIndex, columnId, value);
    }
  };

  // Enter edit mode
  const enterEditMode = () => {
    setIsEditing(true);
    setIsfocused(true);
  };

  // Exit edit mode
  const exitEditMode = (shouldSave = true) => {
    if (shouldSave) {
      handleSave();
    } else {
      setValue(initialValue); // Reset to original value
    }
    setIsEditing(false);
  };

  const handleCellFocus = () => {
    setIsfocused(true);
  }

  const handleCellBlur = (e: React.FocusEvent) => {
    // Only blur if focus is moving outside the cell entirely
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsfocused(false);
      if (isEditing) {
        exitEditMode(true);
      }
    }
  }

  // Navigate to adjacent cells
  const navigateToCell = (direction: 'up' | 'down' | 'left' | 'right') => {
    const currentCell = cellRef.current?.closest('td');
    if (!currentCell) return;

    const table = currentCell.closest('table');
    if (!table) return;

    const currentRow = currentCell.closest('tr');
    if (!currentRow) return;

    const allRows = Array.from(table.querySelectorAll('tr'));
    const currentRowIndex = allRows.indexOf(currentRow);
    const currentCellIndex = Array.from(currentRow.children).indexOf(currentCell);

    let targetCell: HTMLElement | null = null;

    switch (direction) {
      case 'up':
        if (currentRowIndex > 0) {
          targetCell = allRows[currentRowIndex - 1].children[currentCellIndex]?.querySelector('div[tabIndex="0"]') as HTMLElement;
        }
        break;

      case 'down':
        if (currentRowIndex < allRows.length - 1) {
          targetCell = allRows[currentRowIndex + 1].children[currentCellIndex]?.querySelector('div[tabIndex="0"]') as HTMLElement;
        }
        break;

      case 'left':
        if (currentCellIndex > 0) {
          targetCell = currentRow.children[currentCellIndex - 1]?.querySelector('div[tabIndex="0"]') as HTMLElement;
        }
        break;

      case 'right':
        if (currentCellIndex < currentRow.children.length - 1) {
          targetCell = currentRow.children[currentCellIndex + 1]?.querySelector('div[tabIndex="0"]') as HTMLElement;
        }
        break;
    }

    if (targetCell) {
      targetCell.focus();
    }
  };

  // Handle keyboard events when cell is selected but not editing
  const handleDivKeyDown = (e: React.KeyboardEvent) => {
    if (isEditing) return; // Let input handle its own events

    switch (e.key) {
      case 'Enter':
        e.preventDefault();
        enterEditMode();
        break;

      case 'Backspace':
        e.preventDefault();
        setValue('');
        break;

      case 'ArrowUp':
        e.preventDefault();
        navigateToCell('up');
        break;

      case 'ArrowDown':
        e.preventDefault();
        navigateToCell('down');
        break;

      case 'ArrowLeft':
        e.preventDefault();
        setTimeout(() => {
          navigateToCell('left');
        }, 100);
        break;

      case 'ArrowRight':
        e.preventDefault();
        navigateToCell('right');
        break;

      case 'Tab':
        e.preventDefault();
        navigateToCell(e.shiftKey ? 'left' : 'right');
        break;

      default:
        // Start editing with typed character (replace content)
        if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
          e.preventDefault();
          setValue(e.key);
          enterEditMode();
        }
        break;
    }
  };


  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'Enter':
        e.preventDefault();
        const currentCellElement = cellRef.current;
        
        // handle save has to handle 

        setIsEditing(false);
        const cellToFocus = currentCellElement || cellRef.current;
        if (cellToFocus) {
          cellToFocus.focus();
        }

        break;

      case 'Escape':
        e.preventDefault();
        exitEditMode(false); // Exit without saving
        setTimeout(() => {
          if (cellRef.current) {
            cellRef.current.focus();
          }
        }, 0);

        break;

      default:
        break;
    }
  }
  // Update value when initialValue changes (for data cells)
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  // Display mode: choose component by columnId
  return (
    <div
      ref={cellRef}
      tabIndex={0}
      onFocus={handleCellFocus}
      onClick={handleCellFocus}
      onBlur={handleCellBlur}
      onKeyDown={handleDivKeyDown}
      className={`h-full px-2 flex items-center outline-none text-xs w-full cursor-cell ${(isfocused || isEditing) && 'border border-green-soft'} `}
    >
      {isEditing ?
        <input
          ref={inputRef}
          onKeyDown={handleInputKeyDown}
          type="text"
          value={value ?? ""}
          onChange={e => setValue(e.target.value)}
          className="w-full outline-none bg-transparent"
          autoFocus
          placeholder={props.isEmptyRow ? "Enter value..." : ""}
        />
        :
        <>
          {columnId === "url" && <UrlCell value={value} />}
          {columnId === "status" && <StatusCell value={value} />}
          {columnId === "priority" && <PriorityCell value={value} />}
          {(columnId === "due_date" || columnId === "submitted") && <DateCell value={value} />}
          {columnId === "est_value" && <CurrencyCell value={value} />}
          {!["url", "status", "priority", "due_date", "submitted", "est_value"].includes(columnId) && (
            <p className="text-left">{value || (props.isEmptyRow ? "" : "")}</p>
          )}
        </>
      }
    </div>
  )
};

export default TableCell;