import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {loginUser} from '@actions/authAction';

const HomeScreen = ({navigation}) => {
  const name = useSelector((state) => state.auth.name);
  const dispatch = useDispatch();
  return (
    <View>
      <Text>HOME PAGEE!!!</Text>
      {/* <Button title="Go back" onPress={() => navigation.navigate('Maps')} /> */}
      <Button title="KlickME" onPress={() => dispatch(loginUser('ALFNA'))} />
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
