import React, {useState, useEffect} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

import AuthHeading from '@atoms/Heading/AuthHeading';
import Input from '@atoms/Input/TextInput';
import FilledButton from '@atoms/Button/FilledButton';
import TextButton from '@atoms/Button/TextButton';
import {useSelector, useDispatch} from 'react-redux';
import {loginUser} from '@actions/authAction';
import ScreenLoading from '@atoms/Loading/ScreenLoading';
import ErrorTextAlert from '@atoms/Notifications/ErrorTextAlert';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [] = useState(false);
  const [error, setError] = useState('');

  const errors = useSelector((state) => state.err);
  const isLoading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    setError(errors);
  }, [errors]);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/img/bg-login1.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.headerWrapper}>
          <AuthHeading style={styles.title}> Never Surender</AuthHeading>
        </View>
        <View style={styles.formWrapper}>
          <ErrorTextAlert error={errors.email} />
          <Input
            style={styles.input}
            placeholder={'email'}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            style={styles.input}
            placeholder={'password'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <FilledButton
            title="Login"
            style={styles.loginButton}
            onPress={() => dispatch(loginUser(email, password, navigation))}
          />
          <TextButton
            title="register"
            style={styles.textButton}
            onPress={() => {
              navigation.navigate('Registration');
            }}
          />
        </View>
      </ImageBackground>
      <ScreenLoading loading={isLoading} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    justifyContent: 'center',
    padding: 10,
  },
  headerWrapper: {
    flex: 3,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },

  title: {},

  formWrapper: {
    flex: 3,
    backgroundColor: 'rgba(255,255,255, 0.3)',
    position: 'relative',
    padding: 10,
    borderRadius: 30,
  },
  input: {
    opacity: 1,
    width: '100%',
  },
  loginButton: {},
  textButton: {
    marginTop: 14,
  },
});
