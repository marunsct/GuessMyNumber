import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from "./Components/header";
import GameScreen from "./Components/StartGameScreen";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess The Number"/>
      <GameScreen />
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
    flex : 1
  }
});
