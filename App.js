import * as React from 'react';
import LogIn from './src/components/LogIn.js'
import Pasos from './src/components/Pasos.js'

import BottomTab from './src/components/BottomTab.js'
import ListaIngredientes from './src/components/ListaIngredientes.js';
import ListaUnidades from './src/components/ListaUnidades.js';
import RegisterStage1 from './src/components/RegisterStage1.js'
import RegisterStage2 from './src/components/RegisterStage2.js';
import ImageUploader from './src/components/ImageUploader.js';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RecipeScreen from './src/screen/Receta.js';
import Perfil from './src/screen/Perfil.js';

const Stack = createStackNavigator();

const App = () => {
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LogIn} options={{ headerShown: false}}/>

      <Stack.Screen name="ImageUploader" component={ImageUploader} options={{ headerShown: false}}/>

      <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false}}/>


      <Stack.Screen name="Pasos" component={Pasos} options={{ headerShown: false}}/>

      <Stack.Screen name="ListaIngredientes" component={ListaIngredientes} options={{ headerShown: false}}/>
      <Stack.Screen name="ListaUnidades" component={ListaUnidades} options={{ headerShown: false}}/>
        <Stack.Screen name="RecipeScreen" component={RecipeScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="RegisterStage1" component={RegisterStage1} options={{ headerShown: false}}/>
        <Stack.Screen name="RegisterStage2" component={RegisterStage2} options={{ headerShown: false}}/>
        <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}

export default App;
