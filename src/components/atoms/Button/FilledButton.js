import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const FilledButton = ({title, style, onPress}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export default FilledButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 40,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  text: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
  },
});
