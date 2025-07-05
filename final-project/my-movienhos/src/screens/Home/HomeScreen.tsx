import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../types/Navigation';
import { MovieCard } from "../../components/Card/MovieCard/MovieCard";
import { MoviesList } from "../../components/MoviesList/MoviesList";
import { useHomeViewModel } from '../../viewmodels/HomeViewModel';
import { Tabs } from '../../components/Tabs/Tabs';
import { Loader2 } from 'lucide-react-native';
import styles from './HomeScreen.styles';

const HomeScreen = () => {
    const [activeTab, setActiveTab] = React.useState('recommendations');
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { highlights, recommendations, topRated, popular, loading } = useHomeViewModel();
    if (loading) {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#23272f' }} edges={['top', 'bottom', 'left', 'right']}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Loader2 color="#fff" size={40} style={{ marginBottom: 12 }} />
                    <Text style={{ color: '#fff', fontSize: 18 }}>Carregando...</Text>
                </View>
            </SafeAreaView>
        );
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#23272f' }} edges={['top', 'bottom', 'left', 'right']}>
            <View style={styles.container}>
                <View style={styles.highlightsSection}>
                    <Text style={styles.highlightsTitle}>DESTAQUES 🔥</Text>
                    <MoviesList
                        data={highlights}
                        scrollDirection="horizontal"
                        itemSpacing={0}
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
                                <Text style={styles.sectionText}>
                                    Aqui estão algumas recomendações de filmes especialmente para você!
                                </Text>
                                <MoviesList
                                    data={recommendations}
                                    columns={3}
                                    scrollDirection="vertical"
                                    itemSpacing={0}
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
                                <Text style={styles.sectionText}>
                                    Estes são os filmes mais bem avaliados da nossa coleção!
                                </Text>
                                <MoviesList
                                    data={topRated}
                                    columns={3}
                                    scrollDirection="vertical"
                                    itemSpacing={0}
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
                                <>
                                <Text style={styles.sectionText}>
                                    Aqui estão os filmes mais assistidos recentemente!
                                </Text>
                                <MoviesList
                                    data={popular}
                                    columns={3}
                                    scrollDirection="vertical"
                                    itemSpacing={0}
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
                    ]}
                    activeTab={activeTab}
                    onChangeTab={setActiveTab}
                    tabBarStyle={{ marginBottom: 8, marginHorizontal: 0 }}
                />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;