import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Nav from './Nav';

class Drinks extends Component {
  render() {
    return (
      <View>
        <Nav headerText={'Drinks'} />
        <Text>Drinks</Text>
      </View>
    );
  }
}

export default Drinks;
