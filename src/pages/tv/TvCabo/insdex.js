import React,{Component} from 'react';
import { View, Text, ImageBackground, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import {masterStyle} from "../../styles/style";
import {imageStyle} from "../../styles/imageStyle";

class TvCabo extends Component{
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
            Sintonizar a Tv a Cabo
        </Text>
        </View>

        <View style={container}>

          <View style={flexContent}>
            <Text style={cardText}>
            {'\t\t'}
            Página em Construção
            </Text>
            <Image source={tvCard} style={headerImage}/>
          </View>
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
export default TvCabo;
