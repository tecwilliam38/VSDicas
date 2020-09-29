import React, { Component } from 'react';

import { View, Text, SafeAreaView, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import {imageStyle} from "../../styles/imageStyle";
import { homeStyle } from '../../styles/style';
import {stylesApp} from '../../styles/style';
import {css_master} from "../../styles/css";

export default class HomeSobre extends Component {
  render() {
    let {container, voltarBtn, flexContent,text, imgBg, textImg} = stylesApp;   
    let {bannerHeader,bannerImage, bannerText} = homeStyle;
    let {bannerImg, sobreBg, desktop_play, playstore, playstoreBuscar, PlayStoreSrc} = imageStyle;
    return (
    <>
    <ImageBackground source={sobreBg} style={imgBg}>
    <SafeAreaView><ScrollView>
    <View style={container}>
    <TouchableOpacity style={bannerHeader}>
          <Image source={bannerImg} style={bannerImage}/>
    </TouchableOpacity>
    <Text style={bannerText}>Sobre o Vs Dicas</Text>
    </View>

        <View style={container}>
            <View style={flexContent}>
                <Text style={text}>
                    {'\t\t'}
                    Olá! Esse aplicativo está em fase de desenvolvimento. Meu objetivo primário é ajudar pessoas.
                    Não tenho interesse monetário ao desenvolvê-lo.{'\n\t'} Contudo cabe ressaltar que há custos
                    para sua elaboração e publicação. Eu tenho despesas e preciso de apoio para continuar a aprimorá-lo. 
                    Aqui deixo meu sincero voto de que o aplicativo possa ajudá-lo, ou ajudá-la, a fazer bom uso da tecnologia no seu dia-a-dia.
                    E caso queira contribuir com alguma quantia (eu fico grato com até R$ 10,00) em dinheiro, deixo os números de 
                    duas contas bancárias:{'\n'}
                    </Text>
                    </View>
                    <View style={flexContent}>
                <Text style={text}>
                    Banco Bradesco:{'\n'} Agência: 7044 dig 0 {'\n'}Conta 0027154 dig 3{'\n\n'}
                    E banco Santander:{'\n'} Agência: 3306 {'\n'}Conta 01009770 dig 8
                    </Text>
            </View>
    <TouchableOpacity onPress={()=> this.props.navigation.goBack()} style={css_master.button}>
    <Image style={css_master.buttonImage} source={imageStyle.sobreImg}/>
       <Text style={css_master.buttonText}>Voltar</Text>
     </TouchableOpacity>
        
    </View>    
    </ScrollView>
    </SafeAreaView>
    </ImageBackground>
    </>    
    );
  }
}
