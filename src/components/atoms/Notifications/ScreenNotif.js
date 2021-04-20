import React from 'react';
import {StyleSheet, Text, Dimensions, View} from 'react-native';
import FilledButton from '@atoms/Button/FilledButton';

const {width, height} = Dimensions.get('window');
const ScreenNotif = ({Notif, Succ, onPress}) => {
  if (!Notif) {
    return <View />;
  }
  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        {Succ == true ? (
          <Text style={styles.text}>Input Sukses!</Text>
        ) : (
          <Text style={styles.text}>Input Gagal! Periksa kembali</Text>
        )}
        <FilledButton style={styles.button} title={'OK'} onPress={onPress} />
      </View>
    </View>
  );
};

export default ScreenNotif;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: 20,
    borderRadius: 8,
  },
  text: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#03ecfc',
  },
});
