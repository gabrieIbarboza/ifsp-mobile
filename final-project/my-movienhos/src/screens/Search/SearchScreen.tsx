import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../types/Navigation';
import { MessageBlock } from '../../components/MessageBlock/MessageBlock';
import { Search, AlertCircle } from 'lucide-react-native';
import styles from './SearchScreen.styles';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { useSearchViewModel } from '../../viewmodels/SearchViewModel';
import { MovieCard } from '../../components/Card/MovieCard/MovieCard';


const SearchScreen = () => {
  const { query, results, searched, onChangeText, onClear } = useSearchViewModel();

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
        <View style={{ width: '100%', alignItems: 'center', marginTop: 16, marginBottom: 16 }}>
          <SearchBar
            value={query}
            onChangeText={onChangeText}
            onClear={onClear}
            placeholder="Buscar filmes..."
            style={{ width: '94%' }}
          />
        </View>
        {query.trim() === '' && !searched && (
          <MessageBlock
            icon={<Search size={40} color="#bbb" />}
            title="Busque por filmes"
            description="Digite o nome ou gênero de um filme para começar a busca."
            style={{ marginTop: 32 }}
          />
        )}
        {query.trim() !== '' && searched && results.length === 0 && (
          <MessageBlock
            icon={<AlertCircle size={40} color="#bbb" />}
            title="Nenhum filme encontrado"
            description="Tente outro termo ou verifique se digitou corretamente."
            style={{ marginTop: 32 }}
          />
        )}
        {results.length > 0 && (
          <View style={{ width: '100%', alignItems: 'center' }}>
            {results.map((movie, idx) => (
              <View key={movie.id} style={{ width: '94%' }}>
                <MovieCard
                  card={{
                    variant: 'detailed',
                    image: movie.image,
                    title: movie.title,
                    rating: movie.rating,
                    genres: movie.genres,
                    year: movie.year,
                    duration: movie.duration,
                    onPress: () => navigation.navigate('MovieDetails', { movieId: movie.id }),
                  }}
                />
              </View>
            ))}
          </View>
        )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Componente auxiliar para renderizar o MovieCard detalhado
const MoviesListDetailedMovieCard = ({ movie }: { movie: any }) => (
  <MoviesListDetailedMovieCardImpl movie={movie} />
);

const MoviesListDetailedMovieCardImpl = ({ movie }: { movie: any }) => {
  return (
    <MoviesList
      data={[movie]}
      columns={1}
      scrollDirection="vertical"
      renderItem={() => (
        <MovieCard
          card={{
            variant: 'detailed',
            image: movie.image,
            title: movie.title,
            rating: movie.rating,
            genres: movie.genres,
            year: movie.year,
            duration: movie.duration,
            onPress: () => {},
          }}
        />
      )}
    />
  );
};

export default SearchScreen;
