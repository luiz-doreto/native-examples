import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'pink',
    margin: 10,
    padding: 10,
  },
});

const Card = ({name, role, hobby}) => {
  return (
    <View style={styles.card}>
      <Text>{name}</Text>
      <Text>{role}</Text>
      <Text>{hobby}</Text>
    </View>
  );
};

export default Card;
