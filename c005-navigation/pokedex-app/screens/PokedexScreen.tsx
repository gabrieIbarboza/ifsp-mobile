import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet } from 'react-native';
import { getPokemons, getPokemonDetails } from '../services/api';
import { Pokemon } from '../types/Pokemon';
import { PokemonCard } from '../components/PokemonCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const PokedexScreen = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [offset, setOffSet] = useState(0); 
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const insets = useSafeAreaInsets();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await getPokemons(30, 0);
        const details = await Promise.all(list.map(p => getPokemonDetails(p.url)));
        setPokemons(details);
        setOffSet(30);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []); 

  const filtered = pokemons.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  const loadMorePokemons = async () => {
    if (isLoadingMore) return;
    setIsLoadingMore(true);

    try {
      const newOffset = offset + 30;
      const list = await getPokemons(30, newOffset);
      const details = await Promise.all(list.map(p => getPokemonDetails(p.url)));
      setPokemons(prevPokemons => [...prevPokemons, ...details]);
      setOffSet(newOffset);
    } catch (error) {
      setError('Falha ao carregar mais Pokémons.');
    } finally {
      setIsLoadingMore(false);
    }
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}> 
      <Text style={styles.title}>Pokédex</Text>
      <TextInput
        placeholder="Buscar pokémon..."
        style={styles.input}
        onChangeText={setSearch}
        value={search}
      />
      {error && <Text style={styles.error}>{error}</Text>}
      {isLoading && <Text style={styles.loading}>Carregando Pokémons...</Text>}
      
      <FlatList
        data={filtered}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        ListEmptyComponent={() => {
          if (search) {
            return <Text style={styles.empty}>Nenhum Pokémon encontrado para '{search}'</Text>;
          }
          if (!isLoading && pokemons.length === 0) {
            return <Text style={styles.empty}>Nenhum Pokémon para exibir no momento.</Text>;
          }
          return null;
        }}
        ListFooterComponent={isLoadingMore ? <Text style={styles.loading}>Carregando mais Pokémons...</Text> : null}
        onEndReached={loadMorePokemons} 
        onEndReachedThreshold={0.1} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16 },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 12 },
  input: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  loading: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  empty: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#555',
  },
});
