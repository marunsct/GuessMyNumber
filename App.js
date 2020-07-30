/* eslint-disable global-require */
/* eslint-disable max-len */
/* eslint-disable no-console */
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './Components/header';
import StartGameScreen from './Screens/StartGameScreen';
import GameScreen from './Screens/GameScreen';
import GameOver from './Screens/GameOver';

const loadFont = () => Font.loadAsync({
  'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf')
});

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [numRounds, setNumRounds] = useState(0);
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading startAsync={loadFont} onFinish={() => setFontLoaded(true)} onError={(err) => console.log(err)} />;
  }

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
