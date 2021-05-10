import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FilledButton from '../../../components/atoms/Button/FilledButton';
import {SendMessageSocketAction} from '../../../config/redux/actions/socketAction';
import io from 'socket.io-client';
import {connect} from 'react-redux';
import {BASE_URL} from '../../../utils/constanta';

class HomeSocketTes extends React.Component {
  constructor() {
    super();
    this.state = {
      data: '',
    };
    this.socket = io(BASE_URL);
  }

  componentDidMount() {
    this.socket.on('DataDummy', (msg) => {
      this.setState({data: msg});
    });
  }
  render() {
    console.log(this.state.data);
    return (
      <View>
        <Text>{this.state.data}</Text>
        <FilledButton
          title={'SEND'}
          onPress={this.props.SendMessageSocketAction}
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {SendMessageSocketAction})(
  HomeSocketTes,
);

const styles = StyleSheet.create({});

// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import io from 'socket.io-client';
// import {BASE_URL} from '@utils/constanta';
// import FilledButton from '../../../components/atoms/Button/FilledButton';

// let socket;

// class HomeSocketTes extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       data: '',
//       endpoint: BASE_URL,
//     };

//     // socket = io(this.state.endpoint);
//   }
//   componentDidMount() {
//     // socket.on('DataDummy', (msg) => {
//     //   this.setState({data: msg});
//     // });
//   }

//   render() {
//     // console.log(this.state.data);
//     return (
//       <View>
//         <FilledButton title="OK" onPress={() => console.log(this.state.data)} />
//         <Text>SOCKEtTES</Text>
//       </View>
//     );
//   }
// }
// export default HomeSocketTes;

// const styles = StyleSheet.create({});
