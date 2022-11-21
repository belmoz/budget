export interface IBudget {
    month: number,
    sum: number
}
export interface IChannel {
    id: number,
    title: string,
    budget: IBudget[]
}