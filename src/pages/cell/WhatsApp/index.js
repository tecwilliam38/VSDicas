import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import {imageStyle} from "../../styles/imageStyle";
import {stylesWhatsapp, masterStyle} from '../../styles/style';
import {css_master} from "../../styles/css";

class App extends Component {
  render(){
    let {container, header, headerImage, headerText} = masterStyle;
    let {card, cardText, imgBg, voltarBtn} = stylesWhatsapp;   
    let {headerWhatsapp, celular_bg} = imageStyle;
    return (
      <>

  <ImageBackground source={celular_bg}  style={imgBg}>
  <SafeAreaView>
  <ScrollView>
  <View style={css_master.container}>
        <TouchableOpacity style={css_master.bannerHeader}>
          <Image source={imageStyle.bannerImg} style={css_master.bannerImage}/>
        </TouchableOpacity>
        </View>
  <View style={container}>    
  <View style={header}>  
      <Image source={headerWhatsapp} style={headerImage}/>
      <Text style={{...headerText, fontSize:27, padding:8}}>
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
     <TouchableOpacity style={css_master.button} onPress={()=> this.props.navigation.goBack()}>
            <Image source={imageStyle.sobreImg} style={css_master.buttonImage}/>
            <Text style={css_master.buttonText}>Voltar</Text>
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