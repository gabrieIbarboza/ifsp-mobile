import { useState } from 'react';
import { mockMovies } from '../services/mockMoviesRepository';
import type { Movie } from '../models/Movie';

export function useSearchViewModel() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Movie[]>([]);
  const [searched, setSearched] = useState(false);

  const onChangeText = (text: string) => {
    setQuery(text);
    if (text.trim() === '') {
      setResults([]);
      setSearched(false);
      return;
    }
    const filtered = mockMovies.filter((movie) =>
      movie.title.toLowerCase().includes(text.toLowerCase()) ||
      movie.genres.some((g) => g.toLowerCase().includes(text.toLowerCase()))
    );
    setResults(filtered);
    setSearched(true);
  };

  const onClear = () => {
    setQuery('');
    setResults([]);
    setSearched(false);
  };

  return {
    query,
    results,
    searched,
    onChangeText,
    onClear,
  };
}
