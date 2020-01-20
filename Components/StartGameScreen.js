import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Card from "./Card";
import Colours from "../Constants/colours";
import Input from "../Components/Input";

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
        <Card style={styles.inputContainer}>
          <Text>Enter a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Reset" color={Colours.accent} onPress={() => {}} />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                color={Colours.primary}
                onPress={() => {}}
              />
            </View>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    padding: 1,
    //backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingVertical: 15,
    marginTop: 10
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    marginBottom: 30,
    alignContent: "center"
  },
  inputContainer: {
    width: 350,
    maxWidth: "85%",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 5,
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 90
  },
  input: {
    width: 30,
    textAlign: "center"
  }
});
/*
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
            }}/>

            */
