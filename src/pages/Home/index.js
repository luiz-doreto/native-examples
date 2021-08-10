import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Card2 from '../../components/Card2';

const response = [
  {id: 1, name: 'Luiz Doreto', role: 'Dev', hobby: 'Baterista'},
  {id: 2, name: 'Matheus', role: 'Dev', hobby: 'Músico'},
  {id: 3, name: 'Ariane', role: 'Dev', hobby: 'Assistir séries'},
  {id: 4, name: 'Nágella', role: 'Dev', hobby: 'Ukelelista'},
];

const Home = ({navigation}) => {
  const handleNavigate = name => {
    navigation.navigate('About', {name}); // { name: 'Luiz Doreto'}
  };

  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.header}>
        <Text>Meu Header</Text>
      </View>
      <FlatList
        data={response}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handleNavigate(item.name)}>
            <Card2 name={item.name} role={item.role} hobby={item.hobby} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  header: {
    height: 70,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
