import * as React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logoutUser} from '@actions/authAction';
import IconButton from '@atoms/Button/IconButton';
import TextButton from '@atoms/Button/TextButton';

const AccountScreen = ({navigation}) => {
  // const account = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [togle, setTogle] = React.useState(1);
  const account = {
    userName: 'Alfanalfarisy',
    lastName: 'Alfan',
    firstName: 'Alfarisy',
    numberPhone: 'alfan',
    email: 'alfan',
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <IconButton name="arrow-left" />
        <View style={{backgroundColor: 'white', padding: 10}}>
          <TextButton title="Logout" onPress={() => dispatch(logoutUser())} />
        </View>
      </View>
      <View style={styles.dataProfileWrapper}>
        <Text style={styles.userName}>{account.userName} </Text>
        <Text style={styles.fullName}>
          {account.firstName} {account.lastName}{' '}
        </Text>
      </View>
      <View style={styles.imageProfileWrapper}>
        <Image
          style={styles.imageProfile}
          source={require('@img/bg-login.png')}
        />
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.headerTabsWrapper}>
          <View
            style={[
              styles.iconWrapper,
              togle === 1 ? styles.iconWrapperSelected : null,
            ]}>
            <IconButton
              name="times"
              style={styles.IconButton}
              onPress={() => setTogle(1)}
            />
          </View>
          <View
            style={[
              styles.iconWrapper,
              togle === 2 ? styles.iconWrapperSelected : null,
            ]}>
            <IconButton
              name="tasks"
              style={styles.IconButton}
              onPress={() => setTogle(2)}
            />
          </View>
          <View
            style={[
              styles.iconWrapper,
              togle === 3 ? styles.iconWrapperSelected : null,
            ]}>
            <IconButton
              name="user-circle"
              style={styles.IconButton}
              onPress={() => setTogle(3)}
            />
          </View>
        </View>
        <View style={styles.contentTabsWrapper}>
          {togle === 1 && (
            <View>
              <Text>HELLO</Text>
            </View>
          )}
          {togle === 2 && (
            <View>
              <Text>MATHE</Text>
            </View>
          )}
          {togle === 3 && (
            <View>
              <Text>FAKER</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#03a9fc',
    alignItems: 'center',
  },
  headerWrapper: {
    padding: 20,
    width: '100%',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageProfileWrapper: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 11,
  },
  imageProfile: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  dataProfileWrapper: {
    width: '80%',
    backgroundColor: 'rgba(255,255,255,255)',
    position: 'absolute',
    top: 120,
    padding: 10,
    alignItems: 'center',
    paddingTop: 50,
    elevation: 10,
  },
  contentWrapper: {
    marginTop: 60,
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,255)',
    padding: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  fullName: {
    marginTop: 12,
    fontSize: 12,
    color: 'grey',
  },
  headerTabsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  contentTabsWrapper: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  IconButton: {
    color: 'black',
  },
  iconWrapper: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingBottom: 5,
    width: 90,
    alignItems: 'center',
  },
  iconWrapperSelected: {
    borderColor: '#03a9fc',
  },
});
