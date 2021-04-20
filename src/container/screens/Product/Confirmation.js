import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FilledButton from '../../../components/atoms/Button/FilledButton';
import {useDispatch} from 'react-redux';
const cekData = {
  material: 'cotton',
  color: 'red',
  model: 'segiempat',
  batch: '1',
  quantity: '1',
  reseller: false,
  name: '23',
  diskon: '0',
  hjpNew: 15000,
};

const Confirmation = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowWrapper}>
        <Text style={styles.rowName}>Material</Text>
        <Text>{cekData.material}</Text>
      </View>
      <View style={styles.rowWrapper}>
        <Text style={styles.rowName}>Model</Text>
        <Text>{cekData.model}</Text>
      </View>
      <View style={styles.rowWrapper}>
        <Text style={styles.rowName}>Color</Text>
        <Text>{cekData.color}</Text>
      </View>
      <View style={styles.rowWrapper}>
        <Text style={styles.rowName}>Batch</Text>
        <Text>{cekData.batch}</Text>
      </View>
      <View style={styles.rowWrapper}>
        <Text style={styles.rowName}>Diskon</Text>
        <Text>{cekData.diskon}</Text>
      </View>
      <View style={styles.rowWrapper}>
        <Text style={styles.rowName}>Harga</Text>
        <Text>{cekData.hjpNew}</Text>
      </View>
      <View style={styles.rowWrapper}>
        <Text style={styles.rowName}>Resseller</Text>
        <Text>{cekData.reseller ? 'True' : 'False'}</Text>
      </View>
      <View style={styles.btnWrapper}>
        <FilledButton title={'Input'} />
      </View>
    </View>
  );
};

export default Confirmation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 20,
  },
  rowWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowName: {
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 5,
    width: '50%',
  },
});
