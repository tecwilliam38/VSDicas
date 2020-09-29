import React from 'react';
import { View, Text, ImageBackground, Image,TouchableOpacity,  SafeAreaView, ScrollView } from 'react-native';
import {masterStyle} from "../../styles/style";
import {imageStyle} from "../../styles/imageStyle";

class Canais extends React.Component{
render(){
  let {container, header, headerText, headerImage, imgBg, flexContent, cardText, voltarBtn} = masterStyle;
  let {tv_bg, headerTv} = imageStyle;
  return (
    <>
    <ImageBackground source={tv_bg} style={imgBg}>
    <SafeAreaView>
      <ScrollView>      
        <View style={container}>
          <View style={header}>
        <Text style={headerText}>
            Como sintonizar os canais de uma Smart Tv
        </Text>
        </View>
        </View>

        <View style={container}>

          <View style={flexContent}>
            <Text style={cardText}>
            {'\t\t'}
            Página em construção
            </Text>
            <Image source={headerTv} style={headerImage}/>
        </View>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Smart Tv')} style={voltarBtn}>
            <Text style={{color:'#000',padding:15, fontSize:25}}>Voltar</Text>
        </TouchableOpacity>   
    </View> 
    </ScrollView>
    </SafeAreaView>
    </ImageBackground>
    </>
     );
}
}
export default Canais;
