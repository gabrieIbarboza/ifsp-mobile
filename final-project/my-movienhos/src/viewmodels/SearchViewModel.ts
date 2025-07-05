import { useState } from 'react';
import { MoviesAPI } from '../services/moviesApi';
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
    MoviesAPI.search(text).then((filtered) => {
      setResults(filtered);
      setSearched(true);
    });
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
