import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Button from './Button';

const Drink = ({ drink }) => {
  const { picture, price, label } = drink;

  return (
    <View>
      <Image style={{ height: 300, marginTop: 20 }} source={{ uri: picture }} alt="" />
      <View style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}>
        {/* <Text style={styles.headerTextStyle}>{title}</Text> */}
        <Text>{label}</Text>
        <Text>{price}</Text>
        <Button onPress={() => Linking.openURL(picture)}>Nánar</Button>
      </View>
    </View>
  );
};

// const styles = {
//   headerTextStyle: {
//     fontSize: 20
//   }
// };

export default Drink;
