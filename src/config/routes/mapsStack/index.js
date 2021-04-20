import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MapsScreen} from '@screens';
const MapsStack = createStackNavigator();

function MapsStackScreen() {
  const Options = {headerShown: false};
  return (
    <MapsStack.Navigator>
      <MapsStack.Screen name="Maps" component={MapsScreen} options={Options} />
    </MapsStack.Navigator>
  );
}

export default MapsStackScreen;
