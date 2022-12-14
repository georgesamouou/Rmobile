import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import Login from './screens/Login';
import SignIn from './screens/SignIn';
import LostPassword from './screens/LostPassword';
import Index from './screens/Index';
import Parameters from './screens/Parameters';


const Stack = createNativeStackNavigator();

function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component = {Login}
            />
            <Stack.Screen
              name="SignIn"
              component = {SignIn}
            />
            <Stack.Screen
              name="LostPassword"
              component = {LostPassword}
            />
            <Stack.Screen
              name="Main"
              component = {Index}
            />
            <Stack.Screen
              name="Parameters"
              component = {Parameters}
            />
          </Stack.Navigator>
        </NavigationContainer>
  );
}
export default App;

