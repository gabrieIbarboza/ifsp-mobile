import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

export interface HeaderProps {
  title: string;
  leftButton?: React.ReactNode;
  rightButton?: React.ReactNode;
  style?: ViewStyle;
}

export const Header: React.FC<HeaderProps> = ({ title, leftButton, rightButton, style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.side}>{leftButton}</View>
      <View style={styles.center}><Text style={styles.title}>{title}</Text></View>
      <View style={styles.side}>{rightButton}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    paddingHorizontal: 12,
    backgroundColor: '#23272f',
  },
  side: {
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
