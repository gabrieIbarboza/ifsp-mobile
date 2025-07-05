import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './MovieDetailsScreen.styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Header } from '../../components/Header/Header';
import ActionButton from '../../components/ActionButton/ActionButton';
import { Star, ChevronLeft, Calendar, Clock, Film, Loader2 } from 'lucide-react-native';
import { IconText } from '../../components/IconText/IconText';
import { Tabs } from '../../components/Tabs/Tabs';
import { MovieCard } from '../../components/Card/MovieCard/MovieCard';
import Review from '../../components/Review/Review';
import { useMovieDetailsViewModel } from '../../viewmodels/MovieDetailsViewModel';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../../types/Navigation';
import { getImageSource } from '../../utils/image';

const MovieDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, 'MovieDetails'>>();

  const [activeTab, setActiveTab] = useState('about');
  const movieId = route.params?.movieId;
  const { movie, reviews, watched, setWatched, toggleWatched, loading } = useMovieDetailsViewModel(movieId);

  if (loading) {
    return (
      <SafeAreaView style={[styles.container, { alignItems: 'center', justifyContent: 'center' }] }>
        <Loader2 color="#fff" size={36} style={{ marginBottom: 12 }} />
        <Text style={{ color: '#fff', fontSize: 18 }}>Carregando...</Text>
      </SafeAreaView>
    );
  }
  if (!movie) {
    return (
      <SafeAreaView style={[styles.container, { alignItems: 'center', justifyContent: 'center' }] }>
        <Text style={{ color: '#fff', fontSize: 18 }}>Filme não encontrado.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom', 'left', 'right']}>
      <Header
        title="Detalhes"
        leftButton={
          <ActionButton
            active={false}
            onActivate={() => navigation.goBack()}
            onDeactivate={() => {}}
            iconOn={<ChevronLeft color="#fff" size={24} />}
            iconOff={<ChevronLeft color="#fff" size={24} />}
            style={{ backgroundColor: 'transparent', padding: 0 }}
          />
        }
        rightButton={
          <ActionButton
            active={watched}
            onActivate={toggleWatched}
            onDeactivate={toggleWatched}
            iconOn={<Star color="#e3b341" size={22} fill="#e3b341" />}
            iconOff={<Star color="#888" size={22} />}
            style={{ backgroundColor: 'transparent', padding: 0 }}
          />
        }
        style={{ backgroundColor: '#23272f' }}
      />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 0 }}>
        {/* Banner */}
        <View style={{ width: '100%', height: 180, backgroundColor: '#23272f', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={getImageSource(movie.gallery[0])} style={{ width: '100%', height: '100%', resizeMode: 'cover', position: 'absolute', opacity: 0.7 }} />
          <View style={{ position: 'absolute', left: 16, bottom: 16, flexDirection: 'row', alignItems: 'center' }}>
            <Image source={getImageSource(movie.image)} style={{ width: 80, height: 110, borderRadius: 12, borderWidth: 2, borderColor: '#fff', backgroundColor: '#23272f' }} />
            <View style={{ marginLeft: 16 }}>
              <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold', marginBottom: 4 }}>{movie.title}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <IconText icon={<Calendar color="#fff" size={16} />} text={String(movie.year)} textStyle={{ color: '#fff' }} />
                <IconText icon={<Clock color="#fff" size={16} />} text={movie.duration} textStyle={{ color: '#fff' }} />
                <IconText icon={<Film color="#fff" size={16} />} text={movie.genres.join(', ')} textStyle={{ color: '#fff' }} />
              </View>
            </View>
          </View>
          <View style={{ position: 'absolute', right: 16, top: 16, backgroundColor: '#23272f', borderRadius: 16, paddingHorizontal: 10, paddingVertical: 4, flexDirection: 'row', alignItems: 'center' }}>
            <Star color="#e3b341" size={16} />
            <Text style={{ color: '#e3b341', fontWeight: 'bold', marginLeft: 4 }}>{movie.rating}</Text>
          </View>
        </View>

        {/* Tabs */}
        <View style={{ marginTop: 16, flex: 1 }}>
          <Tabs
            tabs={[
              {
                key: 'about',
                label: 'Sobre',
                content: (
                  <View style={styles.tabContent}>
                    <Text style={styles.description}>{movie.description}</Text>
                    {/* <Text style={styles.director}>Diretor: {movie.director}</Text> */}
                  </View>
                ),
              },
              {
                key: 'reviews',
                label: 'Avaliações',
                content: (
                  <View style={[styles.tabContent, { width: '100%' }] }>
                    {reviews.length === 0 ? (
                      <Text style={{ color: '#888', fontSize: 15, textAlign: 'center' }}>Nenhuma avaliação ainda.</Text>
                    ) : (
                      reviews.map((review) => (
                        <Review
                          key={review.id}
                          username={review.username}
                          rating={review.rating}
                          comment={review.comment || ''}
                          likeCount={review.likeCount}
                          liked={review.liked}
                          onLike={review.onLike}
                        />
                      ))
                    )}
                  </View>
                ),
              },
              {
                key: 'rate',
                label: 'Avalie',
                content: (
                  <View style={[styles.tabContent, { alignItems: 'center', justifyContent: 'center' }] }>
                    <Text style={{ color: '#888', fontSize: 15 }}>Funcionalidade de avaliação em breve.</Text>
                  </View>
                ),
              },
            ]}
            activeTab={activeTab}
            onChangeTab={setActiveTab}
            tabBarStyle={styles.tabBar}
            contentContainerStyle={{ backgroundColor: '#23272f', borderRadius: 12, minHeight: 120 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetailsScreen;
