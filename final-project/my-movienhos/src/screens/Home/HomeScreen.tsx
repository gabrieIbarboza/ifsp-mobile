import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../types/Navigation';
import { MovieCard } from "../../components/Card/MovieCard/MovieCard";
import { MoviesList } from "../../components/MoviesList/MoviesList";
import { mockMovies } from '../../services/mockMoviesRepository';
import type {
    HighlightedMovieCardProps,
    DetailedMovieCardProps,
    DefaultMovieCardProps
} from "../../components/Card/MovieCard/MovieCard.types";

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

import { Tabs } from '../../components/Tabs/Tabs';

const HomeScreen = () => {
    const [activeTab, setActiveTab] = React.useState('recommendations');
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <View style={{ flex: 1, paddingVertical: 32 }}>
            <View style={{ alignItems: 'center', marginBottom: 24 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 16, alignSelf: 'flex-start' }}>DESTAQUES 🔥</Text>
                <MoviesList
                    data={mockMovies.slice(0, 10)}
                    scrollDirection="horizontal"
                    itemSpacing={12}
                    renderItem={(movie, index) => (
                        <MovieCard
                            card={{
                                variant: 'highlighted',
                                image: movie.image,
                                number: index + 1,
                                onPress: () => navigation.navigate('MovieDetails', { movieId: movie.id }),
                            }}
                        />
                    )}
                />
            </View>
            <Tabs
                tabs={[
                    {
                        key: 'recommendations',
                        label: 'Recomendações',
                        content: (
                            <>
                            <Text style={{ fontSize: 16, color: '#666', marginHorizontal: 16 }}>
                                Aqui estão algumas recomendações de filmes para você assistir!
                            </Text>
                            <MoviesList
                                data={mockMovies.slice(10, 40)}
                                columns={3}
                                scrollDirection="vertical"
                                itemSpacing={12}
                                renderItem={(movie) => (
                                    <MovieCard
                                        card={{
                                            variant: 'default',
                                            image: movie.image,
                                            onPress: () => navigation.navigate('MovieDetails', { movieId: movie.id }),
                                        }}
                                    />
                                )}
                            />
                            </>
                        ),
                    },
                    {
                        key: 'toprated',
                        label: 'Mais Votados',
                        content: (
                            <>
                            <Text style={{ fontSize: 16, color: '#666', marginHorizontal: 16 }}>
                                Estes são os filmes mais bem avaliados da nossa coleção!
                            </Text>
                            <MoviesList
                                data={[...mockMovies].sort((a, b) => b.rating - a.rating).slice(0, 30)}
                                columns={3}
                                scrollDirection="vertical"
                                itemSpacing={12}
                                renderItem={(movie) => (
                                    <MovieCard
                                        card={{
                                            variant: 'default',
                                            image: movie.image,
                                            onPress: () => navigation.navigate('MovieDetails', { movieId: movie.id }),
                                        }}
                                    />
                                )}
                            />
                            </>
                        ),
                    },
                    {
                        key: 'popular',
                        label: 'Popular',
                        content: (
                            <MoviesList
                                data={mockMovies.slice(40, 70)}
                                columns={3}
                                scrollDirection="vertical"
                                itemSpacing={12}
                                renderItem={(movie) => (
                                    <MovieCard
                                        card={{
                                            variant: 'default',
                                            image: movie.image,
                                            onPress: () => navigation.navigate('MovieDetails', { movieId: movie.id }),
                                        }}
                                    />
                                )}
                            />
                        ),
                    },
                ]}
                activeTab={activeTab}
                onChangeTab={setActiveTab}
                tabBarStyle={{ marginBottom: 8, marginHorizontal: 0 }}
                contentContainerStyle={{ flex: 1, minHeight: 300 }}
            />
        </View>
    );
};

export default HomeScreen;