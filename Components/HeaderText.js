/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */

import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class HeaderText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.children);
    return (
      <Text style={{ ...styles.text, ...this.props.style }}>

        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold'
  }
});
