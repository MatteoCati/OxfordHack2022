export interface ICategory {
    name: string,
    percentage: number,
    roles: IRole[];
}

export interface IRole {
    id: number
    name: string,
    percentage: number,
}
