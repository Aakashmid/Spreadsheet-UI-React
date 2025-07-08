import { createColumnHelper } from "@tanstack/react-table"
import TableHeaderCell from "./common-components/TableHeaderCell"
import { FaBriefcase, FaGlobe } from "react-icons/fa"
import { IoCalendar, IoChevronDownCircleSharp } from "react-icons/io5"
import { BsPersonFill } from "react-icons/bs"
import { HiHashtag } from "react-icons/hi2"
import TableGroupCell from "./common-components/TableGroupCell"
import TableHeaderCell2 from "./common-components/TableHeaderCell2"
import TableHeaderLinkCell from "./common-components/TableHeaderLinkCell"

export type SheetDataType = {
    jobRequest: string,  // Overview group
    submitted: Date,
    submitter: string,
    status: string,
    url: string,
    assigned: string,  // ABC group 
    priority: string,  //  Answer a question - group for priority and due_date
    due_date: Date,
    est_value: number     // extract group
}


export const sheet_data: SheetDataType[] = [
    {
        jobRequest: 'Launch social media campaign for product XYZ',
        submitted: new Date('2024-11-15'),
        status: 'In-Progress',
        submitter: 'Aisha Patel',
        url: 'www.aishapatel.com',
        assigned: 'Sophie Choudhury',
        priority: 'Medium',
        due_date: new Date('20-11-2024'),
        est_value: 6200000
    },
    {
        jobRequest: 'Update press kit for company redesign',
        submitted: new Date('28-10-2024'),
        status: 'Need to start',
        submitter: 'Irfan Khan',
        url: 'www.irfankhanportfolio.com',
        assigned: 'Tejas Pandey',
        priority: 'High',
        due_date: new Date('30-10-2024'),
        est_value: 3500000
    },
    {
        jobRequest: 'Update press kit for company redesign',
        submitted: new Date('28-10-2024'),
        status: 'In-Progress',
        submitter: 'Aisha Patel',
        url: 'www.aishapatel.com',
        assigned: 'Sophie Choudhury',
        priority: 'Medium',
        due_date: new Date('20-11-2024'),
        est_value: 6200000
    },
    {
        jobRequest: 'Update press kit for company redesign',
        submitted: new Date('28-10-2024'),
        status: 'In-Progress',
        submitter: 'Aisha Patel',
        url: 'www.aishapatel.com',
        assigned: 'Sophie Choudhury',
        priority: 'Medium',
        due_date: new Date('20-11-2024'),
        est_value: 6200000
    },
    {
        jobRequest: 'Update press kit for company redesign',
        submitted: new Date('28-10-2024'),
        status: 'In-Progress',
        submitter: 'Aisha Patel',
        url: 'www.aishapatel.com',
        assigned: 'Sophie Choudhury',
        priority: 'Medium',
        due_date: new Date('20-11-2024'),
        est_value: 6200000
    }
]



const columnHelper = createColumnHelper<SheetDataType>()



export const columns = [
    columnHelper.display({
        id: 'rowNumber',
        header: () => <TableHeaderCell Icon={HiHashtag} />,
        cell: info => info.row.index + 1,
    }),

    columnHelper.group({
        id: 'overview',
        header: ()=> <TableHeaderLinkCell text={'Q3 Financial Overview'}/>,
        footer: props => props.column.id,
        columns: [
            columnHelper.accessor('jobRequest', {
                header: () => <TableHeaderCell isDropDown={true} Icon={FaBriefcase} title="Job Request" />,
                cell: info => <div className="overflow-hidden">{info.getValue()}</div>,
                footer: props => props.column.id,
            }),
            columnHelper.accessor('submitted', {
                header: () => <TableHeaderCell isDropDown={true} Icon={IoCalendar} title="Submitted" />,
                cell: info => <span className="">{info.getValue().toLocaleDateString()}</span>,
                footer: props => props.column.id,
            }),
            columnHelper.accessor('status', {
                header: () => <TableHeaderCell isDropDown={true} Icon={IoChevronDownCircleSharp} title="Status" />,
                cell: info => info.getValue(),
                footer: props => props.column.id,
            }),
            columnHelper.accessor('submitter', {
                header: () => <TableHeaderCell isDropDown={true} Icon={BsPersonFill} title="Submitter" />,
                cell: info => info.getValue(),
                footer: props => props.column.id,
            }),
            columnHelper.accessor('url', {
                header: () => <TableHeaderCell isDropDown={true} Icon={FaGlobe} title="Url" />,
                cell: info => info.getValue(),
                footer: props => props.column.id,
            }),
        ],
    }),


    columnHelper.group({
        id: 'ABC',
        header: () => <TableGroupCell Text="ABC" bgClass="bg-green-pale" textClass="text-gray-steel" />,
        footer: props => props.column.id,
        columns: [
            columnHelper.accessor('assigned', {
                header: ()=> <TableHeaderCell2 bgClass="bg-green-pale" textClass="text-gray-steel" text="Assigned"/>,
                cell: info => info.getValue(),
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
                header: ()=> <TableHeaderCell2 bgClass="bg-purple-light" textClass="text-purple-muted" text="Priority"/>,
                cell: info => info.getValue(),
                footer: props => props.column.id,
            }),
            columnHelper.accessor('due_date', {
                header: ()=> <TableHeaderCell2 bgClass="bg-purple-light" textClass="text-purple-muted" text="Due Date"/>,
                cell: info => <span className="">{info.getValue().toLocaleDateString()}</span>,
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
                header: ()=> <TableHeaderCell2 bgClass="bg-orange-light" textClass="text-brown-muted" text="Est. Value"/>,
                cell: info => info.getValue(),
                footer: props => props.column.id,
            }),
        ],
    }),
]
