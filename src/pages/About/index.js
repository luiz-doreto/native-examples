import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const About = ({route}) => {
  const {name} = route.params;
  return (
    <SafeAreaView style={styles.view}>
      <Text>{name}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default About;
