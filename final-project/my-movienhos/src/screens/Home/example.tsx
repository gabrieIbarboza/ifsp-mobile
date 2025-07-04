import { HighlightedMovieCardProps, DetailedMovieCardProps, DefaultMovieCardProps } from "../../components/Card/MovieCard/MovieCard.types";

const highlightedMovie: HighlightedMovieCardProps = {
    variant: 'highlighted',
    image: require('../../../assets/images/default-movie-poster.png'),
    number: 1,
    onPress: () => {},
};

const detailedMovie: DetailedMovieCardProps = {
    variant: 'detailed',
    image: require('../../../assets/images/default-movie-poster.png'),
    title: 'Call Me by Your Name',
    rating: 8.1,
    genres: ['Drama', 'Romance', 'Other', 'Genres', 'Here', 'Can be', 'More than', 'Four'],
    year: 2017,
    duration: '2h 12m',
    onPress: () => {},
};

const defaultMovie: DefaultMovieCardProps = {
    variant: 'default',
    image: require('../../../assets/images/default-movie-poster.png'),
    onPress: () => {},
};