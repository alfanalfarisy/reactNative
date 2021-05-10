import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '@screens';
import {HomePushNotifScreen} from '@screens';
import {HomeSocketTes} from '@screens';
import {HomeLineChartW} from '@screens';
import {HomeLineChartK} from '@screens';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: true}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="PushNotif" component={HomePushNotifScreen} />
      <HomeStack.Screen name="Socket" component={HomeSocketTes} />
      <HomeStack.Screen name="ChartKit" component={HomeLineChartK} />
      <HomeStack.Screen name="ChartWrapper" component={HomeLineChartW} />
    </HomeStack.Navigator>
  );
};
export default HomeStackScreen;
