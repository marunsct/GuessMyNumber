/* eslint-disable react/jsx-indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button, Image
} from 'react-native';

import BodyText from '../Components/BodyText';
import Colours from '../Constants/colours';

export default class GameOver extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text>Game Over</Text>
        <View style={styles.imageContainer}>
          <Image
            // source={require('../assets/original.png')}
            source={{ uri: 'https://reba.global/files/img_cache/13628/__1__1136281576078018_WhycreatingpeakmomentsMAIN.jpg?1576078955' }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.resultTextContainer}>
          <BodyText style={styles.resultText}>
            Your phone took 
            {' '}
            <Text style={styles.highlight}>
              {this.props.rounds}
            </Text>
            {' '}
             rounds to guess your number 
            {' '}
            <Text style={styles.highlight}>
              {this.props.userNumber}
            </Text>
          </BodyText>
        </View>
        <Button title="New Game" onPress={this.props.reset} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  image: {
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    height: 300,
    width: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 20
  },
  highlight: {
    color: Colours.primary,
    fontFamily: 'OpenSans-Bold'
  },
  resultTextContainer: {
    width: '80%',
    marginVertical: 20
  },
  resultText: {
    fontSize: 15,
    textAlign: 'center'
  }
});
