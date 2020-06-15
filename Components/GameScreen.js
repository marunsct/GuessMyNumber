/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-debugger, no-console */
import React, { Component, createRef } from 'react';
import {
  View, StyleSheet, Text, Button, Alert
} from 'react-native';

// Importing custom components

import NumberContainer from './NumberContainer';
import Card from './Card';
// import Colours from '../Constants/colours';

export default class GameScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGuess: generteRandom(1, 100, this.props.userInput),
      counter: 0
    };
    this.currentLow = createRef(1);
    this.currentHigh = createRef(100);
    this.currentHigh.current = 100;
    this.currentLow.current = 1;
  }


  componentDidUpdate() {
    if (this.state.currentGuess === this.props.userInput) {
      this.props.onGameOver(this.state.counter);
    }
  }

  processHint(hint) {
    if (
      (hint === 'lower' && this.state.currentGuess < this.props.userInput) ||
      (hint === 'greater' && this.state.currentGuess > this.props.userInput)
    ) {
      Alert.alert('That\'s a Lie', 'You know that is wrong!!', [
        { text: 'OOOPS!', type: 'cancel' },
      ]);
      return;
    }
    if (hint === 'lower') {
      this.currentHigh.current = this.state.currentGuess;
    } else {
      this.currentLow.current = this.state.currentGuess;
    }
    console.log(this.currentLow.current, this.currentHigh.current);
    const newGuess = generteRandom(
        this.currentLow.current,
        this.currentHigh.current,
        this.state.currentGuess
    );
    console.log(newGuess);
    this.setState({
      currentGuess: newGuess,
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text>Opponents Guess:</Text>
        <NumberContainer>{this.state.currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
          <Button
            title="Lower"
            onPress={this.processHint.bind(this, 'lower')}
          />
          <Button
            title="Greater"
            onPress={this.processHint.bind(this, 'greater')}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    width: 300,
    maxWidth: '80%',
  },
});

const generteRandom = (max, min, exclude) => {
  const sMin = Math.ceil(min);
  const sMax = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (sMax - sMin) + sMin);

  if (randomNumber === exclude) {
    return generteRandom(max, min, exclude);
  }
  console.log(max, min, exclude, randomNumber);
  return randomNumber;
};
