import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TextInputIconError from '@molecules/Input/TextInputIconError';
import FilledButton from '@atoms/Button/FilledButton';
import {useDispatch, useSelector} from 'react-redux';

const AsnycTex = () => {
  const stateProduct = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const setName = (val) => {
    console.log(val);
    AsyncStorage.setItem('name', val);
  };
  const onPress = () => {
    console.log(stateProduct);
  };
  const onPressBtn = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('name');
      dispatch({
        type: 'NAMECHANGE',
        payload: 'OYIIIIIIII',
      });
      console.log(jsonValue);
    } catch (e) {
      // read error
    }
  };
  return (
    <View>
      <TextInputIconError
        placeholder="Name"
        onChangeText={(val) => setName(val)}
      />
      <FilledButton title={'inp'} onPress={onPressBtn} />
      <FilledButton title={'tes'} onPress={onPress} />
    </View>
  );
};

export default AsnycTex;

const styles = StyleSheet.create({});
