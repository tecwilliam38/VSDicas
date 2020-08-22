import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import {imageStyle} from "../../styles/imageStyle";
import {stylesWhatsapp} from '../../styles/style';


class Grupo extends Component {
  render(){  
  let {imgBg, container, header, headerImage, headerText,text, flexContent, textImg, border_Radius_Image, voltarBtn } = stylesWhatsapp;
  let {celular_bg, headerWhatsapp, grupo_01,grupo_02, grupo_03, grupo_04, grupo_05, grupo_06, grupo_07} = imageStyle;
  
  return (
    <>
      <ImageBackground source={celular_bg}  style={imgBg}>
      <SafeAreaView>
        <ScrollView>
        <View style={container}>
        <View style={header}>
              <Image style={headerImage} source={headerWhatsapp}/>
              <Text style={headerText}>Como criar um grupo no WhatsApp</Text>
            </View>
            {/* Fim da Header */}
            <View style={container}>
            <View style={flexContent}>
                <Text style={text}>
                  {'\t\t'} Para criar um grupo no WhatsApp abra o aplicativo. Na tela inicial toque no ícone que fica na parte de 
                  baixo da tela, à direita, conforme a imagem abaixo:
                </Text>
                <View style={border_Radius_Image}>
                  <Image source={grupo_01} style={textImg}/>
                </View>
              </View>
              <View style={flexContent}>
                <Text style={text}>
                  {'\t\t'} Agora toque nos contatos que você quer incluir no seu grupo.{'\n\t\t'}
                  Lembre-se que as pessoas devem saber que irão fazer parte de um grupo que você criou, senão
                   eles vão sair do grupo assim que for criado.
                </Text>
                <View style={border_Radius_Image}>
                  <Image source={grupo_02} style={textImg}/>
                </View>
              </View>
              <View style={flexContent}>
                <Text style={text}>
                  {'\t\t'} Aqui você escolhe o nome do grupo
                </Text>
                <View style={border_Radius_Image}>
                  <Image source={grupo_03} style={textImg}/>
                </View>
              </View>
              <View style={flexContent}>
                <Text style={text}>
                  {'\t\t'} E aqui se você quiser escolha uma imagem ou foto para o grupo.
                </Text>
                <View style={border_Radius_Image}>
                  <Image source={grupo_04} style={textImg}/>
                </View>
              </View>
              <View style={flexContent}>
                <Text style={text}>
                  {'\t\t'} Você pode escolher uma foto da sua galeria, pode tirar uma foto na hora ou pesquisar.
                  {'\n\t\t'}No nosso exemplo vamos escolher uma foto da galeria.
                </Text>
                <View style={{flex:1, flexDirection:"row", height:340, marginBottom:15}}>
                <View style={{...border_Radius_Image,}}>
                  <Image source={grupo_05} style={textImg}/>
                </View>
                <View style={{...border_Radius_Image, marginLeft:25}}>
                  <Image source={grupo_06} style={textImg}/>
                </View>
                </View>
              </View>
              <View style={flexContent}>
                <Text style={text}>
                  {'\t\t'}Depois ajeite o tamanho da imagem e toque em "concluído".
                </Text>
                <View style={border_Radius_Image}>
                  <Image source={grupo_07} style={textImg}/>
                </View>
              </View>
              <View style={flexContent}>
                <Text style={text}>
                  {'\t\t'}Parabéns, seu grupo do WhatsApp foi criado, agora é só compartilhar com seus amigos.
                </Text>                
              </View>
              <TouchableOpacity onPress={()=> this.props.navigation.goBack()} style={voltarBtn}>
                <Text style={{color:'#000',padding:15, fontSize:25}}>Voltar</Text>
              </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
      </SafeAreaView>      
      </ImageBackground>
    </>

  );
}
}
 export default Grupo;
