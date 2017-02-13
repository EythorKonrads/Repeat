import React, { Component } from 'react';
import { View, Text, Navigator, TouchableHighlight } from 'react-native';

// const Header = (props) => {
//   const { textStyle, viewStyle } = styles;
//   return (
//     <View style={viewStyle}>
//       <Text style={textStyle}>{props.headerText}</Text>
//     </View>
//   );
// };
export default class Header extends Component {
  render() {
    const routes = [
      { title: 'First Scene', index: 0 },
      { title: 'Second Scene', index: 1 },
    ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) => {
          return (
            <View>
              <Text>hallods jfjdsfj jdsljf</Text>
              <Text>hallods jfjdsfj jdsljf</Text>
              <Text>hallods jfjdsfj jdsljf</Text>
              <Text>hallods jfjdsfj jdsljf</Text>
              <Text>hallods jfjdsfj jdsljf</Text>
            </View>
          )
        }

        }
        style={{ padding: 100 }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              Title: (route, navigator, index, navState) =>
              { return (<Text>{route.title}</Text>); },
              LeftButton: (route, navigator, index, navState) =>
              { return (<Text>Matur</Text>); },
              RightButton: (route, navigator, index, navState) =>
              { return (<TouchableHighlight
                onPress={() => {
                  if (route.index === 0) {
                    navigator.push(routes[1]);
                  } else {
                    navigator.pop();
                  }
                }}
                        >
                <Text>Drykkir!</Text>
              </TouchableHighlight>); },
            }}
            renderScene={ this.renderScene }
            style={{ backgroundColor: 'gray' }}
          />
        }
        configureScene={(route, routeStack) =>
        Navigator.SceneConfigs.FloatFromBottom}
      />
    );
  }
}

// const styles = {
//   viewStyle: {
//     backgroundColor: '#F8F8F8',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 60,
//     paddingTop: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     elevation: 2,
//     position: 'relative',
//   },
//   textStyle: {
//     fontSize: 20
//   }
// };
// export default Header;
