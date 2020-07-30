

/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-debugger, no-console */

import React, { Component, createRef } from 'react';
import {
  View, StyleSheet, Text, ScrollView, Alert, FlatList
} from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
// Importing custom components

import NumberContainer from '../Components/NumberContainer';
import Card from '../Components/Card';
import RoundedButton from '../Components/RoundedButton';
import BodyText from '../Components/BodyText';
// import Colours from '../Constants/colours';

export default class GameScreen extends Component {
  constructor(props) {
    super(props);
    const curretGuess = generteRandom(1, 100, this.props.userInput);
    this.state = {
      currentGuess: curretGuess,
      counter: 0,
      pastGuess: [curretGuess]
    };
    this.currentLow = createRef(1);
    this.currentHigh = createRef(100);
    this.currentHigh.current = 100;
    this.currentLow.current = 1;
    console.log(typeof (this.state.pastGuess));
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
      this.currentLow.current = this.state.currentGuess + 1;
    }
    console.log(this.currentLow.current, this.currentHigh.current);
    const newGuess = generteRandom(
        this.currentLow.current,
        this.currentHigh.current,
        this.state.currentGuess
    );
    console.log(newGuess);
    this.setState((state) => {
      console.log(state.pastGuess);
      const guess = [...[newGuess, ...state.pastGuess]];
      console.log(guess);
      return ({
        currentGuess: newGuess,
        counter: state.counter + 1,
        pastGuess: guess
      });
    });
  }

  render() {
    return (

      <View style={styles.screen}>
        <Text>Opponents Guess:</Text>
        <NumberContainer>{this.state.currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
          <RoundedButton title={down} onPress={this.processHint.bind(this, 'lower')} />
          <RoundedButton title={up} onPress={this.processHint.bind(this, 'greater')} />
        </Card>
        <View style={styles.listContainer}>
          {/* <ScrollView contentContainerStyle={styles.list}>
            {this.state.pastGuess.map((guess, index) => createList(guess, this.state.pastGuess.length - index))}
    </ScrollView> */}
          <FlatList contentContainerStyle={styles.list} data={this.state.pastGuess} keyExtractor={(item) => item} renderItem={createList.bind(this, this.state.pastGuess.length)} />
        </View>
      </View>

    );
  }
}
const up = <AntDesign name="arrowup" size={24} color="white" />;
const down = <AntDesign name="arrowdown" size={24} color="white" />;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 400,
    maxWidth: '90%'

  },
  listContainer: {
    flex: 1,
    width: '60%'
  },
  list: {
    flexGrow: 1,
    // alignItems: 'center',
    justifyContent: 'flex-end'
  },
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
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

const createList = (number, item) => (

  <Card style={styles.listItem}>
    <BodyText>
      #
      {number - item.index}
    </BodyText>
    <BodyText>{item.item}</BodyText>
  </Card>

);
