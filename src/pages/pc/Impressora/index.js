import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import {imageStyle} from "../../styles/imageStyle";
import {PcStyle} from "../../styles/style";
class Impressora extends Component {
    render(){
        let{container, header, headerImagem, headerText, flexContent, text, textImg, voltarBtn, border_Radius_Image} = PcStyle;
        let{headerImpressora} = imageStyle;
  return (
      <>
    <SafeAreaView>
        <ScrollView>

    <View style={container}>
    <View style={header}>
        <Image source={headerImpressora} style={headerImagem}/>
        <Text style={headerText}>Impressora</Text>
     </View>
{/* Fim da Header */}
    <View style={container}>
        <View style={flexContent}>
            <Text style={{...text, textAlign:"center"}}>
                Como instalar uma impressora:
            </Text>
        </View>
        <View style={flexContent}>
            <Text style={text}>{'\t'}
                No Windows 10 está muito fácil instalar uma impressora ou uma Multi-Funcional, basicamente é 
                só conectar o cabo usb (aquele que vem na impressora) no computador e pronto, o Windows fa´ra a configuração
                automaticamente.
            </Text>
        <View style={border_Radius_Image}>
        <Image source={headerImpressora} style={textImg}/>
        </View>
        </View>

        <TouchableOpacity onPress={()=> this.props.navigation.goBack()} style={voltarBtn}>
          <Text style={{color:'#000',padding:15, fontSize:25}}>Voltar</Text>
        </TouchableOpacity>

    </View>
     </View>
        </ScrollView>
    </SafeAreaView>
    </>
  );
}
}

export default Impressora;
