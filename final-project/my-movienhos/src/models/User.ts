import { Movie } from './Movie';

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    avatarUrl?: string;
    favorites?: string[] | Movie[];
    watched?: string[] | Movie[];
}
