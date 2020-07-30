/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity
} from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colours from '../Constants/colours';

export default class RoundedButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={this.props.onPress}
      >
        <View style={styles.button}>
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colours.primary,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
    alignItems: 'center',
    overflow: 'hidden'
  },
  text: {
    fontFamily: 'OpenSans',
    fontSize: 18,
    color: 'white',
  },
  buttonContainer: {}
});
