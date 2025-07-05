
import React from 'react';
import { FlatList, View, StyleSheet, ViewStyle } from 'react-native';
import type { Movie } from '../../models/Movie';

export interface MoviesListProps {
  data: Movie[];
  renderItem: (movie: Movie, index: number) => React.ReactNode;
  itemSpacing?: number;
  columns?: number;
  rows?: number;
  scrollDirection?: 'vertical' | 'horizontal';
  style?: ViewStyle;
}

export const MoviesList: React.FC<MoviesListProps> = ({
  data,
  renderItem,
  itemSpacing = 8,
  columns = 1,
  rows,
  scrollDirection = 'vertical',
  style,
}) => {
  // If rows is set, limit the data to rows * columns
  const limitedData = rows ? data.slice(0, rows * columns) : data;

  return (
    <FlatList
      data={limitedData}
      keyExtractor={(_, idx) => idx.toString()}
      renderItem={({ item, index }) => (
        <View style={{ margin: itemSpacing / 2 }}>
          {renderItem(item, index)}
        </View>
      )}
      numColumns={scrollDirection === 'vertical' ? columns : 1}
      horizontal={scrollDirection === 'horizontal'}
      contentContainerStyle={[
        { gap: itemSpacing },
        styles.container,
        style,
      ]}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
