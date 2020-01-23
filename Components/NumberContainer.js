import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

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
        <Text>{this.props.number}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  NumberContainer: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 5
  },
  textStyle: {
    marginBottom: 5
  }
});
