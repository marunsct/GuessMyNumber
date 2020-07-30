/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colours from '../Constants/colours';

export default class NumberContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  render() {
    return (
      <View style={styles.NumberContainer}>
        <Text>{this.props.children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  NumberContainer: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginVertical: 15,
    borderWidth: 2,
    borderColor: Colours.accent,
    padding: 10
  },
  textStyle: {
    marginVertical: 5,
    color: Colours.accent,
    fontSize: 22,
  },
});
