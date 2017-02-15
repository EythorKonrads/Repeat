import React, { Component } from 'react';
import { View, Text, Navigator, TouchableOpacity } from 'react-native';
// import Header from './components/Header';
import ProductList from './components/ProductList';
import Drinks from './components/Drinks';
// import Footer from './components/Footer';

class App extends Component {


    // noRoute(navigator) {
    //   return (
    //     <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
    //       <TouchableOpacity
    //         style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    //         onPress={() => navigator.pop()}
    //       >
    //         <Text style={{ color: 'red', fontWeight: 'bold' }}>fleh</Text>
    //       </TouchableOpacity>
    //     </View>
    //   );
    // }

    renderScene(route, navigator) {
      const routeId = route.id;
      if (routeId === 'Food') {
       return <ProductList navigator={navigator} />;
      }
      if (routeId === 'Drinks') {
       return <Drinks navigator={navigator} />;
      }
      // return this.noRoute(navigator);
    }

  render() {
    return (
      <Navigator
        style={{ flex: 1, backgroundColor: '#eee' }}
        initialRoute={{ id: 'Food', name: 'Index' }}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }}
      />
    );
  }
}

export default App;
