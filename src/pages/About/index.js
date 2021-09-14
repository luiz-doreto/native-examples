import React, {useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet, Text, Button, View} from 'react-native';

import InfoSheet from '../../components/InfoSheet';
import Select from '../../components/Select';
import api from '../../services/api';

const About = ({route}) => {
  const {name, avatar} = route.params;
  const [state, setState] = useState('');
  const [states, setStates] = useState([]);
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  const navigation = useNavigation();
  const infoRef = useRef(null);

  const handleBack = () => {
    navigation.goBack();
  };

  const fetchStates = async () => {
    try {
      const {data} = await api.get('states-list');

      setStates(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchCities = async () => {
    try {
      const {data} = await api.get(`cities-list/${state}`);

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
      <TouchableOpacity onPress={() => infoRef.current.expand()}>
        <Text>CLICA AQUI</Text>
      </TouchableOpacity>
      <InfoSheet
        ref={infoRef}
        title="Usuário cadastrado"
        subtitle="Realize seu login e gerencie sua hamburgueria"
        buttonText="Fazer login"
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
