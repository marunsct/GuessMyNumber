/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './Components/header';
import StartGameScreen from './Components/StartGameScreen';
import GameScreen from './Components/GameScreen';
import GameOver from './Components/GameOver';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [numRounds, setNumRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    console.log(selectedNumber);
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (rounds) => {
    setNumRounds(rounds);
  };

  const resetGame = () => {
    setUserNumber(null);
    setNumRounds(0);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && numRounds <= 0) {
    content = <GameScreen userInput={userNumber} onGameOver={gameOverHandler} />;
  } else if (numRounds > 0) {
    content = <GameOver rounds={numRounds} userNumber={userNumber} reset={resetGame} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess The Number" />
      <View style={styles.inputScreen}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
  },
  inputScreen: {
    flex: 1,
    // backgroundColor: 'black',
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'row'
  },
});
