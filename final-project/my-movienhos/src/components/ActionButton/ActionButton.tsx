import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, View } from 'react-native';

export interface ActionButtonProps {
  active: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
  iconOn?: React.ReactNode;
  iconOff?: React.ReactNode;
  textOn?: string;
  textOff?: string;
  style?: ViewStyle;
  disabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  active,
  onActivate,
  onDeactivate,
  iconOn,
  iconOff,
  textOn,
  textOff,
  style,
  disabled = false,
}) => {
  const handlePress = () => {
    if (disabled) return;
    if (active) {
      onDeactivate();
    } else {
      onActivate();
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, style, disabled && styles.disabled]}
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={disabled}
    >
      <View style={styles.content}>
        {active ? iconOn : iconOff}
        {(active ? textOn : textOff) ? (
          <Text style={[styles.text, active ? styles.textActive : styles.textInactive]}>
            {active ? textOn : textOff}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
  },
  disabled: {
    opacity: 0.5,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 6,
    fontSize: 16,
  },
  textActive: {
    color: '#007aff',
    fontWeight: 'bold',
  },
  textInactive: {
    color: '#888',
  },
});

export default ActionButton;
