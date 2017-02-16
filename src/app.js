import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
// import Header from './components/Header';
import ProductList from './components/ProductList';
import SingleProduct from './components/SingleProduct';
import Drinks from './components/Drinks';
import SingleDrink from './components/SingleDrink';
// import Footer from './components/Footer';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          {/* Tab Container */}
          <Scene
            key="tabbar"
            tabs={true}
            tabBarStyle={{ backgroundColor: '#f1f1f1' }}
          >
            <Scene key="matur" title="Matur" icon={TabIcon}>
             <Scene key="product"
               component={ProductList}
               title="Matur"
             />
             <Scene
               key="singleproduct"
               component={SingleProduct}
               title="Matur"
             />
           </Scene>

           {/* Tab and it's scenes */}
           <Scene key="drinks" title="Drykkir" icon={TabIcon}>
             <Scene
               key="drink"
               component={Drinks}
               title="Drykkir"
             />
             <Scene
               key="singledrink"
               component={SingleDrink}
               title="Drykkur"
             />
           </Scene>
            {/* Removed for brevity */}
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default App;
