import React from 'react';
import {StatusBar} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import {HomeScreen, cellStackNavigator, HomeSobre } from './components/Routers';

const Stack = createStackNavigator();

function MyStack() {
    return (
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ccc',
        },
        headerShown:false, //Aqui exibe ou não a barra de Header opções: true ou false
        headerTintColor: '#000',
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Celular" component={cellStackNavigator} 
        options={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor:{
            backgroundColor:"#000",
          },
          
        }}
        />
        <Stack.Screen name="Sobre" component={HomeSobre} 
        options={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor:{
            backgroundColor:"#000",
          },
          
        }}
        />
      </Stack.Navigator>
      );
    }
    

export default function App() {
    return (
    <>
    <StatusBar  barStyle="light-content" translucent backgroundColor="transparent" />
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
      </>
    );
  }
  