import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStackScreen from './homeStack';
import AccountStackScreen from './accountStack';
import MapsStackScreen from './mapsStack';
import AuthStackScreen from './authStack';
import {LightTheme} from '../themes/light';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

export const Router = () => {
  const navigationOptions = {
    headerShown: false,
  };
  const auth = useSelector((state) => state.auth);
  console.log(auth.isAuthenticated);
  return (
    <NavigationContainer theme={LightTheme}>
      {auth.isAuthenticated == true ? (
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'bookmark' : 'bookmark';
              } else if (route.name === 'Maps') {
                iconName = focused ? 'battery-charging' : 'battery-charging';
              } else if (route.name === 'Account') {
                iconName = focused
                  ? 'ios-document-attach'
                  : 'ios-document-attach';
              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Maps" component={MapsStackScreen} />
          <Tab.Screen name="Account" component={AccountStackScreen} />
        </Tab.Navigator>
      ) : (
        <AuthStackScreen />
      )}
    </NavigationContainer>
  );
};

export default Router;
