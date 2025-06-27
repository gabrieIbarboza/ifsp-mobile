export interface Movie {
    id: string;
    title: string;
    image: string;
    rating: number;
    genres: string[];
    year: number;
    duration: string;
    description?: string;
    contentRating?: string;
    reviewCount?: number;
}
