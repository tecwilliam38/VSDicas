import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CellScreen from "../CellScreen/cellscreen";
import { NavigationContainer } from '@react-navigation/native';
import AppScreen from '../App/index';
import WhatsApp from '../WhatsApp/index';
import Contato from '../Contato/index';
import Facebook from '../Facebook/index';
import email from '../Email/index';
import CriarEmail from "../Email/criar";
import EnviarEmail from "../Email/enviar";
// import Fotos from '../Fotos/index';
// import Camera from '../Camera/index';
//import Grupo from '../Grupo/index';
import Grupo from "../Grupo";
//import chamada from '../Chamada/index';
import Audio from '../Audio/index';
import Instagram from '../Instagram/index';
// import Internet from '../Internet/index'
// import Texto from '../Texto/index';

const Stack = createStackNavigator();

function cellStacknavigator(){
    return(

<Stack.Navigator initialRouteName="Celular">
        <Stack.Screen name="Celular"
        options={{
            headerStyle:{
              backgroundColor:"#2e6c6f",
              },
            headerTitleAlign:'center',
            headerTintColor:'#fff',
            headerTitleStyle: {
                fontSize:30,
                fontWeight: 'bold',
                textShadowOffset:{width:3, height:3},
        textShadowColor:"#000", 
        textShadowRadius:4,
              },
          }
          }
        component={CellScreen}/>
        
        <Stack.Screen name="E-mail"
        component={email}
         options={{
            headerStyle:{
              backgroundColor:"#825c23",
              },
            headerTitleAlign:'center',
            headerTintColor:'#fff',
            headerTitleStyle: {
                fontSize:30,
                fontWeight: 'bold',
                textShadowOffset:{width:3, height:3},
        textShadowColor:"#000", 
        textShadowRadius:4,}
        ,}}/>

        <Stack.Screen name="App"
         options={{
            headerStyle:{
              backgroundColor:"#024752",
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
         component={AppScreen} />
         
        {/* WhatsApp Group */}
        <Stack.Screen name="WhatsApp"
         options={{
          headerStyle:{
            backgroundColor:"#12211b",
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
        component={WhatsApp} />
         <Stack.Screen name="Audio"
        component={Audio}
         options={{
          headerStyle:{
            backgroundColor:"#ad8a0d",
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
         />


        <Stack.Screen name="Facebook" 
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
        component={Facebook} />
         <Stack.Screen name="Instagram" 
         options={{
          headerStyle:{
            backgroundColor:"#734124",
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
        component={Instagram} />
        <Stack.Screen name="Contato" 
         options={{
           headerStyle:{
            backgroundColor:"#2e6c6f",
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
        component={Contato} />

  <Stack.Screen 
         name="Criar" 
         component={CriarEmail}
         options={{
           title:"Criar um E-mail",
          headerStyle:{
            backgroundColor:"#856835",
            },
          headerTitleAlign:'center',
          headerTintColor:'#fff',
          headerTitleStyle: {
              fontSize:30,
              fontWeight: 'bold',
              textShadowOffset:{width:1, height:3},
      textShadowColor:"#000", 
      textShadowRadius:6,
            },}}
         />
        <Stack.Screen name="EnviarEmail" 
         options={{
          title:"Enviar um E-mail",
          headerStyle:{
            backgroundColor:"#856835",
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
        component={EnviarEmail} />

        {/* Grupo WhatsApp */}
        <Stack.Screen name="GrupoWhatsApp" 
         options={{
          title:"Grupo",
          headerStyle:{
            backgroundColor:"#12211b",
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
        component={Grupo} />
</Stack.Navigator>

    )
}

export default cellStacknavigator;