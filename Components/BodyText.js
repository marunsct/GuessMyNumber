import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';


export default class BodyText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Text style={{ ...styles.text, ...this.props.style }}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans'
  }
});
