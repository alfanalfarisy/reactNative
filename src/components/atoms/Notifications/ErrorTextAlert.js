import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ErrorTextAlert = ({error}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{error}</Text>
    </View>
  );
};

export default ErrorTextAlert;

const styles = StyleSheet.create({
  container: {paddingVertical: 3},
  text: {
    color: 'red',
    fontWeight: 'bold',
  },
});
