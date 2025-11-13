import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SkillBadge({ title }) {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#FF9800',
    paddingHorizontal: 22,
    paddingVertical: 11,
    borderRadius: 22,
    margin: 6,
    elevation: 1,
  },
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});