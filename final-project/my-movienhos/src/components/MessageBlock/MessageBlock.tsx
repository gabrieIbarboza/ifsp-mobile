import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

export interface MessageBlockProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  descriptionStyle?: TextStyle;
}

export const MessageBlock: React.FC<MessageBlockProps> = ({
  icon,
  title,
  description,
  style,
  titleStyle,
  descriptionStyle,
}) => (
  <View style={[styles.container, style]}>
    <View style={styles.icon}>{icon}</View>
    <Text style={[styles.title, titleStyle]}>{title}</Text>
    {!!description && <Text style={[styles.description, descriptionStyle]}>{description}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    width: '100%',
  },
  icon: {
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 4,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
});
