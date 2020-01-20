import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ ...styles.Card , ...this.props.style }}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
   // backgroundColor: "black",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 5,
    padding: 1,
    borderRadius: 10
  }
});
