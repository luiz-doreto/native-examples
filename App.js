import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import About from './src/pages/About';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
