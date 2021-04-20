import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Input from '@atoms/Input/TextInput';
import FormInput from './FormInput';
import ListProduct from './ListProduct';
import Transaction from './Transactions';
import {Tab, Tabs, DefaultTabBar} from 'native-base';
import Confirmation from './Confirmation';
import AsnycTex from './AsnycTex';

const renderTabBar = (props) => {
  props.tabStyle = Object.create(props.tabStyle);
  return <DefaultTabBar {...props} />;
};

const ProductScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Tabs renderTabBar={renderTabBar}>
          <Tab heading="List">
            {/* <ListProduct /> */}
            <AsnycTex />
          </Tab>
          <Tab heading="Sell">
            <Transaction />
          </Tab>
          <Tab heading="Add">
            <FormInput />
          </Tab>
        </Tabs>
      </View>
      <View style={styles.fromInputWrapper} />
    </ScrollView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fromInputWrapper: {
    padding: 10,
  },
});
