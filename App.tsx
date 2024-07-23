import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './src/Homepage/Homepage';
import Technology from './src/Homepage/Technology';
import DetailsTechnologyPage from './src/Homepage/DetailsTechnologyPage';
import Giavang from './src/Homepage/Giavang';
import Coin from './src/Homepage/Coin';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homepage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Technology" component={Technology} />
        <Stack.Screen name="DetailsTechnologyPage" component={DetailsTechnologyPage} />
        <Stack.Screen name="Giavang" component={Giavang} />
        <Stack.Screen name="Coin" component={Coin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;