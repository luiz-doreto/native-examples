import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'pink',
    margin: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  image: {
    width: 40,
    height: 40,
    backgroundColor: '#e3e3e3',
    borderRadius: 20,
  },
  title: {
    flex: 1,
    marginLeft: 8,
  },
});

const Card = ({name, avatar, onRemoveTask}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: avatar}} />
      <Text style={styles.title}>{name}</Text>
      <TouchableOpacity onPress={() => onRemoveTask(name)}>
        <Text>x</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
