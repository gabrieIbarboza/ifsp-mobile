import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { groupBy, sumBy, unique } from '@/scripts/arrayUtilsTS';
export default function TabTwoScreen() {
  // Example usage of unique
  const numbers = [1, 2, 2, 3, 4, 4];
  const uniqueNumbers = unique(numbers);

  const strings = ['apple', 'banana', 'apple', 'orange'];
  const uniqueStrings = unique(strings);

  // Example usage of groupBy
  const itemsByType = [
    { type: 'A', value: 10 },
    { type: 'B', value: 20 },
    { type: 'A', value: 30 },
  ];
  const groupedByType = groupBy(itemsByType, 'type');

  const itemsByCategory = [
    { category: 'fruit', name: 'apple' },
    { category: 'fruit', name: 'banana' },
    { category: 'vegetable', name: 'carrot' },
  ];
  const groupedByCategory = groupBy(itemsByCategory, 'category');

  // Example usage of sumBy
  const itemsWithValue = [
    { value: 10 },
    { value: 20 },
    { value: 30 },
  ];
  const sumByValue = sumBy(itemsWithValue, 'value');

  const itemsWithPrice = [
    { price: 5 },
    { price: 15 },
    { price: 25 },
  ];
  const sumByPrice = sumBy(itemsWithPrice, 'price');

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Array Utils.js!</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Unique Example</ThemedText>
        <ThemedText>Before: {JSON.stringify(numbers)}</ThemedText>
        <ThemedText>After: {JSON.stringify(uniqueNumbers)}</ThemedText>
        <ThemedText>Before: {JSON.stringify(strings)}</ThemedText>
        <ThemedText>After: {JSON.stringify(uniqueStrings)}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">GroupBy Example</ThemedText>
        <ThemedText>Before: {JSON.stringify(itemsByType)}</ThemedText>
        <ThemedText>After: {JSON.stringify(groupedByType)}</ThemedText>
        <ThemedText>Before: {JSON.stringify(itemsByCategory)}</ThemedText>
        <ThemedText>After: {JSON.stringify(groupedByCategory)}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">SumBy Example</ThemedText>
        <ThemedText>Before: {JSON.stringify(itemsWithValue)}</ThemedText>
        <ThemedText>After: {sumByValue}</ThemedText>
        <ThemedText>Before: {JSON.stringify(itemsWithPrice)}</ThemedText>
        <ThemedText>After: {sumByPrice}</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});