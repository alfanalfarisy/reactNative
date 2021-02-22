import React, {useState, useEffect} from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import AuthHeading from '@atoms/Heading/AuthHeading';
import TextInput from '@atoms/Input/TextInput';
import FilledButton from '@atoms/Button/FilledButton';
import TextButton from '@atoms/Button/TextButton';

import IconButton from '@atoms/Button/IconButton';
import ErrorTextAlert from '@atoms/Notifications/ErrorTextAlert';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser} from '@actions/authAction';

const RegisterScreen = ({navigation}) => {
  const [error, setError] = useState('');
  const errors = useSelector((state) => state.err);
  useEffect(() => {
    setError(errors);
  }, [errors]);
  const [form, setForm] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    numberPhone: '',
    password: '',
    password2: '',
  });
  const setStateFunc = (id, v) => {
    setForm({
      ...form,
      [id]: v,
    });
  };
  console.log(error);
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assets/img/bg-login1.jpg')}
          style={styles.backgroundImage}>
          <AuthHeading style={styles.title}> LETS GO!</AuthHeading>
          <TextInput
            onChangeText={(v) => setStateFunc('userName', v)}
            style={styles.input}
            placeholder={'userName'}
            value={form.userName}
            errorNotif={error.userName}
          />
          <TextInput
            style={styles.input}
            placeholder={'firstName'}
            value={form.firstName}
            onChangeText={(v) => setStateFunc('firstName', v)}
            errorNotif={error.firstName}
          />
          <TextInput
            style={styles.input}
            placeholder={'lastName'}
            value={form.lastName}
            onChangeText={(v) => setStateFunc('lastName', v)}
            errorNotif={error.lastName}
          />
          <TextInput
            style={styles.input}
            placeholder={'numberPhone'}
            value={form.numberPhone}
            keyboardType="name-phone-pad"
            onChangeText={(v) => setStateFunc('numberPhone', v)}
            errorNotif={error.numberPhone}
          />
          <TextInput
            style={styles.input}
            placeholder={'email'}
            keyboardType="email-address"
            value={form.email}
            onChangeText={(v) => setStateFunc('email', v)}
            errorNotif={error.email}
          />
          <TextInput
            style={styles.input}
            placeholder={'password'}
            value={form.password}
            onChangeText={(v) => setStateFunc('password', v)}
            secureTextEntry
            errorNotif={error.password}
          />
          <TextInput
            style={styles.input}
            placeholder={'password2'}
            value={form.password2}
            onChangeText={(v) => setStateFunc('password2', v)}
            secureTextEntry
            errorNotif={error.password2}
          />
          <FilledButton
            title="Register"
            style={styles.registerButton}
            onPress={() => {
              dispatch(registerUser(form, navigation));
            }}
          />
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    // marginBottom: 32,
  },
  input: {
    // marginVertical: 12,
    width: '100%',
  },
  registerButton: {
    // marginTop: 32,
  },
  textButton: {
    // marginTop: 14,
  },
  closeButton: {
    // margin: 20,
  },
});
