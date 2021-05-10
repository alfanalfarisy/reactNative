import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {notification} from '@utils/services/LocalPushController';
const HomePushNotifScreen = ({navigation}) => {
  const handleButtonPress = () => {
    notification.configure();
    notification.createChannel('1');
    notification.sendLocalNotification('1', 'cok', 'cok');
  };
  return (
    <View style={styles.container}>
      <Text>Press a button to trigger the notification</Text>
      <View style={{marginTop: 20}}>
        <Button title={'Local Push Notification'} onPress={handleButtonPress} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
});
export default HomePushNotifScreen;
