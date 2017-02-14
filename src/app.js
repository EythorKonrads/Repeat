import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './components/Header';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <View>
        <Header headerText={'App'} />
        <ProductList />
         <Text>master</Text>
      </View>
    );
  }
}

export default App;
