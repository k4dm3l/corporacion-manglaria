export interface TEntity {
    _id: string;
    title: string;
    excerpt: string;
    author: TAuthor;
    image: string;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface TAuthor {
    _id: string;
    name: string;
    profileImg: string;
}

interface TPagination {
    total: number;
    page: number;
    pages: number;
}

export interface TGetEntitiesResponse {
    entities: TEntity[];
    pagination: TPagination;
    error?: boolean
}

export type TEntityResponse = TEntity