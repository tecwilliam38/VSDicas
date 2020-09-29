import React, {Component} from 'react';
import { View, Text, ImageBackground, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import {masterStyle} from "../../styles/style";
import {imageStyle} from "../../styles/imageStyle";



class Volume extends Component{
  render(){
  let {container, header, headerText, headerImage, flexContent, imgBg, cardText, voltarBtn} = masterStyle;
  let {headerTv, tv_bg, tvCard} = imageStyle;
  return (
    <>
    <ImageBackground source={tv_bg} style={imgBg}>
    <SafeAreaView>
      <ScrollView>      
        <View style={container}>
          <View style={header}>
            <Image source={headerTv} style={headerImage}/>
        <Text style={headerText}>
            Como Ajustar o volume da Tv
        </Text>
        </View>

        <View style={container}>

        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Smart Tv')} style={voltarBtn}>
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
export default Volume;