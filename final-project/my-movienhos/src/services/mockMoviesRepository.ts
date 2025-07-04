import type { Review } from '../models/Review';
// Mock de reviews para cada filme
function generateMockReviews(movieId: string): Review[] {
  return [
    {
      id: `${movieId}-1`,
      movieId,
      userId: '1',
      username: 'GabrielKlark',
      rating: 6.3,
      comment: 'From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government.',
      likeCount: 25,
      createdAt: new Date().toISOString(),
    },
    {
      id: `${movieId}-2`,
      movieId,
      userId: '2',
      username: 'Liny123',
      rating: 7.8,
      comment: 'Ótimo filme, recomendo para quem gosta de ação e aventura!',
      likeCount: 12,
      createdAt: new Date().toISOString(),
    },
  ];
}
import type { Movie } from '../models/Movie';

// Gera 100 filmes mockados com dados variados
export const mockMovies: Movie[] = Array.from({ length: 100 }, (_, i) => {
  const id = (i + 1).toString();
  const titles = [
    'Call Me by Your Name',
    'Moonlight',
    'Portrait of a Lady on Fire',
    'The Handmaiden',
    'Carol',
    'Milk',
    'Pride',
    'The Way He Looks',
    'Blue Is the Warmest Color',
    'Love, Simon',
    'Weekend',
    'God’s Own Country',
    'Tangerine',
    'Pariah',
    'The Kids Are All Right',
    'Brokeback Mountain',
    'The Favourite',
    'A Fantastic Woman',
    'The Birdcage',
    'But I’m a Cheerleader',
  ];
  const genresList = [
    ['Drama', 'Romance'],
    ['Comedy'],
    ['Drama'],
    ['Biography', 'Drama'],
    ['Drama', 'Romance'],
    ['Drama', 'Comedy'],
    ['Thriller', 'LGBTQ+'],
  ];
  const randomTitle = titles[i % titles.length] + (i >= titles.length ? ` ${i + 1}` : '');
  const randomGenres = genresList[i % genresList.length];
  const randomYear = 2000 + (i % 25);
  const randomRating = +(6 + Math.random() * 3).toFixed(1);
  const randomDuration = `${1 + (i % 3)}h ${30 + (i % 30)}m`;
  return {
    id,
    title: randomTitle,
    image: require('../../assets/images/default-movie-poster.png'),
    year: randomYear,
    rating: randomRating,
    genres: randomGenres,
    duration: randomDuration,
    description: `Descrição do filme ${randomTitle}.`,
    contentRating: i % 2 === 0 ? '16+' : '18+',
    reviewCount: 10 + (i * 3) % 100,
    gallery: [require('../../assets/images/default-movie-wallpaper.jpg')],
  };
});

// Mapeia reviews por movieId
export const mockReviews: { [movieId: string]: Review[] } = Object.fromEntries(
  mockMovies.map((movie) => [movie.id, generateMockReviews(movie.id)])
);

export const mockMoviesRepository = {
  getAll: () => mockMovies,
  getById: (id: string) => mockMovies.find((m) => m.id === id),
  search: (query: string) =>
    mockMovies.filter((m) =>
      m.title.toLowerCase().includes(query.toLowerCase()) ||
      m.genres.some((g) => g.toLowerCase().includes(query.toLowerCase()))
    ),
  getReviewsByMovieId: (movieId: string) => mockReviews[movieId] || [],
};
