import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
// import Nav from './Nav';
import Drink from './Drink';
import DrinkList from '../DrinkList.json';

class Drinks extends Component {

  renderScene() {
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
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>repEAT</Text>
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

  renderDrinks() {
    console.log(this.state);
    return DrinkList.map(drink =>
      <Drink key={drink.label} drink={drink} />
    );
  }

  render() {
    return (
      <View>
        {this.renderScene()}
        <ScrollView>
          {/* <Nav headerText={'Drinks'} /> */}
          {this.renderDrinks()}
        </ScrollView>
      </View>

    );
  }
}

export default Drinks;
