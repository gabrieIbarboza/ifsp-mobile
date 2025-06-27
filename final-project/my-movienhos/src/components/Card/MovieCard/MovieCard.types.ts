export type HighlightedMovieCardProps = {
    variant: 'highlighted';
    image: string;
    number: number;
    onPress?: () => void;
};

export type DetailedMovieCardProps = {
    variant: 'detailed';
    image: string;
    title: string;
    rating: number;
    genres: string[];
    year: number;
    duration: string;
    onPress?: () => void;
};

export type DefaultMovieCardProps = {
    variant: 'default';
    image: string;
    onPress: () => void;
};

export type MovieCardProps = {
    card: HighlightedMovieCardProps | DetailedMovieCardProps | DefaultMovieCardProps;
};
