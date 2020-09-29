import React, { Component } from 'react';
import {ImageBackground, View, Image, SafeAreaView, TouchableOpacity, ScrollView, Text} from 'react-native';
import {imageStyle} from '../../styles/imageStyle';
import {stylesEmail, masterStyle} from '../../styles/style';
import {css_master} from "../../styles/css";

class email extends Component {
render(){
  let {container, header, headerImage, headerText} = masterStyle;
  let {voltarBtn, card, cardText, imgBg, textImg} = stylesEmail;   
  let {headerEmail, celular_bg,email_01, email_02, email_03, email_04, email_05,
    email_06, email_07, email_08, email_09, email_10, email_11, email_12,
  } = imageStyle;
  return (
<>
 <ImageBackground source={celular_bg} style={imgBg}>
    <SafeAreaView>
      <ScrollView>
      <View style={css_master.container}>
        <TouchableOpacity style={css_master.bannerHeader}>
          <Image source={imageStyle.bannerImg} style={css_master.bannerImage}/>
        </TouchableOpacity>
        </View>
        <View style={{...container, width:"99%"}}>
          <View style={header}>
            <Image source={headerEmail} style={headerImage}/>
            <Text style={headerText}>
            Como utilizar o serviço de E-mail
            </Text>
          </View>
          {/* Fim da view Header */}
          <View style={container}>
          <TouchableOpacity style={card} onPress={() => this.props.navigation.navigate('Criar')}>
          <Text style={cardText}>Como criar uma conta de E-mail</Text>
          </TouchableOpacity>
    
          <TouchableOpacity style={card}
          onPress={()=>this.props.navigation.navigate('EnviarEmail')}>
          <Text style={cardText}>Como enviar um E-mail</Text>
          </TouchableOpacity>          
            <TouchableOpacity style={css_master.button} onPress={()=> this.props.navigation.goBack()}>
            <Image source={imageStyle.sobreImg} style={css_master.buttonImage}/>
            <Text style={css_master.buttonText}>Voltar</Text>
    </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
      </SafeAreaView>
 </ImageBackground>
</>
  );
    }
};
export default email;