import React, { useState } from "react";
import { type CellContext } from "@tanstack/react-table";

import { type SheetDataType } from "../../../data/sheetData";
import { CurrencyCell, DateCell, PriorityCell, StatusCell, UrlCell } from "./CellVariants";

type TableCellProps = {
  info: CellContext<SheetDataType, any>;
};

const TableCell: React.FC<TableCellProps> = ({ info }) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState<any>(info.getValue());
  const columnId = info.column.id;

  const handleSave = () => {
    setEditing(false);
    // TODO: Save value to your data source
  };






  // Display mode: choose component by columnId
  return (
    <div onClick={() => setEditing(true)} className={`h-full px-2 flex items-center text-xs ${editing && 'border border-green-soft'} `}  >
      {editing ? <input
        type="text"
        value={value ?? ""}
        onChange={e => setValue(e.target.value)}
        // onKeyDown={ha}
        onBlur={handleSave}
        autoFocus
        className="w-full  outline-none "
      />
        :
        <>
          {columnId === "url" && <UrlCell value={value} />}
          {columnId === "status" && <StatusCell value={value} />}
          {columnId === "priority" && <PriorityCell value={value} />}
          {(columnId === "due_date" || columnId === "submitted") && <DateCell value={value} />}
          {columnId === "est_value" && <CurrencyCell value={value} />}
          {!["url", "status", "priority", "due_date", "submitted", "est_value"].includes(columnId) && (
            <p className="text-left">{value}</p>
          )}
        </>}

    </div>
  )
};

export default TableCell;