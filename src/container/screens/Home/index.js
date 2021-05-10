import * as React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Dimensions} from 'react-native';
import FilledButton from '@atoms/Button/FilledButton';
const screenWidth = Dimensions.get('window').width;

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <FilledButton
          title="PushNotifTes"
          onPress={() => navigation.navigate('PushNotif')}
        />
        <FilledButton
          title="Socket"
          onPress={() => navigation.navigate('Socket')}
        />
        <FilledButton
          title="ChartKit"
          onPress={() => navigation.navigate('ChartKit')}
        />
        <FilledButton
          title="ChartWrapper"
          onPress={() => navigation.navigate('ChartWrapper')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {},
});

export default HomeScreen;
