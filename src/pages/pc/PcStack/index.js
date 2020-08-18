import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import NavigationDrawer from '../../../Component/ToggleDrawer';

// Importação das Rotas
import PcScreen from '../PcScreen/index';


const pcStacknavigator = createStackNavigator({
  home:{
    screen:PcScreen,
    navigationOptions:({navigation}) => ({
        title:'Computador',
        headerRight:() => <NavigationDrawer navigationProps={navigation}/>
    })
    }, //Fim da rota Home
 
})
export default pcStacknavigator;
