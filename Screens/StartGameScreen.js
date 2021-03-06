/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions
} from 'react-native';

import Card from '../Components/Card';
import Colours from '../Constants/colours';
import Input from '../Components/Input';
import NumberContainer from '../Components/NumberContainer';
import HeaderText from '../Components/HeaderText';
import BodyText from '../Components/BodyText';
import RoundedButton from '../Components/RoundedButton';
// import Header from './header';

export default class StartGameScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enteredText: '',
      selectedValue: '',
      confirmSelection: '',
      deviceWidth: Dimensions.get('window').width,
      deviceHeight: Dimensions.get('window').height
    };

    this.buttonWidth = { width: Dimensions.get('window').width / 4 };
  }

  numberInputHandler(text) {
    const enteredText = text.replace(/[^0-9]/g, '');
    //  console.log(text);
    this.setState({
      enteredText,
    });
  }

  reset() {
    this.setState({
      enteredText: '',
      confirmSelection: false,
    });
  }

  confirmHandler() {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const chosenNumner = parseInt(this.state.enteredText, 10);

    Keyboard.dismiss();

    // eslint-disable-next-line no-restricted-globals
    if (isNaN(chosenNumner) || chosenNumner <= 0 || chosenNumner > 99) {
      Alert.alert('Invalid Number', 'Enter a Number between 1 and 99', [
        { text: 'Okay', style: 'destructive', onPress: this.reset.bind(this) },
      ]);

      return;
    }

    this.setState({
      selectedValue: chosenNumner,
      confirmSelection: true,
      // enteredText: ''
    });
  }

  checkConfirmation() {
    // console.log('hiiiii');
    console.log(this.state);
    // Keyboard.dismiss();
    if (this.state.confirmSelection === true) {
      return (
        <View style={styles.confirmScreen}>
          <Text style={{ marginTop: 20, color: Colours.accent }}>
            Chosen Number is
          </Text>
          <NumberContainer>{this.state.selectedValue}</NumberContainer>
          <View style={styles.button}>
            <RoundedButton
              title="Start"
              // color={Colours.primary}
              onPress={this.props.onStartGame.bind(this, this.state.selectedValue)}
            // onPress={this.props.onStartGame(this.state.selectedValue)}
            />
          </View>
        </View>
      );
    }
  }

  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView>
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}
          >
            <View style={styles.screen}>
              <HeaderText style={styles.title}>Lets begin!!!</HeaderText>
              <Card style={styles.inputContainer}>
                <BodyText>Enter a Number</BodyText>
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
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    padding: 1,
    // backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 15,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    marginVertical: 10,
    marginBottom: 30,
    alignContent: 'center',
  },
  inputContainer: {
    width: 350,
    maxWidth: '85%',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    backgroundColor: 'white',
    elevation: 5,
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
  confirmScreen: {
    marginTop: 40,
    // backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    maxWidth: '85%',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    backgroundColor: 'white',
    elevation: 5,
    padding: 20,
    borderRadius: 10,
  }
});
/*
          <TextInput
            style={{
              height: 35,
              marginTop: 15,
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 6,
              shadowOpacity: 0.26,
              backgroundColor: 'white',
              elevation: 5
            }}/>

            */
