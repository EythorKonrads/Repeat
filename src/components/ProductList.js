import React, { Component } from 'react';
import { ScrollView } from 'react-native';
// import axios from 'axios';
import Product from './Product';
import ProductData from '../ProductList.json';

class ProductList extends Component {
  // state = {
  //   products: [],
  //   loading: true
  // };

  // componentWillMount() {
  //   axios.get('http://localhost:3001/pizza')
  //     .then(response => this.setState({ products: response.data, loading: false }));
  // }

  renderProducts() {
    console.log(this.state);
    return ProductData.map(product =>
      <Product key={product.title} product={product} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderProducts()}
      </ScrollView>
    );
  }
}

export default ProductList;
