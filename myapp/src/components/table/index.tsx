import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import columns from './columns-def';
import sheet_data from '../../data/sheetData';


const Table = () => {
    const table = useReactTable({
        data: sheet_data,
        columns: columns,
        getCoreRowModel: getCoreRowModel()
    });
    return (
        <div className="table-container w-screen overflow-auto h-[calc(100vh-6.75rem)]">
            <table className=" border border-gray-xlight border-collapse bg-white w-full  ">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id} className="">
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} colSpan={header.colSpan} className="border border-gray-bg h-8">
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext(),
                                        )}
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
                                    key={cell.id}
                                    className="border border-gray-bg  h-8  truncate"
                                >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}

                    {/* showing empty rows  */}
                    {Array.from({ length: Math.max(0, 20 ) }).map((_, idx) => (
                        <tr key={`empty-row-${idx}`} className="bg-white">
                            {table.getAllLeafColumns().map((column, colIdx) => (
                                <td
                                    key={column.id}
                                    className="border border-gray-xlight  h-8 truncate"
                                >
                                    {colIdx === 0 ? table.getRowModel().rows.length + idx + 1 : ''}
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
