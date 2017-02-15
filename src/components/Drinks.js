import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
// import Nav from './Nav';
import Drink from './Drink';
import DrinkList from '../DrinkList.json';

class Drinks extends Component {

  renderScene() {
    return (
      <View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
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
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>repEAT</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20, paddingBottom: 10 }}>
          <TouchableHighlight
              onPress={this.goToFoodPage.bind(this)}>
            <Text style={{ marginRight: 40, fontSize: 18, fontWeight: 'bold', color: '#484848', opacity: 0.7 }}>Matur</Text>
          </TouchableHighlight>
          <TouchableHighlight
              onPress={this.goToDrinksPage.bind(this)}>
            <Text style={{ marginLeft: 40, fontSize: 18, fontWeight: 'bold', color: '#484848' }}>Drykkir</Text>
          </TouchableHighlight>
        </View>

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
