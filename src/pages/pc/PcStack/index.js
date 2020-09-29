import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PcScreen from "../PcScreen";
import Impressora from "../Impressora";
import Programas from "../Programas";


const Stack = createStackNavigator();

function PcStackNavigator(){
    return(

<Stack.Navigator initialRouteName="PcScreen" screenOptions={{headerShown:false}}>
        <Stack.Screen name="PcScreen"
        options={{
            title:"Computador",
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
        component={PcScreen}/>
                <Stack.Screen name="Impressora"
        options={{
            title:"Impressora",
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
        component={Impressora}/>

<Stack.Screen name="Programas"
        options={{
            title:"SoftWares",
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
        component={Programas}/>
        
</Stack.Navigator>

    )
}

export default PcStackNavigator;