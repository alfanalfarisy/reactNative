import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TextInputIconError = ({style, errorNotif, icon, ...props}) => {
  return (
    <View styles={styles.container}>
      <View style={[styles.inputWrapper, errorNotif ? styles.error : null]}>
        <Icon style={styles.searchIcon} name={icon} size={20} color="#000" />
        <TextInput
          {...props}
          style={styles.input}
          underlineColorAndroid="transparent"
        />
      </View>
      {errorNotif && (
        <View styles={styles.errorWrapper}>
          <Text style={styles.errorText}>{errorNotif}</Text>
        </View>
      )}
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
    borderBottomWidth: 0.7,
    borderColor: '#c0c0c0',
    backgroundColor: 'transparent',
  },
  errorWrapper: {},
  errorText: {
    marginLeft: 10,
    fontSize: 13,
    color: 'red',
    marginBottom: 10,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    borderRadius: 50,
    paddingTop: 15,
    paddingRight: 10,
    paddingBottom: 15,
    paddingLeft: 0,
    color: '#424242',
    // backgroundColor: '#fff',
  },
  error: {
    borderBottomWidth: 2,
    borderColor: 'red',
  },
});

export default TextInputIconError;
