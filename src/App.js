import React, {Component} from 'react';
import {StatusBar, Image} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './SpplashScreen';
import {HomeScreen, cellStackNavigator, HomeSobre, PcScreen, PcStackNavigator, tvStacknavigator } from './components/Routers';

const Stack = createStackNavigator();

function MyStack() {
    return (
      <Stack.Navigator
      initialRouteName="Home"
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
        <Stack.Screen name="Pc" component={PcStackNavigator} 
         screenOptions={{
          headerStyle: {
            backgroundColor: '#ccc',
          },
          headerTintColor: '#000',
        }}
        options={{
            headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor:{
            backgroundColor:"#000",
          },
          
        }}
        />
          <Stack.Screen name="Tv" component={tvStacknavigator} 
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
    

  export default class App extends Component {
    constructor(props) {
      super(props);
    
      this.state = { isLoading: true }
    }
    performTimeConsumingTask = async() => {
      return new Promise((resolve) =>
        setTimeout(
          () => { resolve('result') },
          5000
        )
      );
    }
  
    async componentDidMount() {
      // Preload data from an external API
      // Preload data using AsyncStorage
      const data = await this.performTimeConsumingTask();
  
      if (data !== null) {
        this.setState({ isLoading: false });
      }
    }
    render() {
      if (this.state.isLoading) {
        return <SplashScreen />; 
    }
    // let {container, text} = styles;
    const Stack = createStackNavigator();
      return (
        <>
        <StatusBar  barStyle="dark-content" translucent backgroundColor="transparent" />
          <NavigationContainer>
            <MyStack />
          </NavigationContainer>
          </>        
      )
    }
  }