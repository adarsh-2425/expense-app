interface Data {
    report: {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_At: Date;
        type: ReportType
    }[];
 }

 export enum ReportType {
    INCOME = "income",
    EXPENSE = "expense"
 }

 export const data: Data = {
    report: [
        {
            id: 'uuid1',
            source: 'Salary',
            amount: 7500,
            created_at: new Date(),
            updated_At: new Date(),
            type: ReportType.INCOME
        },
        {
            id: 'uuid2',
            source: 'Youtube',
            amount: 2500,
            created_at: new Date(),
            updated_At: new Date(),
            type: ReportType.EXPENSE
        }
    ],
 }