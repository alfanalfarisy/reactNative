import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {AccountScreen} from '../../../container/screens';

const AccountStack = createStackNavigator();

const AccountStackScreen = () => {
  const Options = {headerShown: false};
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="Account"
        component={AccountScreen}
        options={{headerShown: false}}
      />
      {/* <AccountStack.Screen name="Details" component={DetailsScreen} /> */}
    </AccountStack.Navigator>
  );
};

export default AccountStackScreen;
