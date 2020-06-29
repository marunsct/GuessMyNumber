import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Colours from '../Constants/colours';
import HeaderText from './HeaderText';

export default class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      isLoading: true,
    };
  }

  render() {
    return (
      <View style={styles.header}>
        <HeaderText style={styles.headerText}>{this.props.title}</HeaderText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colours.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'OpenSans-Bold'
  },
});
