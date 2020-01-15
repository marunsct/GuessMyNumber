import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet, Button } from "react-native";

export default class StartGameScreen {
  constructor(props) {
    super(props);
    this.state = {
      userEntry: ""
    };
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>Enter a Number</Text>
        <View style={styles.inputContainer}>
          <TextInput />
          <View style={styles.buttonContainer}>
            <Button title="Reset" />
            <Button title="Confirm" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    alignContent: "center"
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    shadowColor:"black",
    shadowOffset:{ width:0 , height:2},
    shadowRadius:6,
    shadowOpacity:0.26,
    backgroundColor: "white",
    elevation: 5,
    padding: 20,
    borderRadius:10
  }
});
