import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Footer extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#fff' }}>
        <Text style={styles.footerTextStyle}>{this.props.footerText}</Text>
      </View>
    );
  }
}

const styles = {
  footerTextStyle: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 15
  }
};

export default Footer;
