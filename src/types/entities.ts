export interface TEntity {
    _id: string;
    title: string;
    description: string;
    author: TAuthor;
    image: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    content?: string;
    slug: string;
}

export interface TAuthor {
    _id: string;
    name: string;
    profileImg: string;
}

interface TPagination {
    page: number
    limit: number
    total: number
    totalPages: number
}

export interface TGetEntitiesResponse {
    entities: TEntity[];
    pagination: TPagination;
    error?: boolean
}

export type TEntityResponse = TEntity