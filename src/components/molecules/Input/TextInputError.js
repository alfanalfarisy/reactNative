import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TextInputError = ({style, errorNotif, ...props}) => {
  return (
    <View styles={styles.container}>
      <View style={[styles.inputWrapper, errorNotif ? styles.error : null]}>
        <TextInput
          {...props}
          style={[styles.input, style]}
          underlineColorAndroid="transparent"
        />
      </View>
      <View styles={styles.errorWrapper}>
        <Text style={styles.errorText}>{errorNotif}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '100%',
    borderBottomWidth: 0.7,
    borderColor: '#c0c0c0',
    backgroundColor: 'transparent',
  },
  errorWrapper: {},
  errorText: {
    marginLeft: 10,
    fontSize: 13,
    color: 'red',
  },
  input: {
    flex: 1,
    borderRadius: 50,
    paddingLeft: 0,
    color: '#424242',
  },
  error: {
    borderBottomWidth: 2,
    borderColor: 'red',
  },
});

export default TextInputError;
