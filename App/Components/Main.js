'use strict';
import React, {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NavigatorIOS,
  Image,
} from 'react-native';

const Finder = require("./Finder");

let styles = StyleSheet.create({
  intro: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  introTitle: {
    alignSelf: 'center',
    fontSize: 36,
    marginBottom: 8,
    color: '#fff',
  },
  introSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
  },
  content: {
    padding: 20,
  },
  btn_default: {
    backgroundColor: 'rgba(0,0,0,.6)',
    textAlign: 'center',
    margin: 20,
    fontSize: 16,
    height: 50,
    color: '#fff',
    paddingTop: 15,
  },
});

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.route.title,
      subtitle: "Find delicious recipes based on the ingredients you have got"
    };
  }
  _getFinder(){
    this.props.navigator.push({
      title : "Find Recipes",
      component : Finder,
      // passProps : {myElement: "some value"}
    });
  }
  render(){
    return(
      <Image
      source={require('../../images/intro_bg.png')}
      style={styles.intro} >
      <View style={styles.content}>
        <Text style={styles.introTitle}>{this.state.title}</Text>
        <Text style={styles.introSubtitle}>{this.state.subtitle}</Text>
        <TouchableHighlight
          underlayColor='transparent'
          onPress={() => this._getFinder()}>
          <Text style={styles.btn_default}>Get Started</Text>
        </TouchableHighlight>
      </View>
      </Image>
    )
  }
};

module.exports = Main;
