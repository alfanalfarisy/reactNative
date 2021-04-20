import React, {useState, useEffect} from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import AuthHeading from '@atoms/Heading/AuthHeading';
import FilledButton from '@atoms/Button/FilledButton';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser} from '@actions/authAction';
import TextInputIconError from '@molecules/Input/TextInputIconError';

const RegisterScreen = ({navigation}) => {
  const errors = useSelector((state) => state.err.register);
  const [error, setError] = useState('');
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
  console.log(errors.userName);
  const dispatch = useDispatch();
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/img/bg-login1.jpg')}
        style={styles.backgroundImage}>
        <AuthHeading style={styles.title}> LETS GO!</AuthHeading>
        <View style={styles.formWrapper}>
          <TextInputIconError
            onChangeText={(v) => setStateFunc('userName', v)}
            style={styles.input}
            placeholder={'username'}
            value={form.userName}
            errorNotif={errors.userName}
          />
          <TextInputIconError
            style={styles.input}
            placeholder={'first name'}
            value={form.firstName}
            onChangeText={(v) => setStateFunc('firstName', v)}
            errorNotif={errors.firstName}
          />
          <TextInputIconError
            style={styles.input}
            placeholder={'last name'}
            value={form.lastName}
            onChangeText={(v) => setStateFunc('lastName', v)}
            errorNotif={errors.lastName}
          />
          <TextInputIconError
            style={styles.input}
            placeholder={'number phone'}
            value={form.numberPhone}
            keyboardType="name-phone-pad"
            onChangeText={(v) => setStateFunc('numberPhone', v)}
            errorNotif={errors.numberPhone}
          />
          <TextInputIconError
            style={styles.input}
            placeholder={'email'}
            keyboardType="email-address"
            value={form.email}
            onChangeText={(v) => setStateFunc('email', v)}
            errorNotif={errors.email}
          />
          <TextInputIconError
            style={styles.input}
            placeholder={'password'}
            value={form.password}
            onChangeText={(v) => setStateFunc('password', v)}
            secureTextEntry
            errorNotif={errors.password}
          />
          <TextInputIconError
            style={styles.input}
            placeholder={'validasi password'}
            value={form.password2}
            onChangeText={(v) => setStateFunc('password2', v)}
            secureTextEntry
            errorNotif={errors.password2}
          />
          <FilledButton
            title="Register"
            style={styles.registerButton}
            onPress={() => {
              dispatch(registerUser(form, navigation));
            }}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  formWrapper: {
    backgroundColor: 'rgba(255,255,255, 0.6)',
    width: '100%',
    padding: 10,
    borderRadius: 30,
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
