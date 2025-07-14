import { createColumnHelper } from "@tanstack/react-table"
import TableHeaderCell from "./common-components/TableHeaderCell"
import { FaBriefcase, FaGlobe } from "react-icons/fa"
import { IoCalendar, IoChevronDownCircleSharp } from "react-icons/io5"
import { BsPersonFill } from "react-icons/bs"
import { HiHashtag } from "react-icons/hi2"
import TableGroupCell from "./common-components/TableGroupCell"
import TableHeaderCell2 from "./common-components/TableHeaderCell2"
import TableHeaderLinkCell from "./common-components/TableHeaderLinkCell"
import type { SheetDataType } from "../../data/sheetData"
import { BiPlus } from "react-icons/bi"
import TableCell from "./common-components/TableCell"

const columnHelper = createColumnHelper<SheetDataType>()





// const columns = [
const columns = (handleCellUpdate: (rowIndex: number, columnId: string, value: any) => void) => [
    columnHelper.display({
        id: 'rowNumber',
        header: () => <div className="h-full bg-gray-xlight flex justify-center items-center px-2"><HiHashtag className="h-4 w-4 text-gray-light" /></div>,
        cell: info => <div className="w-full text-center px-2 text-sm text-gray-medium">{info.row.index + 1}</div>,
        size: 32
    }),

    columnHelper.group({
        id: 'overview',
        header: () => <TableHeaderLinkCell text={'Q3 Financial Overview'} />,
        footer: props => props.column.id,
        columns: [
            columnHelper.accessor('jobRequest', {
                header: () => <TableHeaderCell isDropDown={true} Icon={FaBriefcase} title="Job Request" />,

                cell: info => <TableCell
                    info={info}
                    onCellUpdate={handleCellUpdate}
                />,
                footer: props => props.column.id,
            }),
            columnHelper.accessor('submitted', {
                header: () => <TableHeaderCell isDropDown={true} Icon={IoCalendar} title="Submitted" />,

                cell: info => <TableCell
                    info={info}
                    onCellUpdate={handleCellUpdate}
                />,
                footer: props => props.column.id,
            }),
            columnHelper.accessor('status', {
                header: () => <TableHeaderCell isDropDown={true} Icon={IoChevronDownCircleSharp} title="Status" />,

                cell: info => <TableCell
                    info={info}
                    onCellUpdate={handleCellUpdate}
                />,
                footer: props => props.column.id,
            }),
            columnHelper.accessor('submitter', {
                header: () => <TableHeaderCell isDropDown={true} Icon={BsPersonFill} title="Submitter" />,

                cell: info => <TableCell
                    info={info}
                    onCellUpdate={handleCellUpdate}
                />,
                footer: props => props.column.id,
            }),
        ],
    }),

    columnHelper.accessor('url', {
        header: () => <TableHeaderCell isDropDown={true} Icon={FaGlobe} title="Url" />,

        cell: info => <TableCell
            info={info}
            onCellUpdate={handleCellUpdate}
        />,
        footer: props => props.column.id,
    }),

    columnHelper.group({
        id: 'ABC',
        header: () => <TableGroupCell Text="ABC" bgClass="bg-green-pale" textClass="text-gray-steel" />,
        footer: props => props.column.id,
        columns: [
            columnHelper.accessor('assigned', {
                header: () => <TableHeaderCell2 bgClass="bg-green-pale" textClass="text-gray-steel" text="Assigned" />,
                cell: info => <TableCell
                    info={info}
                    onCellUpdate={handleCellUpdate}
                />,
                footer: props => props.column.id,
            }),
        ],
    }),
    columnHelper.group({
        id: 'Answer a question',
        header: () => <TableGroupCell Text="Answer a question" bgClass="bg-purple-light" textClass="text-purple-muted" />,
        footer: props => props.column.id,
        columns: [
            columnHelper.accessor('priority', {
                header: () => <TableHeaderCell2 bgClass="bg-purple-light" textClass="text-purple-muted" text="Priority" />,

                cell: info => <TableCell
                    info={info}
                    onCellUpdate={handleCellUpdate}
                />,
                footer: props => props.column.id,
            }),
            columnHelper.accessor('due_date', {
                header: () => <TableHeaderCell2 bgClass="bg-purple-light" textClass="text-purple-muted" text="Due Date" />,
                cell: info => <TableCell
                    info={info}
                    onCellUpdate={handleCellUpdate}
                />,
                footer: props => props.column.id,
            }),
        ],
    }),
    columnHelper.group({
        id: 'Extract',
        header: () => <TableGroupCell Text="Extract" bgClass="bg-orange-light" textClass="text-brown-muted" />,
        footer: props => props.column.id,
        columns: [
            columnHelper.accessor('est_value', {
                header: () => <TableHeaderCell2 bgClass="bg-orange-light" textClass="text-brown-muted" text="Est. Value" />,

                cell: info => <TableCell
                    info={info}
                    onCellUpdate={handleCellUpdate}
                />,
                footer: props => props.column.id,
            }),
        ],
    }),
    columnHelper.group({
        id: 'add new column',
        header: () => <div className="h-full flex justify-center items-center px-2 bg-gray-xlight ">
            <button className="cursor-pointer"><BiPlus className="text-navy-dark h-5 w-5" /></button>
        </div>,
        columns: [
            columnHelper.display({
                id: 'newColumn',
                header: () => <div></div>,
                cell: () => null,
                footer: props => props.column.id
            })
        ]
    })
]


export default columns