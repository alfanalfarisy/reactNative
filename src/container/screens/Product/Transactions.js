import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FilledButton from '@atoms/Button/FilledButton';
import {useDispatch, useSelector} from 'react-redux';
import {productUpdateBySell} from '@actions/productActions';
import {BASE_URL} from '@utils/constanta';
import axios from 'axios';
import NBPicker from '@organisms/Picker/NBPicker';
import TextInputError from '@molecules/Input/TextInputError';
import {removeDuplicates} from '@utils/function';
import {CheckBox} from 'native-base';
import Confirmation from './Confirmation';

const Transaction = () => {
  const [selectedMaterial, setSelectedMaterial] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const [selectedBatch, setSelectedBatch] = useState();
  const [selectedModel, setSelectedModel] = useState();
  const [isReseller, setIsReseller] = useState(false);
  const [diskon, setDiskon] = useState('0');
  const [name, setName] = useState('');

  const [materialList, setMaterialList] = useState('');
  const [modelList, setModelList] = useState('');
  const [colorList, setColorList] = useState('');
  const [batchList, setBatchList] = useState('');
  const [quantity, setQuantity] = useState('');
  // const [cekData, setCekData] = useState('');

  useState(() => {
    const getProductList = async () => {
      const productsList = await axios.get(`${BASE_URL}/api/product/list`);
      const materialList = productsList.data.map((product) => {
        return product.material;
      });
      setMaterialList(removeDuplicates(materialList));
    };
    getProductList();
  });
  const materialSelected = async (value) => {
    setSelectedMaterial(value);
    const productsList = await axios.get(
      `${BASE_URL}/api/product/list/${value}`,
    );
    console.log(productsList.data);
    const modelList = productsList.data.map((product) => {
      return product.model;
    });
    setModelList(removeDuplicates(modelList));
  };
  const modelSelected = async (value) => {
    setSelectedModel(value);
    const productsList = await axios.get(
      `${BASE_URL}/api/product/list/${selectedMaterial}/${value}`,
    );
    console.log(productsList.data);
    const colorList = productsList.data.map((product) => {
      return product.color;
    });

    setColorList(removeDuplicates(colorList));
  };
  const colorSelected = async (value) => {
    setSelectedColor(value);
    const productsList = await axios.get(
      `${BASE_URL}/api/product/list/${selectedMaterial}/${selectedModel}/${value}`,
    );
    console.log(productsList.data);
    const batchList = productsList.data.map((product) => {
      return product.batch;
    });
    console.log(batchList);
    setBatchList(batchList);
  };
  const productData = {
    material: selectedMaterial,
    color: selectedColor,
    model: selectedModel,
    quantity: quantity,
    batch: selectedBatch,
    reseller: isReseller,
    diskon: diskon,
    name: name,
  };

  const cekCekout = () => {
    dispatch(productUpdateBySell(productData))
      .then((res) => {
        console.log('success');
      })
      .catch(() => {
        console.log('not Succ');
      });
  };
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.err.sellProduct);
  return (
    <View>
      <View>
        <NBPicker
          data={materialList}
          selectedValue={selectedMaterial}
          onValueChange={(value) => materialSelected(value)}
        />
        <NBPicker
          style={styles.picker}
          data={modelList}
          selectedValue={selectedModel}
          onValueChange={(value) => modelSelected(value)}
        />
        <NBPicker
          style={styles.picker}
          data={colorList}
          selectedValue={selectedColor}
          onValueChange={(value) => colorSelected(value)}
        />
        <NBPicker
          style={styles.picker}
          data={batchList}
          selectedValue={selectedBatch}
          onValueChange={(value) => setSelectedBatch(value)}
        />
        <TextInputError
          style={styles.input}
          placeholder="jumlah barang"
          value={quantity}
          onChangeText={setQuantity}
          keyboardType="numeric"
          errorNotif={errors.quantity}
        />
        <TextInputError
          style={styles.input}
          placeholder="Customer Name"
          value={name}
          onChangeText={setName}
          keyboardType="numeric"
          errorNotif={errors.name}
        />
        <View style={styles.wrapperDiskon}>
          <TextInputError
            style={styles.inputDiskon}
            placeholder="Diskon"
            value={diskon}
            onChangeText={setDiskon}
            keyboardType="numeric"
          />
          <View style={styles.checkboxContainer}>
            <CheckBox
              checked={isReseller}
              onPress={() =>
                isReseller ? setIsReseller(false) : setIsReseller(true)
              }
              style={styles.checkbox}
            />
            <Text style={styles.label}>Resseller</Text>
          </View>
        </View>
        <View style={styles.btnWrapper}>
          <FilledButton title={'Cek'} onPress={cekCekout} />
        </View>
      </View>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  input: {
    marginLeft: 10,
  },
  inputDiskon: {
    width: 300,
  },
  picker: {},
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    margin: 10,
  },
  label: {
    margin: 10,
  },
  wrapperDiskon: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
