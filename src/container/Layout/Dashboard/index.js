import {Container, Content, Text} from 'native-base';
import React, {Component} from 'react';
import FooterTemplate from '../Footer';

export class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Content>{this.props.children}</Content>
        <FooterTemplate />
      </Container>
    );
  }
}

export default Dashboard;
