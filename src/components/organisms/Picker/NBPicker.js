import React, {Component} from 'react';
import {Content, Form, Item, Picker, Icon} from 'native-base';
export default class NBPicker extends Component {
  render() {
    return (
      <Content>
        <Form>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{width: undefined}}
              placeholder="Select your SIM"
              placeholderStyle={{color: '#bfc6ea'}}
              placeholderIconColor="#007aff"
              selectedValue={this.props.selectedValue}
              onValueChange={this.props.onValueChange}>
              {this.props.data.length > 0 &&
                this.props.data.map((data) => {
                  return (
                    <Picker.Item
                      key={`${data}_key`}
                      label={`${data}`}
                      value={`${data}`}
                    />
                  );
                })}
            </Picker>
          </Item>
        </Form>
      </Content>
    );
  }
}
