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
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fc6f03',
    fontWeight: '500',
    fontSize: 12,
  },
});
