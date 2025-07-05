import { useState, useCallback, useEffect } from 'react';
import { MoviesAPI } from '../services/moviesApi';
import type { Movie } from '../models/Movie';
import type { Review } from '../models/Review';

export function useMovieDetailsViewModel(movieId: string | undefined) {
  const [watched, setWatched] = useState(false);

  // Busca o filme e reviews do mock (agora assíncrono)
  const [movie, setMovie] = useState<Movie | undefined>(undefined);
  const [baseReviews, setBaseReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  // Carrega dados ao montar ou quando movieId muda
  useEffect(() => {
    if (!movieId) return;
    setLoading(true);
    Promise.all([
      MoviesAPI.getById(movieId),
      MoviesAPI.getReviewsByMovieId(movieId)
    ]).then(([movieData, reviewsData]) => {
      setMovie(movieData);
      setBaseReviews(reviewsData);
      setLoading(false);
    });
  }, [movieId]);

  // Estado de likes/liked para cada review
  const [reviewLikes, setReviewLikes] = useState(() =>
    baseReviews.map((review) => ({
      id: review.id,
      likeCount: review.likeCount,
      liked: false,
    }))
  );

  const handleLikeReview = useCallback((reviewId: string) => {
    setReviewLikes((prev) =>
      prev.map((r) =>
        r.id === reviewId
          ? {
              ...r,
              liked: !r.liked,
              likeCount: r.liked ? r.likeCount - 1 : r.likeCount + 1,
            }
          : r
      )
    );
  }, []);

  // Junta dados de review e estado de like
  const reviews = baseReviews.map((review) => {
    const likeState = reviewLikes.find((r) => r.id === review.id);
    return {
      ...review,
      likeCount: likeState ? likeState.likeCount : review.likeCount,
      liked: likeState ? likeState.liked : false,
      onLike: () => handleLikeReview(review.id),
    };
  });

  const toggleWatched = useCallback(() => {
    setWatched((prev) => !prev);
  }, []);

  return {
    movie,
    reviews,
    watched,
    setWatched,
    toggleWatched,
    loading,
  };
}
