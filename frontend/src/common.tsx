export interface ICategory {
    name: string,
    percentage: number,
    roles: IRole[];
}

export interface IRole {
    name: string,
    percentage: number,
}

export enum Page {
    HOME=0,
    GRAPH=1,
    ROLE=2,
}
