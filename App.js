import React from 'react';
import {SafeAreaView} from 'react-native';

import Card from './src/components/Card';
import Card2 from './src/components/Card2';

const response = [
  {name: 'Luiz Doreto', role: 'Dev', hobby: 'Baterista'},
  {name: 'Matheus', role: 'Dev', hobby: 'Músico'},
  {name: 'Ariane', role: 'Dev', hobby: 'Assistir séries'},
  {name: 'Nágella', role: 'Dev', hobby: 'Ukelelista'},
];

const App = () => {
  return (
    <SafeAreaView>
      {response.map(user => (
        <Card2 name={user.name} role={user.role} hobby={user.hobby} />
      ))}
    </SafeAreaView>
  );
};

export default App;
