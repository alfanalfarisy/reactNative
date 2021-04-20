import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DataTableRNP from '../../../components/organisms/Table/DataTableRNP';
import {BASE_URL} from '@utils/constanta';
import axios from 'axios';
import FilledButton from '@atoms/Button/FilledButton';

class ListProduct extends React.Component {
  state = {
    products: [],
  };
  getProductList = async () => {
    axios(`${BASE_URL}/api/product/list`).then((res) => {
      this.setState({products: res.data});
    });
  };
  componentDidMount() {
    this.getProductList();
  }
  render() {
    const {products} = this.state;
    return (
      <View>
        {products.length > 0 && <DataTableRNP datas={this.state.products} />}
        <FilledButton title={'update'} onPress={this.getProductList} />
      </View>
    );
  }
}

export default ListProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
