export interface ICategory {
    name: string,
    percentage: number,
    roles: IRole[];
}

export interface IRole {
    name: string,
    percentage: number,
}
