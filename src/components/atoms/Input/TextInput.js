import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

const Input = ({style, onChange, errorNotif, name, ...props}) => {
  return (
    <View style={style}>
      <TextInput
        {...props}
        onChange={onChange}
        name={name}
        style={styles.input}
      />
      <Text>{errorNotif}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#e8e8e8',
    width: '100%',
    padding: 10,
    borderRadius: 10,
  },
});

export default Input;
