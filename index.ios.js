/**
 * SmartRecipes React Native IOS Application
 *
 * @_elmahdim
 */

'use strict';
import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  TextInput,
  TouchableHighlight,
  AlertIOS,
  ListView,
  Image,
  NavigatorIOS,
} from 'react-native';

const config = require('./config/config');
const Main   =  require('./App/Components/Main');

class WelcomeScreen extends React.Component {
  render(){
    return(
      <NavigatorIOS
      style={styles.loader}
      navigationBarHidden={true}
      initialRoute={{
        title : "SmartRecipes",
        component : Main
      }}
      />
    );
  }
}

/*
class SmartRecipes extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    };
  }
  componentDidMount(){
    this.fetchThemes();
  }
  fetchThemes(){
    fetch(config.query+'spinach')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.recipes),
        loaded: true
      })
    }).done()
  }
  renderIsLoading(){
    return(
      <View style={styles.loader}>
          <Text style={styles.loaderTitle}>Counting to infinity</Text>
          <Text style={styles.loaderCaption}>(just kidding, still loading)</Text>
      </View>
    );
  }
  renderData(param){
    return (
      <View style={styles.item}>
        <Image
        style={styles.item_image}
        source={{uri: param.image_url}}  />
        <View style={styles.inner}>
          <Text style={styles.item_title}>{param.title}</Text>
        </View>
      </View>
    )
  }
  render(){
    if (!this.state.loaded) {
      return this.renderIsLoading();
    }
    return (
      <View style={styles.mainContainer}>
          <View style={styles.toolbar}>
            <Text style={styles.toolbarTitle}>Welcom to SmartRecipes</Text>
          </View>
          <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderData.bind(this)}
          />
      </View>
    );
  }
}
*/

var styles = StyleSheet.create({
  // Loader
  loader: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f9f9f9',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  loaderTitle: {
    alignSelf: 'center',
    color: '#5E4674',
    fontSize: 22,
    marginBottom: 8,
  },
  loaderCaption: {
    alignSelf: 'center',
    color: '#999',
    fontSize: 16,
  },
  // Toolbar
  toolbar:{
    backgroundColor:'#f8f8f8',
    paddingTop:30,
    paddingBottom:10,
    flexDirection:'row'
  },
  toolbarTitle:{
    color:'#000',
    textAlign:'center',
    fontWeight:'bold',
    flex:1
  },
  // Container
  mainContainer:{
    backgroundColor: '#000',
    flex: 1
  },
  inner:{
     padding: 20,
     backgroundColor: '#fff',
  },
  // Forms
  inputField : {
    borderWidth: 0,
    backgroundColor: '#fff',
    height: 45,
  },
  button: {
    backgroundColor: '#eeeeee',
    padding: 10,
  },
  button_text : {
    textAlign: 'center',
    fontWeight:'bold',
  },
  // item
  item: {

  },
  item_image:{
    height: 200,
  },
  item_title:{
    fontSize: 18,
  }
});

AppRegistry.registerComponent('SmartRecipes', () => WelcomeScreen);
