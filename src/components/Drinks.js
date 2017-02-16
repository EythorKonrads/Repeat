import React, { Component } from 'react';
import { ScrollView, View, Image } from 'react-native';
// import SingleDrink from './SingleDrink';
import Drink from './Drink';
import DrinkList from '../DrinkList.json';

class Drinks extends Component {

  renderDrinks() {
    console.log(this.state);
    return DrinkList.map(drink =>
      <Drink key={drink.label} drink={drink} />
    );
  }

  render() {
    return (
      <View>
        <Image style={{ justifyContent: 'center', alignSelf: 'center', height: 76, marginTop: 80 }} source={require('../img/loggo.png')} alt="" />
        <ScrollView>
          {this.renderDrinks()}
        </ScrollView>
      </View>
    );
  }
}

export default Drinks;
