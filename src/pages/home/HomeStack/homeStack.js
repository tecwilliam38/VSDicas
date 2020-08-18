import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../homescreen';
import HomeSobre from '../HomeSobre/index';
const homeStacknavigator = createStackNavigator({
    home:{
        screen:HomeScreen,
        navigationOptions:({navigation}) => ({
            title:'Bem Vindos',
            headerRight:() => <NavigationDrawer navigationProps={navigation}/>,//Aqui se escolhe a posição do menu
            })
    },
    Sobre:{
        screen:HomeSobre,
        navigationOptions:({navigation}) => ({
            title:'Informações',
            headerRight:() => <NavigationDrawer navigationProps={navigation}/>,//Aqui se escolhe a posição do menu
            })        
    }
})

export default homeStacknavigator;