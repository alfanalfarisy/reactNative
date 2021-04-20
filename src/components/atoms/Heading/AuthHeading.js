import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AuthHeading = ({children, style, ...props}) => {
  return (
    <Text {...props} style={[style, styles.text]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    color: 'black',
    fontFamily: 'AkayaTelivigala-Regular',
  },
});

export default AuthHeading;
