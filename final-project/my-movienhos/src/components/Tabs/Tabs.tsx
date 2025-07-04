import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';

export interface TabItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChangeTab: (key: string) => void;
  tabBarStyle?: ViewStyle;
  tabLabelStyle?: TextStyle;
  contentContainerStyle?: ViewStyle;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChangeTab,
  tabBarStyle,
  tabLabelStyle,
  contentContainerStyle,
}) => {
  const activeIdx = tabs.findIndex(tab => tab.key === activeTab);
  return (
    <View>
      <View style={[styles.tabBar, tabBarStyle]}>
        {tabs.map((tab, idx) => {
          const isActive = tab.key === activeTab;
          return (
            <TouchableOpacity
              key={tab.key}
              style={styles.tabButton}
              onPress={() => onChangeTab(tab.key)}
              activeOpacity={0.7}
            >
              {tab.icon && <View style={styles.icon}>{tab.icon}</View>}
              <Text style={[styles.tabLabel, tabLabelStyle, isActive && styles.activeTabLabel]}>{tab.label}</Text>
              {isActive && <View style={styles.activeBar} />}
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={[styles.contentContainer, contentContainerStyle]}>
        {tabs[activeIdx]?.content}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#23272f',
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 0,
    alignItems: 'flex-end',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    position: 'relative',
  },
  tabLabel: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 4,
  },
  activeTabLabel: {
    fontWeight: 'bold',
    color: '#fff',
  },
  activeBar: {
    position: 'absolute',
    left: 8,
    right: 8,
    bottom: 0,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#fff',
  },
  icon: {
    marginBottom: 2,
  },
  contentContainer: {
    minHeight: 60,
    backgroundColor: 'transparent',
    paddingTop: 12,
  },
});
