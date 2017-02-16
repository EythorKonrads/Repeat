import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from './Button';

const Product = ({ product }) => {
  const { title, picture, price, label } = product;

  return (
    <View>
      <Image style={{ height: 300, marginTop: 20 }} source={{ uri: picture }} alt="" />
      <View style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}>
        <Text
          onPress={() => Actions.singleproduct(product)}
          style={styles.headerTextStyle}
        >
          {title}
        </Text>
        <Text>{label}</Text>
        <Text>{price}</Text>
        <Button onPress={() => Linking.openURL(picture)}>Nánar</Button>
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
