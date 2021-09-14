import React, {useState} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';

import DatePicker from '../../components/DatePicker';
import styles from './styles';

const Home = ({navigation}) => {
  const [date, setDate] = useState(new Date());

  const handleNavigate = ({name, avatar}) => {
    navigation.navigate('About', {name: 'Teste', avatar: null});
  };

  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.header}>
        <Text>Meu Header</Text>
      </View>
      <DatePicker
        value={date}
        onDateChange={setDate}
        placeholder="Data de nascimento"
      />
      <TouchableOpacity onPress={handleNavigate}>
        <Text>GO!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
