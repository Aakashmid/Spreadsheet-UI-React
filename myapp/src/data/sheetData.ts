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
        due_date: new Date('2024-11-20'),
        est_value: 6200000
    },
    {
        jobRequest: 'Update press kit for company redesign',
        submitted: new Date('2024-10-28'),
        status: 'Need to start',
        submitter: 'Irfan Khan',
        url: 'www.irfankhanportfolio.com',
        assigned: 'Tejas Pandey',
        priority: 'High',
        due_date: new Date('2024-10-30'),
        est_value: 3500000
    },
    {
        jobRequest: 'Update press kit for company redesign',
        submitted: new Date('2024-10-28'),
        status: 'In-Progress',
        submitter: 'Aisha Patel',
        url: 'www.aishapatel.com',
        assigned: 'Sophie Choudhury',
        priority: 'Medium',
        due_date: new Date('2024-11-20'),
        est_value: 6200000
    },
    {
        jobRequest: 'Update press kit for company redesign',
        submitted: new Date('2024-10-28'),
        status: 'In-Progress',
        submitter: 'Aisha Patel',
        url: 'www.aishapatel.com',
        assigned: 'Sophie Choudhury',
        priority: 'Medium',
        due_date: new Date('2024-11-20'),
        est_value: 6200000
    },
    {
        jobRequest: 'Update press kit for company redesign',
        submitted: new Date('2024-10-28'),
        status: 'In-Progress',
        submitter: 'Aisha Patel',
        url: 'www.aishapatel.com',
        assigned: 'Sophie Choudhury',
        priority: 'Medium',
        due_date: new Date('2024-11-20'),
        est_value: 6200000
    }
]

export default sheet_data;