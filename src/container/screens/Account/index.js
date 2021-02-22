import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logoutUser} from '@actions/authAction';

const AccountScreen = ({navigation}) => {
  const account = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  console.log(account);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{account.userName} </Text>
      <Text>{account.firstName} </Text>
      <Text>{account.lastName} </Text>
      <Text>{account.numberPhone} </Text>
      <Text>{account.email} </Text>

      <Button title="Logout" onPress={() => dispatch(logoutUser())} />
    </View>
  );
};

export default AccountScreen;
