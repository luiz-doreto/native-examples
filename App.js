import React from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';

// import Card from './src/components/Card';
import Card2 from './src/components/Card2';

const response = [
  {id: 1, name: 'Luiz Doreto', role: 'Dev', hobby: 'Baterista'},
  {id: 2, name: 'Matheus', role: 'Dev', hobby: 'Músico'},
  {id: 3, name: 'Ariane', role: 'Dev', hobby: 'Assistir séries'},
  {id: 4, name: 'Nágella', role: 'Dev', hobby: 'Ukelelista'},
];

const App = () => {
  return (
    <SafeAreaView style={styles.view}>
      <FlatList
        data={response}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Card2 name={item.name} role={item.role} hobby={item.hobby} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  input: {
    height: 60,
    width: 200,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
