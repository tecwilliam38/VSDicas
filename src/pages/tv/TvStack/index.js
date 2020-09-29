import React, {Component} from 'react';
import { createStackNavigator } from "@react-navigation/stack";
// Importação das Rotas
import TvScreen from '../TvScreen/index';
import Canais from '../Canais/index';
import Volume from '../Volume/index';
import TvCabo from '../TvCabo/insdex';

const Stack = createStackNavigator()

function tvStacknavigator(){
  return(

<Stack.Navigator initialRouteName="Smart Tv" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Smart Tv" 
         options={{
          headerStyle:{
            backgroundColor:"#162331",
            },
          headerTitleAlign:'center',
          headerTintColor:'#fff',
          headerTitleStyle: {
              fontSize:30,
              fontWeight: 'bold',
              textShadowOffset:{width:3, height:3},
      textShadowColor:"#000", 
      textShadowRadius:4,
            },}}
        component={TvScreen} />
           <Stack.Screen name="Canais" 
         options={{
           title:"Canal",
          headerStyle:{
            backgroundColor:"#162331",
            },
          headerTitleAlign:'center',
          headerTintColor:'#fff',
          headerTitleStyle: {
              fontSize:30,
              fontWeight: 'bold',
              textShadowOffset:{width:3, height:3},
      textShadowColor:"#000", 
      textShadowRadius:4,
            },}}
        component={Canais} />
        <Stack.Screen name="Volume" 
         options={{
           title:"Volume",
          headerStyle:{
            backgroundColor:"#162331",
            },
          headerTitleAlign:'center',
          headerTintColor:'#fff',
          headerTitleStyle: {
              fontSize:30,
              fontWeight: 'bold',
              textShadowOffset:{width:3, height:3},
      textShadowColor:"#000", 
      textShadowRadius:4,
            },}}
        component={Volume} />
      <Stack.Screen name="CaboTv" 
         options={{
           title:"TV a Cabo",
          headerStyle:{
            backgroundColor:"#162331",
            },
          headerTitleAlign:'center',
          headerTintColor:'#fff',
          headerTitleStyle: {
              fontSize:30,
              fontWeight: 'bold',
              textShadowOffset:{width:3, height:3},
      textShadowColor:"#000", 
      textShadowRadius:4,
            },}}
        component={TvCabo} />
   
</Stack.Navigator>

  )
}

export default tvStacknavigator;
