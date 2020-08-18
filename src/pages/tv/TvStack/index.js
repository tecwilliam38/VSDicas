import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import NavigationDrawer from '../../../Component/ToggleDrawer';

// Importação das Rotas
import TvScreen from '../TvScreen/index';
import Canais from '../Canais/index';
import Volume from '../Volume/index';
import TvCabo from '../TvCabo/insdex';

const Stack = createStackNavigator()

function tvStacknavigator(){
  return(

<Stack.Navigator initialRouteName="Celular">
      <Stack.Screen name="Smart Tv"  component={TvScreen}/>
      <Stack.Screen name="Canais" component={Canais} />
      {/* WhatsApp Group */}
      <Stack.Screen name="WhatsApp" component={WhatsApp} />
      <Stack.Screen name="Volume" component={Volume} />
      <Stack.Screen name="Tv a Cabo" component={TvCabo} />
</Stack.Navigator>

  )
}

export default tvStacknavigator;
