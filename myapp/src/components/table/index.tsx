import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import columns from './columns-def';
import sheet_data from '../../data/sheetData';


const Table = () => {
    const table = useReactTable({
        data: sheet_data,
        columnResizeMode: 'onChange',
        columns: columns,
        getCoreRowModel: getCoreRowModel(),
        defaultColumn: {
            minSize: 32,
            maxSize: 500,
        }

    });
    return (
        <div className="table-container  h-[calc(100vh-7.5rem)]  w-screen overflow-auto">
            <table className=" border border-gray-xlight border-collapse relative bg-white " style={{ width: table.getCenterTotalSize(), }}>
                <thead className='sticky  top-0 bg-white z-20'>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id} className="">
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} colSpan={header.colSpan} className={`border relative border-gray-bg h-8 ${header.index === 0 ? 'sticky left-0 bg-white z-30' : ''} `} style={{ width: header.getSize() }}>

                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext(),

                                        )

                                    }
                                    <div onMouseDown={header.getResizeHandler()} onTouchStart={header.getResizeHandler()}

                                        className="absolute z-30 -right-1 top-0 h-full w-1 cursor-col-resize select-none touch-none opacity-0 hover:opacity-100 bg-gray-light transition-opacity"

                                    ></div>

                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody className=''>
                    {table.getRowModel().rows.map((row) => (
                        <tr
                            key={row.id}
                            className=""
                        >
                            {row.getVisibleCells().map((cell) => (
                                <td
                                    style={{ width: cell.column.getSize() }}
                                    key={cell.id}
                                    className={`border border-gray-bg  h-8  truncate ${cell.column.getIndex() === 0 ? 'sticky left-0 bg-white z-10' : ''}`}
                                >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}

                    {/* showing empty rows  */}
                    {Array.from({ length: Math.max(0, 20) }).map((_, idx) => (
                        <tr key={`empty-row-${idx}`} className="bg-white">
                            {table.getAllLeafColumns().map((column, colIdx) => (
                                <td
                                    style={{ width: column.getSize() }}
                                    key={column.id}
                                    className="border border-gray-xlight  h-8 truncate"
                                >


                                    {colIdx === 0 ? <div className="w-full text-center px-2 text-sm text-gray-medium">{table.getRowModel().rows.length + idx + 1}</div>
                                        : ''}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table 
