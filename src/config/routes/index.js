import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeStackScreen from './homeStack';
import AccountStackScreen from './accountStack';
import ProductStackScreen from './productStack';
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
  return (
    <NavigationContainer theme={LightTheme}>
      {auth.isAuthenticated == false ? (
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
              } else if (route.name === 'Product') {
                iconName = focused ? 'list-ul' : 'list-ul';
              } else if (route.name === 'Account') {
                iconName = focused ? 'user' : 'user';
              } else if (route.name === 'Maps') {
                iconName = focused ? 'map' : 'map';
              }
              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
          initialRouteName="Product">
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Product" component={ProductStackScreen} />
          <Tab.Screen name="Account" component={AccountStackScreen} />
          <Tab.Screen name="Maps" component={MapsStackScreen} />
        </Tab.Navigator>
      ) : (
        <AuthStackScreen />
      )}
    </NavigationContainer>
  );
};

export default Router;
