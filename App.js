import * as React from 'react';
import LogIn from './src/components/LogIn.js'
import BottomTab from './src/components/BottomTab.js'
import RegisterStage1 from './src/components/RegisterStage1.js'
import RegisterStage2 from './src/components/RegisterStage2.js';
import Perfil from './src/screen/Perfil.js';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




// Crea una instancia de StackNavigator
const Stack = createStackNavigator();

const App = () => {
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="RegisterStage1" component={RegisterStage1} options={{ headerShown: false}}/>
        <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false}}/>
        <Stack.Screen name="Login" component={LogIn} options={{ headerShown: false}}/>
        
        <Stack.Screen name="RegisterStage2" component={RegisterStage2} options={{ headerShown: false}}/>
        <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
  }


export default App;
/*
export default function App() {
  return (
    <LogIn/>
    //<EditarRecetas/>
    // <NavigationContainer>
    //     <BottomTab/>
    // </NavigationContainer> 
  );
};*/
