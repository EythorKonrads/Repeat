import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from './Button';

const Drink = ({ drink }) => {
  const { picture, price, label } = drink;

  return (
    <View style={styles.cardContainerStyle}>
      <Image
        style={{ height: 300, marginTop: 20 }}
        source={{ uri: picture }} alt=""
      />
      <View style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}>
        {/* <Text style={styles.headerTextStyle}>{title}</Text> */}
        <Text
          onPress={() => Actions.singledrink(drink)}
          style={styles.headerTextStyle}>
          {label}
        </Text>
        <Text style={{ marginTop: 10, fontWeight: '300' }}>{price}</Text>
        <Button onPress={() => Linking.openURL(picture)}>Nánar</Button>
      </View>
    </View>
  );
};

const styles = {
  cardContainerStyle: {
     backgroundColor: '#fff',
      // marginTop: 20,
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

export default Drink;
