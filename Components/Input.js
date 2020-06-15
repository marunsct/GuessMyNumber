import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TextInput
        {...this.props}
        style={{ ...styles.input, ...this.props.style }}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    //borderBottomWidth: 1,
    marginVertical: 10,
  },
});
