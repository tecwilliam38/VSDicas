import React, { Component } from 'react';
import {ImageBackground, View, Image, SafeAreaView, TouchableOpacity, ScrollView, Text} from 'react-native';
import {imageStyle} from '../../styles/imageStyle';
import {stylesEmail} from '../../styles/style';
class email extends Component {
render(){
  let {container, voltarBtn, header, headerText, headerImage, card, cardText, imgBg, textImg} = stylesEmail;   
  let {headerEmail, celular_bg,email_01, email_02, email_03, email_04, email_05,
    email_06, email_07, email_08, email_09, email_10, email_11, email_12,
  } = imageStyle;
  return (
<>
 <ImageBackground source={celular_bg} style={imgBg}>
    <SafeAreaView>
      <ScrollView>
        <View style={container}>
          <View style={header}>
            <Image source={headerEmail} style={headerImage} resizeMode="stretch"/>
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
};
export default email;