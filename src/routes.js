import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from './pages/Main';
import PassaRepassa from './pages/PassaRepassa';
import TortaNaCara from './pages/TortaNaCara';
import ImagemAcao from './pages/ImagemAcao';
import LateralMenu from './components/LateralMenu';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="PassaRepassa" component={PassaRepassa} />
        <Stack.Screen name="TortaNaCara" component={TortaNaCara} />
        <Stack.Screen name="ImagemAcao" component={ImagemAcao} />
        <Stack.Screen name="LateralMenu" component={LateralMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
