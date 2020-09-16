export interface ResponseMeta {
    id: number
    records: Transfer[]
}

export interface Scheduling {
    id?: number
    schedulingDate?: Date
    transferDate: Date
}

export interface Tax {
    id: number
    amount: number
}

export interface Customer {
    id?: number,
    name: string,
    cpf: string
}

export interface Transfer {
    id?: number
    accountOrigin: string
    accountTarget: string
    totalPaid?: number
    amount: number
    tax?: Tax
    customer: Customer
    scheduling: Scheduling
}