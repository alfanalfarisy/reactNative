import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProductScreen} from '../../../container/screens';
const ProductStack = createStackNavigator();

function ProductStackScreen() {
  const Options = {headerShown: false};
  return (
    <ProductStack.Navigator>
      <ProductStack.Screen
        name="Product"
        component={ProductScreen}
        options={Options}
      />
    </ProductStack.Navigator>
  );
}

export default ProductStackScreen;
