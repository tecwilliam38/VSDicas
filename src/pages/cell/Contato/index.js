import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import {imageStyle} from "../../styles/imageStyle";
import {stylesApp} from '../../styles/style';

class Contato extends Component {
  render(){
    let {container, header, headerText, headerImage, flexContent,text, imgBg, textImg, voltarBtn} = stylesApp;   
    let {headerWhatsapp, celular_bg, contato_01, contato_02, contato_03, contato_04} = imageStyle;
    return (
      <>

  <ImageBackground source={celular_bg}  style={imgBg}>
  <SafeAreaView>
  <ScrollView>
  <View style={container}>
    
  <View style={header}>  
  <Image source={headerWhatsapp} style={headerImage} resizeMode='cover'/>
  <Text style={headerText}> Como Adicionar um contato</Text>
  </View>

   {/* Fim da class Header */}
  
  <View style={container}>
    <View style={flexContent}>
      <Text style={text}>
      {'\t\t'} Para adicionar um contato no WhatsApp abra o aplicativo. Na tela inicial toque no ícone que fica na parte de 
     baixo da tela, à direita, conforme a imagem abaixo:
      </Text>
      <Image source={contato_01} style={textImg}/>
    </View>
    <View style={flexContent}>
      <Text style={text}>
      {'\t\t'} A seguir toque no ícone ao lado do texto "Novo Contato", veja a imagem abaixo: 
      </Text>
      <Image source={contato_02} style={textImg}/>
    </View>
    <View style={flexContent}>
      <Text style={text}>
      {'\t\t'} Na tela que se abriu digite os dados que você possui do contato que quer adicionar,
     e toque em "Salvar" que fica a direita acima  como na imagem abaixo:   
      </Text>
      <Image source={contato_04} style={textImg}/>
    </View>
    <TouchableOpacity onPress={()=> this.props.navigation.goBack()} style={voltarBtn}>
       <Text style={{color:'#000',padding:15, fontSize:25}}>Voltar</Text>
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
export default Contato;