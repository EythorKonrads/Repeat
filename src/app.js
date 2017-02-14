import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'App'} />
        <ProductList />
         <Footer footerText={'Skoða pöntun'} />
      </View>
    );
  }
}

export default App;
