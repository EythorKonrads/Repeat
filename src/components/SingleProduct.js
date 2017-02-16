import React from 'react';
import { Text, View, Image } from 'react-native';

const SingleProduct = ({ product }) => {
  return (
    <View style={{ marginTop: 60 }}>
      <Image style={{ height: 200, width: null }} source={require('../img/sandwich.jpg')} alt="" />
      <Text style={styles.headerText}>Samlokan</Text>
      <Text style={styles.descText}>parmaskinka, mozarella, tómatur, pestó</Text>
    </View>
  );
};

const styles = {
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },
  descText: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  }
};

export default SingleProduct;
