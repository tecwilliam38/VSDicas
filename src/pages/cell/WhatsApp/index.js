import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import {imageStyle} from "../../styles/imageStyle";
import {stylesWhatsapp} from '../../styles/style';

class App extends Component {
  render(){
    let {container, header, headerText, headerImage, card, cardText, imgBg, voltarBtn} = stylesWhatsapp;   
    let {headerWhatsapp, celular_bg} = imageStyle;
    return (
      <>

  <ImageBackground source={celular_bg}  style={imgBg}>
  <SafeAreaView>
  <ScrollView>
  <View style={container}>
    
  <View style={header}>  
      <Image source={headerWhatsapp} style={headerImage} resizeMode='stretch'/>
      <Text style={headerText}>
      Aprenda a realizar as funções básicas do WhatsApp
      </Text>
  </View>

   {/* Fim da class Header */}
  
  <View style={container}>
    <TouchableOpacity style={card} onPress={() => this.props.navigation.navigate('Contato')}>
    <Text style={cardText}>Como adicionar um contato</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={card}
    onPress={()=>this.props.navigation.navigate('GrupoWhatsApp')}>
    <Text style={cardText}>Como criar um grupo no WhatsApp</Text>
    </TouchableOpacity>

    <TouchableOpacity style={card}
    onPress={()=>this.props.navigation.navigate('Texto')}>
    <Text style={cardText}>Como enviar uma mensagem de texto</Text>
    </TouchableOpacity>

    <TouchableOpacity style={card}
    onPress={()=>this.props.navigation.navigate('Audio')}>
    <Text style={cardText}>Como enviar um áudio</Text>
    </TouchableOpacity>

    <TouchableOpacity style={card}
    onPress={()=>this.props.navigation.navigate('Chamada')}>
    <Text style={cardText}>Como fazer uma chamada</Text>
    </TouchableOpacity>

  
     
     <TouchableOpacity onPress={()=> this.props.navigation.navigate('Celular')} style={voltarBtn}>
       <Text style={{color:'#000',padding:15, fontSize:25, fontWeight:"bold"}}>Voltar</Text>
     </TouchableOpacity>
     
     
     </View>
     </View>
     {/*Fim da classe Container */}
   </ScrollView>
  </SafeAreaView>
  </ImageBackground>  
  
</>
  );
}
}
export default App;