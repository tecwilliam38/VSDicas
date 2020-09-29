import React, { Component } from 'react';
import {ImageBackground, View, Image, Text, SafeAreaView, ScrollView} from 'react-native';
import {masterStyle, stylesApp} from "../../styles/style";
import {imageStyle} from "../../styles/imageStyle";
class Camera extends Component{
  render(){
  let{container, header, headerText, headerImage} = masterStyle; 
  let {textMenu, text, flexContent, imgBg, textImg } = stylesApp;
  let{menuImage, header, headerText,} = imageStyle;
  return (
    <>
    <ImageBackground source={require('../../Assets/celular.jpg')}  style={imgBg}>
    <SafeAreaView><ScrollView>
  <View style={container}>
    <View style={header}>
    <Image source={IMAGE.fundo_menu_camera} style={menuImage} resizeMode='cover'/>
     <Text style={headerText}> Como usar a camera do celular</Text>
     </View>

     <View style={textMenu}>

       <View style={flexContent}>
         <Text style={text}>
           {'\t\t'}Página em construção
         </Text>
         <Image source={require('../../Assets/desktopPlaystore.png')} style={textImg}/>
       </View>

       <View style={flexContent}>
         <Text style={text}>
           {'\t\t'}
         </Text>
         <Image source={require('../../Assets/desktopPlaystore.png')} style={textImg}/>
       </View>

       <View style={flexContent}>
         <Text style={text}>
           {'\t\t'}
         </Text>
         <Image source={require('../../Assets/desktopPlaystore.png')} style={textImg}/>
       </View>

     </View>
    </View>  
    </ScrollView></SafeAreaView>
  </ImageBackground>
  
</>
  );
  }
 };

 export default Camera;