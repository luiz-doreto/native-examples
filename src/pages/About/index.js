import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, StyleSheet, Text, Button, View} from 'react-native';

const About = ({route}) => {
  const {name, avatar} = route.params;
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.header}>
        <Button title="Voltar" onPress={handleBack} />
        <View style={styles.titleHeader}>
          <Text>Detalhes</Text>
        </View>
      </View>
      <Text>Você deve:</Text>
      <Text>{name}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'skyblue',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default About;
