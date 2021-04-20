import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const TextButton = ({title, style, onPress}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 12,
  },
});
