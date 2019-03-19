import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Root from "./src/main";

console.disableYellowBox = true; //take out warning yellow card
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Root {...this.props}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
