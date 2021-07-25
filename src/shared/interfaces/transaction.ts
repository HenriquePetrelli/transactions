export interface Transaction {
    id?: string,
    title?: string,
    description?: string,
    status?: string,
    amount?: number,
    date?: Date,
    from?: string,
    to?: string
}
