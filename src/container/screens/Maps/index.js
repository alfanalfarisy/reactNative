import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const MapsScreen = ({navigation}) => {
  return (
    <View>
      <Text>Maps PAGEE!!!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default MapsScreen;

const styles = StyleSheet.create({});
