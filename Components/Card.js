import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ ...style.Card , ...this.props.style }}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 5,
    padding: 20,
    borderRadius: 10
  }
});
