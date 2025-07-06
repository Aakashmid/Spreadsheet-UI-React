import { createColumnHelper } from "@tanstack/react-table"

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
        header: () => '#',
        cell: info => info.row.index + 1,
    }),

    columnHelper.group({
        header: 'Overview',
        footer: props => props.column.id,
        columns: [
            columnHelper.accessor('jobRequest', {
                // cell: info => info.getValue(),
                cell: info => <div className="overflow-hidden">{info.getValue()}</div>,
                footer: props => props.column.id,
            }),
            columnHelper.accessor('submitted', {
                cell: info => <span className="">{info.getValue().toLocaleDateString()}</span>,
                footer: props => props.column.id,
            }),
            columnHelper.accessor('submitter', {
                cell: info => info.getValue(),
                footer: props => props.column.id,
            }),
            columnHelper.accessor('status', {
                cell: info => info.getValue(),
                footer: props => props.column.id,
            }),
            columnHelper.accessor('url', {
                cell: info => info.getValue(),
                footer: props => props.column.id,
            }),
        ],
    }),


    columnHelper.group({
        header: 'ABC',
        footer: props => props.column.id,
        columns: [
            columnHelper.accessor('assigned', {
                cell: info => info.getValue(),
                footer: props => props.column.id,
            }),
        ],
    }),
    columnHelper.group({
        header: 'Answer a question',
        footer: props => props.column.id,
        columns: [
            columnHelper.accessor('priority', {
                cell: info => info.getValue(),
                footer: props => props.column.id,
            }),
            columnHelper.accessor('due_date', {
                cell: info => <span className="">{info.getValue().toLocaleDateString()}</span>,
                footer: props => props.column.id,
            }),
        ],
    }),
    columnHelper.group({
        header: 'Extract',
        footer: props => props.column.id,
        columns: [
            columnHelper.accessor('est_value', {
                cell: info => info.getValue(),
                footer: props => props.column.id,
            }),
        ],
    }),
]
