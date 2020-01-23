import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";

import Card from "./Card";
import Colours from "../Constants/colours";
import Input from "../Components/Input";
import NumberContainer from "../Components/NumberContainer";
import Header from "../Components/header";

export default class StartGameScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    enteredText: "",
    selectedValue: "",
    confirmSelection: ""
  };
  numberInputHandler(text) {
    //console.log("Hi" + text);
    text = text.replace(/[^0-9]/g, "");
    //console.log(text);
    this.setState({
      enteredText: text
    });
  }

  reset() {
    this.setState({
      enteredText: "",
      confirmSelection: false
    });
  }

  confirmHandler() {
    var chosenNumner = parseInt(this.state.enteredText);

    Keyboard.dismiss();

    if (isNaN(chosenNumner) || chosenNumner <= 0 || chosenNumner > 99) {
      Alert.alert("Invalid Number", "Enter a Number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: this.reset.bind(this) }
      ]);

      return;
    }

    this.setState({
      selectedValue: chosenNumner,
      confirmSelection: true
      // enteredText: ""
    });
  }

  checkConfirmation() {
    console.log("hiiiii");
    console.log(this.state);
    //Keyboard.dismiss();
    if (this.state.confirmSelection === true) {
      return (
        <View style={styles.confirmScreen}>
          <Text style={{ marginVertical: 20, color: Colours.accent }}>
            Chosen Number is
          </Text>
          <NumberContainer title={this.state.selectedValue} />
          <View style={styles.button}>
            <Button title="Start" color={Colours.primary} />
          </View>
        </View>
      );
    }
  }
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
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
              onChangeText={this.numberInputHandler.bind(this)}
              value={this.state.enteredText}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button
                  title="Reset"
                  color={Colours.accent}
                  onPress={this.reset.bind(this)}
                />
              </View>
              <View style={styles.button}>
                <Button
                  title="Confirm"
                  color={Colours.primary}
                  onPress={this.confirmHandler.bind(this)}
                />
              </View>
            </View>
          </Card>
          {this.checkConfirmation()}
        </View>
      </TouchableWithoutFeedback>
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
    shadowOpacity: 0.3,
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
    width: 50,
    textAlign: "center"
  },
  confirmScreen: {
    marginTop: 100,
    padding: 1,
    //backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    maxWidth: "85%",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    backgroundColor: "white",
    elevation: 5,
    padding: 20,
    borderRadius: 10
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
