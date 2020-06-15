import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button
} from 'react-native';

export default class GameOver extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text>Game Over</Text>
        <Text>
          Number of Rounds:
          {this.props.rounds}
        </Text>
        <Text>
          Number Was:
          {this.props.userNumber}
        </Text>
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

  }
});
