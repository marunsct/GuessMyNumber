import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet, Button } from "react-native";

export default class StartGameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEntry: ""
    };
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>Lets begin!!!</Text>
        <View style={styles.inputContainer}>
          <Text>Enter a Number</Text>
          <TextInput
            style={{
              height: 35,
              marginTop: 15,
              shadowColor: "black",
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 6,
              shadowOpacity: 0.26,
              backgroundColor: "white",
              elevation: 5
            }}
          />
          <View style={styles.buttonContainer}>
            <Button title="Reset" style={styles.button} />
            <Button title="Confirm" style={styles.button} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    //flex: 1,
    padding: 10,
    alignItems: "center"
    //alignSelf: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: 10
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    alignContent: "center"
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 5,
    padding: 20,
    borderRadius: 10
  },
  button: {
    width: 80
  }
});
