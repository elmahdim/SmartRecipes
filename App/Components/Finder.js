'use strict';
import React, {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NavigatorIOS,
  TextInput,
  AlertIOS,
  ScrollView,
  Image,
} from 'react-native';

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    flex: .9,
    justifyContent: 'center',
    width: null,
    height: null,
    alignItems: 'stretch',
    backgroundColor: 'transparent',
    resizeMode: 'cover',
  },
  action: {
    flex: .1,
    backgroundColor: "#ea4c42",
    justifyContent: 'flex-end',
  },
  content: {
    padding: 20,
  },
  input: {
    backgroundColor: 'rgba(0,0,0,.6)',
    color: '#fff',
    fontSize: 16,
    height: 50,
    textAlign: 'center',
    marginBottom: 15,
  },
  btn_default_o: {
    backgroundColor: "#ea4c42",
    textAlign: 'center',
    padding: 24,
    fontSize: 16,
    //height: 50,
    color: '#fff',
    //lineHeight: 34,
  },
  inputHelper: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  }
});

class Finder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {defaultValue: props.defaultValue};
  }
  onSearchTextChanged(event) {
    this.setState({ defaultValue: event.nativeEvent.text });
	}
  _executeQuery(query){
    AlertIOS.alert(
     'Input Value',
      query
    );
  }
  onSearchPressed() {
    var query = this.state.defaultValue;
    this._executeQuery(query.replace(/,/g , "|"));
	}
  render(){
    return(
      <View style={styles.container}>
        <Image
        source={require('../../images/natyurmort.jpg')}
        style={styles.form} >
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            value={this.state.defaultValue}
            onChange={this.onSearchTextChanged.bind(this)}
            placeholderTextColor="white"
            placeholder="Beef,rosemary,garlic"
          />
          <Text style={styles.inputHelper}>Enter your ingredients separated with commas.</Text></View>
        </Image>
        <View style={styles.action}>
          <TouchableHighlight onPress={this.onSearchPressed.bind(this)} >
            <Text style={styles.btn_default_o}>Find a Recipe</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
};

module.exports = Finder;
