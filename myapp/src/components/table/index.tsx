import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { columns, sheet_data } from './columns-def';


const Table = () => {
    const table = useReactTable({
        data: sheet_data,
        columns: columns,
        getCoreRowModel: getCoreRowModel()
    });
    return (
        <div className="table-container w-screen min-h-screen ">
            <table className=" border border-gray-xlight border-collapse bg-white">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id} className="text-base font-medium bg-gray-xlight">
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} colSpan={header.colSpan} className="truncate border border-gray-xlight px-4 py-2">
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
                            className="text-base even:bg-gray-ultra-light hover:bg-gray-ultra-light transition-colors"
                        >
                            {row.getVisibleCells().map((cell) => (
                                <td
                                    key={cell.id}
                                    className="border border-gray-xlight px-4 py-1 truncate"
                                >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
