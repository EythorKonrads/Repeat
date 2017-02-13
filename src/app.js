import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <View>
{/* header
        {/* <Header headerText={'Repeat'} /> */}
        <Header /> */}
        <Header headerText={'App'} />
        <ProductList />
         master
      </View>
    );
  }
}

export default App;
