import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconButton = ({style, name, onPress}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Icon style={[styles.icon]} name={name} />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: 20,
  },
  icon: {
    fontSize: 20,
    color: 'blue',
  },
});
