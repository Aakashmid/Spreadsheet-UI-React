import type { SheetDataType } from '../columns-def';
import type { CellContext } from '@tanstack/react-table';

type TableCellProps = {
  info: CellContext<SheetDataType, any>;
};


const TableCell = ({info}:TableCellProps) => {
  return (
    <div className='h-full '>
   {/* <input type="text" className="" /> */}
   <p className="text-xs">{info.getValue()}</p>
    </div>
  )
}

export default TableCell