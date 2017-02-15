import React, { Component } from 'react';
import { ScrollView, View, Text, Navigator, TouchableOpacity, TouchableHighlight } from 'react-native';
// import axios from 'axios';
import Product from './Product';
import ProductData from '../ProductList.json';
// import Nav from './Nav';
// import Footer from './Footer';

class ProductList extends Component {
  // state = {
  //   products: [],
  //   loading: true
  // };

  // componentWillMount() {
  //   axios.get('http://localhost:3001/pizza')
  //     .then(response => this.setState({ products: response.data, loading: false }));
  // }

//   componentWillMount() {
//   const navigator = this.props.navigator;
//   setTimeout(() => {
//     navigator.replace({
//       id: 'LoginPage',
//     });
//   }, 1000);
// }

renderScene(route, navigator) {
  return (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 25,
        paddingBottom: 15,
        backgroundColor: '#F8F8F8',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        elevation: 2,
        position: 'relative',
      }}>
      <TouchableHighlight
          onPress={this.goToFoodPage.bind(this)}>
        <Text>Matur</Text>
      </TouchableHighlight>
      <Text>repEAT</Text>
      <TouchableHighlight
          onPress={this.goToDrinksPage.bind(this)}>
        <Text>Drykkir</Text>
      </TouchableHighlight>
    </View>
  );
}

goToFoodPage() {
  this.props.navigator.push({
    id: 'Food',
    name: 'Matur',
  });
}

  goToDrinksPage() {
    this.props.navigator.push({
      id: 'Drinks',
      name: 'drykkir',
    });
  }

  renderProducts() {
    console.log(this.state);
    return ProductData.map(product =>
      <Product key={product.title} product={product} />
    );
  }


  render() {
    return (
      <View style={{}}>
        {this.renderScene()}
        {/* <Nav headerText={'App'} /> */}
        {/* <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}
          // navigationBar={
            // <Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
            //     routeMapper={NavigationBarRouteMapper} />
    //}
   /> */}
        <ScrollView>
          {this.renderProducts()}
        </ScrollView>
        {/* <Footer footerText={'Skoða pöntun'} /> */}
      </View>

    );
  }
}

// const NavigationBarRouteMapper = {
// LeftButton(route, navigator, index, navState) {
//   return (
//     <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
//         onPress={() => navigator.parentNavigator.pop()}>
//       <Text style={{color: 'white', margin: 10,}}>
//         Matur
//       </Text>
//     </TouchableOpacity>
//   );
// },
// RightButton(route, navigator, index, navState) {
//   return (
//     <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
//         onPress={() => navigator.parentNavigator.pop()}>
//       <Text style={{color: 'white', margin: 10,}}>
//         Drykkir
//       </Text>
//     </TouchableOpacity>
//   );
// },
// Title(route, navigator, index, navState) {
//   return (
//     <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
//       <Text style={{color: 'white', margin: 10, fontSize: 16}}>
//         repEAT
//       </Text>
//     </TouchableOpacity>
//   );
// }
// };

export default ProductList;
