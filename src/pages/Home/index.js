import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import DatePicker from '../../components/DatePicker';
import MaskedInput from '../../components/MaskedInput';
import Card2 from '../../components/Card2';
import api from '../../services/api';
import styles from './styles';

const Home = ({navigation}) => {
  const [repos, setRepos] = useState([]);
  const [date, setDate] = useState(new Date());
  const [cpf, setCpf] = useState('');
  const cpfRef = useRef(null);

  useEffect(() => {
    if (cpfRef?.current?.isValid()) {
      console.log(cpf);
    } else {
      console.log('INVALID');
    }
  }, [cpf]);

  const loadRepos = async () => {
    const {data} = await api.get('users/facebook/repos');

    const repoNames = data.map(repo => ({
      name: repo.full_name,
      avatar: repo.owner.avatar_url,
    }));

    setRepos(repoNames);
  };

  useEffect(() => {
    loadRepos();
  }, []);

  const onRemoveTask = item => {
    const filteredTasks = repos.filter(repo => repo.name !== item);

    setRepos(filteredTasks);
  };

  const handleNavigate = ({name, avatar}) => {
    navigation.navigate('About', {name, avatar});
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
      <MaskedInput
        ref={cpfRef}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
      />
      <FlatList
        data={repos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handleNavigate(item)}>
            <Card2
              name={item.name}
              avatar={item.avatar}
              onRemoveTask={onRemoveTask}
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
