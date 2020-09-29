import React, { Component } from 'react';
import {ImageBackground, View, Image, SafeAreaView, ScrollView, Text, TouchableOpacity} from 'react-native';
import {stylesFacebook} from '../../styles/style';
import {imageStyle} from "../../styles/imageStyle";
import {css_master} from "../../styles/css";

class Instagram extends Component {
  render(){
    let {container, voltarBtn, header, headerText, headerImage, flexContent,text, imgBg, textImg} = stylesFacebook;
    let{headerInstagram, celular_bg} = imageStyle;
  return (
    <>
  <ImageBackground source={celular_bg}  style={imgBg}>
    <SafeAreaView><ScrollView>
    <View style={css_master.container}>
        <TouchableOpacity style={css_master.bannerHeader}>
          <Image source={imageStyle.bannerImg} style={css_master.bannerImage}/>
        </TouchableOpacity>
        </View>
  <View style={{...container, marginTop:10}}>
    <View style={header}>
    <Image source={headerInstagram} style={headerImage}/>
     <Text style={headerText}> Como criar uma conta no Instagram</Text>
     </View>

     <View style={container}>
       
       <View style={flexContent}>
        <Text style={text}>
        {'\t\t'}Página em construção
        </Text>
        <Image source={headerInstagram} style={textImg}/>
       </View>

       <View style={flexContent}>
        <Text style={text}>
        {'\t\t'}Blasdasdoj sdk sd lsjdçasld sadçljasd lçsjdçjl s sds sdljsa 
        </Text>
        <Image source={headerInstagram} style={textImg}/>
       </View>

       <View style={flexContent}>
        <Text style={text}>
        {'\t\t'}
        </Text>
        <Image source={headerInstagram} style={textImg}/>
       </View>

       <View style={flexContent}>
        <Text style={text}>
        {'\t\t'}
        </Text>
        <Image source={headerInstagram} style={textImg}/>
       </View>
      </View>
    </View>  
    </ScrollView></SafeAreaView>
  </ImageBackground>  
</>
    );
}
};
export default Instagram;
