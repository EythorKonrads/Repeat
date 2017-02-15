import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Button from './Button';

const Product = ({ product }) => {
  const { title, picture, price, label } = product;

  return (
    <View style={styles.cardContainerStyle}>
      <Image style={styles.ImageStyle} source={{ uri: picture }} alt="" />
      <View style={{ marginLeft: 10, marginRight: 10, marginTop: 1 }}>
        <Text style={styles.headerTextStyle}>{title}</Text>
        <Text style={{ lineHeight: 20 }}>{label}</Text>
        <Text style={{ marginTop: 10, fontWeight: '300' }}>{price}</Text>
        <Button onPress={() => Linking.openURL(picture)}>Nánar</Button>
      </View>
    </View>
  );
};

const styles = {
  cardContainerStyle: {
     backgroundColor: '#fff',
      marginTop: 30,
      paddingBottom: 20
  },
  headerTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    // fontFamily: 'System'
  },
  ImageStyle: {
    height: 300
  }
};

export default Product;
