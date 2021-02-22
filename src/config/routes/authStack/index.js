import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '@screens';
import {RegisterScreen} from '@screens';

const AuthStack = createStackNavigator();
const LoginStack = createStackNavigator();

const AuthStackScreen = () => {
  const Options = {headerShown: false};
  return (
    <AuthStack.Navigator
      mode={'modal'}
      screenOptions={Options}
      // initialRouteName="Login">
    >
      <AuthStack.Screen name="LoginStack">
        {() => (
          <LoginStack.Navigator screenOptions={Options} mode="card">
            <LoginStack.Screen name="Login" component={LoginScreen} />
          </LoginStack.Navigator>
        )}
      </AuthStack.Screen>

      <AuthStack.Screen name="Registration" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
