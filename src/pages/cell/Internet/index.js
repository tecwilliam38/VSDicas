import React, { Component } from 'react';
import {ImageBackground, View, Image, Text, SafeAreaView, ScrollView} from 'react-native';
import styles from '../../Styles/master';
import Styles from '../App/style';
import {IMAGE} from '../../Assets/imagens';

class Internet extends Component {
  render(){
  let {container, textMenu, text, flexContent, imgBg, textImg } = styles;
  let{menuImage, header, headerText,} = Styles;
  return (
    <>
  <ImageBackground source={require('../../Assets/celular.jpg')}  style={imgBg}>
  <SafeAreaView><ScrollView>
  <View style={container}>
    <View style={header}>
    <Image source={IMAGE.fundo_menu_internet} style={menuImage} resizeMode='cover'/>
     <Text style={headerText}> Como usar a internet celular</Text>
     </View>
     <View style={textMenu}>
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
export default Internet;