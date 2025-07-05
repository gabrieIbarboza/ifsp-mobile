import { useEffect, useState } from 'react';
import { MoviesAPI } from '../services/moviesApi';
import type { Movie } from '../models/Movie';

export function useHomeViewModel() {
  const [highlights, setHighlights] = useState<Movie[]>([]);
  const [recommendations, setRecommendations] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      MoviesAPI.getAll(),
    ]).then(([all]) => {
      setHighlights(all.slice(0, 10));
      setRecommendations(all.slice(10, 40));
      setTopRated([...all].sort((a, b) => b.rating - a.rating).slice(0, 30));
      setPopular(all.slice(40, 70));
      setLoading(false);
    });
  }, []);

  return {
    highlights,
    recommendations,
    topRated,
    popular,
    loading,
  };
}
