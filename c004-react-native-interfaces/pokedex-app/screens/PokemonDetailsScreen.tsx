import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface PokemonDetailProps {
  route: any; 
}

export const PokemonDetailsScreen = ({ route }: PokemonDetailProps) => {
  const { pokemon } = route.params; 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{pokemon.name}</Text>
      <Image source={{ uri: pokemon.image }} style={styles.image} />
      <Text style={styles.subtitle}>Tipos:</Text>
      {pokemon.types.map((type: string, index: number) => (
        <Text key={index} style={styles.type}>{type}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  type: {
    fontSize: 16,
    marginBottom: 4,
    color: '#555',
  },
});