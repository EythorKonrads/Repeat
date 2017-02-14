import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <View />
      </View>
    );
  }
}

export default App;
