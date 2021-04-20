import * as React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -8.135,
          longitude: 113.224,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}>
        <Marker
          coordinate={{latitude: -8.135, longitude: 113.224}}
          title={'Lumajang'}
          description={'My Fucking HomeTOWN BITHC'}
        />
      </MapView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
