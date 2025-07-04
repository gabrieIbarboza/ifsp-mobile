import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

export interface IconTextProps {
  icon: React.ReactNode;
  text: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const IconText: React.FC<IconTextProps> = ({ icon, text, style, textStyle }) => (
  <View style={[styles.container, style]}>
    {icon}
    <Text style={[styles.text, textStyle]}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 4,
    fontSize: 14,
    color: '#e3b341',
    fontWeight: 'bold',
  },
});
