import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '@screens';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  const Options = {headerShown: false};
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      {/* <HomeStack.Screen name="Details" component={DetailsScreen} /> */}
    </HomeStack.Navigator>
  );
};
export default HomeStackScreen;
