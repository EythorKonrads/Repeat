import React from 'react';
import { View, Text, Image } from 'react-native';

const Product = ({ product }) => {
  const { title, picture, price, label } = product;

  return (
    <View>
      <Image style={{ height: 300, marginTop: 20 }} source={{ uri: picture }} alt="" />
      <View style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}>
        <Text style={styles.headerTextStyle}>{title}</Text>
        <Text>{label}</Text>
        <Text>{price}</Text>
      </View>
    </View>
  );
};

const styles = {
  headerTextStyle: {
    fontSize: 20
  }
};

export default Product;
