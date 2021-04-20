import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from 'react-native';

import FilledButton from '@atoms/Button/FilledButton';
import TextButton from '@atoms/Button/TextButton';
import {useSelector, useDispatch} from 'react-redux';
import {loginUser} from '@actions/authAction';
import ScreenLoading from '@atoms/Loading/ScreenLoading';
import TextInputIconError from '@molecules/Input/TextInputIconError';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [] = useState(false);
  const [, setError] = useState('');

  const errors = useSelector((state) => state.err.login);
  const isLoading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    setError(errors);
  }, [errors]);

  console.log(errors);
  return (
    <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={30}>
      <ImageBackground
        source={require('../../../assets/img/bg-login1.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.formWrapper}>
          <TextInputIconError
            style={styles.input}
            placeholder={'email'}
            keyboardType="email-address"
            value={email}
            icon={'envelope'}
            onChangeText={setEmail}
            errorNotif={errors.email}
          />
          <TextInputIconError
            style={styles.input}
            placeholder={'password'}
            value={password}
            onChangeText={setPassword}
            icon={'bitcoin'}
            secureTextEntry
            errorNotif={errors.password}
          />
          <FilledButton
            title="Login"
            style={styles.loginButton}
            onPress={() => dispatch(loginUser(email, password, navigation))}
          />
        </View>
        <View style={styles.textBtnWrapper}>
          <TextButton
            title="register"
            style={styles.textButton}
            onPress={() => {
              navigation.navigate('Registration');
            }}
          />
          <TextButton
            title="forgot password?"
            style={styles.textButton}
            onPress={() => {
              navigation.navigate('Registration');
            }}
          />
        </View>
      </ImageBackground>
      <ScreenLoading loading={isLoading} />
    </KeyboardAvoidingView>
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
    resizeMode: 'stretch', // or 'stretch'
    padding: 10,
  },
  // headerWrapper: {
  //   flex: 3,
  //   backgroundColor: 'rgba(255,255,255,0.3)',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 50,
  // },

  // title: {},

  formWrapper: {
    backgroundColor: 'rgba(255,255,255, 0.6)',
    width: '100%',
    padding: 10,
    borderRadius: 30,
    height: 220,
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  textBtnWrapper: {
    backgroundColor: 'rgba(255,255,255, 0.6)',
    width: '100%',
    height: 50,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 30,
  },
  input: {
    marginBottom: 20,
  },
  loginButton: {},
  textButton: {},
});
