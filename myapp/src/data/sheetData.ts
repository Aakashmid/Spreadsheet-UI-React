export type SheetDataType = {
    id:number,
    jobRequest: string, 
    submitted: Date | null,
    submitter: string,
    status: string,
    url: string,
    assigned: string, 
    priority: string,  
    due_date: Date | null,
    est_value: number | null, 
}


export const sheet_data: SheetDataType[] = [
    {
        id: 1,
        jobRequest: 'Launch social media campaign for product XYZ',
        submitted: new Date('2024-11-15'),
        status: 'In-Process',
        submitter: 'Aisha Patel',
        url: 'www.aishapatel.com',
        assigned: 'Sophie Choudhury',
        priority: 'Medium',
        due_date: new Date('2024-11-20'),
        est_value: 6200000
    },
    {
        id: 2,
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
        id: 3,
        jobRequest: 'Update press kit for company redesign',
        submitted: new Date('2024-10-28'),
        status: 'Complete',
        submitter: 'Aisha Patel',
        url: 'www.aishapatel.com',
        assigned: 'Sophie Choudhury',
        priority: 'Medium',
        due_date: new Date('2024-11-20'),
        est_value: 6200000
    },
    {
        id: 4,
        jobRequest: 'Update press kit for company redesign',
        submitted: new Date('2024-10-28'),
        status: 'In-Process',
        submitter: 'Aisha Patel',
        url: 'www.aishapatel.com',
        assigned: 'Sophie Choudhury',
        priority: 'Medium',
        due_date: new Date('2024-11-20'),
        est_value: 6200000
    },
    {
        id: 5,
        jobRequest: 'Update press kit for company redesign',
        submitted: new Date('2024-10-28'),
        status: 'Blocked',
        submitter: 'Aisha Patel',
        url: 'www.aishapatel.com',
        assigned: 'Sophie Choudhury',
        priority: 'Low',
        due_date: new Date('2024-11-20'),
        est_value: 6200000
    }
]

export default sheet_data;