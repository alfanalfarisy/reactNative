import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AuthHeading from '@atoms/Heading/AuthHeading';
import ChartData from '../../../components/organisms/Chart';

import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AuthHeading>Chart</AuthHeading>
      <ChartData />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
});

export default HomeScreen;
