export interface Review {
    id: string;
    movieId: string;
    userId: string;
    username: string;
    rating: number;
    comment?: string;
    likeCount: number;
    createdAt: string;
}
