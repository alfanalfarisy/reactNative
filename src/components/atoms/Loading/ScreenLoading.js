import React from 'react';
import {StyleSheet, Text, ActivityIndicator, View} from 'react-native';

const ScreenLoading = ({loading}) => {
  if (!loading) {
    return <View />;
  }
  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator color="#0000ff" />
        <Text style={styles.text}>Loading...</Text>
      </View>
    </View>
  );
};

export default ScreenLoading;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 20,
    borderRadius: 8,
  },
  text: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: '500',
  },
});
