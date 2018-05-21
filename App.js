import React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
// import CardSec from './src/components/CardSec';
import Calculator  from "./src/components/Calculator";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
 <Calculator/> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'flex-start',
    paddingHorizontal:10,
    marginTop:Expo.Constants.statusBarHeight
   
  }
});