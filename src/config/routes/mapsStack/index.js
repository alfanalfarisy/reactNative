import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MapsScreen} from '../../../container/screens';
const MapsStack = createStackNavigator();

function MapsStackScreen() {
  const Options = {headerShown: false};
  return (
    <MapsStack.Navigator>
      <MapsStack.Screen name="Maps" component={MapsScreen} options={Options} />
      {/* <MapsStack.Screen name="Details" component={DetailsScreen} /> */}
    </MapsStack.Navigator>
  );
}

export default MapsStackScreen;
