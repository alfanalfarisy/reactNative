import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import FilledButton from '@atoms/Button/FilledButton';
import {useDispatch, useSelector} from 'react-redux';
import {productInput} from '@actions/productActions';
import TextInputIconError from '@molecules/Input/TextInputIconError';
import ScreenNotif from '../../../components/atoms/Notifications/ScreenNotif';

const FormInput = () => {
  const [material, setMaterial] = useState('');
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [hpp, setHpp] = useState('');
  const [hjp, setHjp] = useState('');
  const [sold, setSold] = useState('');
  const [stok, setStok] = useState('');
  const [batch, setBatch] = useState('');
  const [successInput, setSuccessInput] = useState(false);
  const [notif, setNotif] = useState(false);
  const errors = useSelector((state) => state.err.inputProduct);

  const productData = {material, color, model, hpp, hjp, sold, stok, batch};
  const dispatch = useDispatch();

  const inputProduct = () => {
    dispatch(productInput(productData))
      .then(() => {
        setNotif(true);
        setSuccessInput(true);
      })
      .catch(() => {
        setNotif(true);
        setSuccessInput(false);
      });
  };

  return (
    <View>
      <TextInputIconError
        placeholder="material"
        value={material}
        onChangeText={setMaterial}
        errorNotif={errors.material}
      />
      <TextInputIconError
        placeholder="model"
        value={model}
        onChangeText={setModel}
        errorNotif={errors.model}
      />
      <TextInputIconError
        placeholder="color"
        value={color}
        onChangeText={setColor}
        errorNotif={errors.color}
      />
      <TextInputIconError
        placeholder="harga produksi"
        value={hpp}
        onChangeText={setHpp}
        keyboardType="numeric"
        errorNotif={errors.hpp}
      />
      <TextInputIconError
        placeholder="harga jual"
        value={hjp}
        onChangeText={setHjp}
        keyboardType="numeric"
        errorNotif={errors.hjp}
      />
      <TextInputIconError
        placeholder="jumlah terjual"
        value={sold}
        onChangeText={setSold}
        keyboardType="numeric"
        errorNotif={errors.sold}
      />
      <TextInputIconError
        placeholder="jumlah barang"
        value={stok}
        onChangeText={setStok}
        keyboardType="numeric"
        errorNotif={errors.stok}
      />
      <TextInputIconError
        placeholder="Batch produksi"
        value={batch}
        onChangeText={setBatch}
        keyboardType="numeric"
        errorNotif={errors.batch}
      />
      <FilledButton title={'Input'} onPress={inputProduct} />

      <ScreenNotif
        styles={styles.screenNotif}
        Notif={notif}
        Succ={successInput}
        onPress={() => setNotif(false)}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {},
  screenNotif: {
    flex: 1,
    position: 'absolute',
  },
});
