import React from 'react';
import { Text, View, Image } from 'react-native';

const SingleDrink = ({ drink }) => {
  return (
    <View style={{ marginTop: 60 }}>
      <Image style={{ height: 200, width: null }} source={require('../img/boli.jpg')} alt="" />
      <Text style={styles.headerText}>Boli</Text>
      <Text style={styles.descText}>Boli er af stíl sem heitir Märzen eða Oktoberfest og flokkast því sem ljós lagerbjór. Boli ljósgullinn að lit með hvítri froðu</Text>
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

export default SingleDrink;
