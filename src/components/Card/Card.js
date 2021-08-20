import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <Text>{this.props.name}</Text>
        <Text>{this.props.role}</Text>
        <Text>{this.props.hobby}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'skyblue',
    margin: 10,
    padding: 10,
  },
});

export default Card;
