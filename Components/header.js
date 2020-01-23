import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Colours from "../Constants/colours";

export default class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  render() {
    return (
      <View style={styles.header}>
        <Text>=</Text>
        <Text style={styles.headerText}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colours.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    color: "black",
    fontSize: 18
  }
});
