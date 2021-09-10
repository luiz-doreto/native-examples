import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, StyleSheet, Text, Button, View} from 'react-native';

import Select from '../../components/Select';
import api from '../../services/api';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzBjYjI3OTEwODg1MDAzN2FlODc2MyIsImlhdCI6MTYzMTI4MzkzNCwiZXhwIjoxNjMxMzcwMzM0fQ.rqEHfT36pGdk_bv9ntG4Bth5yxI3sIw2gaT8qwLbFdM';

const About = ({route}) => {
  const {name, avatar} = route.params;
  const [state, setState] = useState('');
  const [states, setStates] = useState([]);
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const fetchStates = async () => {
    try {
      const {data} = await api.get('states-list', {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      setStates(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchCities = async () => {
    try {
      const {data} = await api.get(`cities-list/${state}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      setCities(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleStateChange = value => {
    setCity('');
    setCities([]);
    setState(value);
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
      <Select
        placeholder="Estado"
        value={state}
        data={states}
        onOpen={fetchStates}
        onChange={handleStateChange}
      />
      <Select
        placeholder="Cidade"
        value={city}
        data={cities}
        onOpen={fetchCities}
        onChange={setCity}
        disabled={!state}
      />
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
