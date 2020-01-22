import React, { Component } from "react";
import { View, Text, StyleProp } from "react-native";

export default class NumberContainer extends Component {
  constructor(props) {
    super(this.props);
  }
  render() {
    return (
      <View style={styles.NumberContainer}>
        <Text text={this.props.text} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  NumberContainer: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5
  }
});
