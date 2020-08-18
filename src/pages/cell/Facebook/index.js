import React, { Component } from 'react';
import {ImageBackground, View, Image, SafeAreaView, ScrollView, Text, TouchableOpacity} from 'react-native';
import {stylesFacebook} from '../../styles/style';
import {imageStyle} from "../../styles/imageStyle";

class Facebook extends Component {
  render(){
    let {container, voltarBtn, header, headerText, headerImage, flexContent,text, imgBg, textImg} = stylesFacebook;   
    let {headerFacebook,headerEmail, celular_bg, facebook_01, facebook_02, facebook_03,
     facebook_04, facebook_05, facebook_06, facebook_07, facebook_08, facebook_09, facebook_10} = imageStyle;
  return (
  <>
  <ImageBackground source={celular_bg} style={imgBg}>
  <SafeAreaView>
    <ScrollView>
      <View style={container}>
        <View style={header}>
        <Image source={headerFacebook} style={headerImage}resizeMode="stretch" />
        <Text style={headerText}>
        Como criar uma conta no Facebook
        </Text>
        </View>
        {/* Fim da View Header */}
        <View style={container}>
          <View style={flexContent}>
            <Text style={text}>
              {'\t\t'} Para criar uma conta no Facebook, 
              vamos precisar de um e-mail válido (Se você ainda não criou, Toque no botão abaixo).{'\n'}
              </Text>
              <TouchableOpacity style={{...header, width:'99%'}} onPress={() => this.props.navigation.navigate('E-mail')}>
                <Image style={{...headerImage, width:"100%", height:80}} source={headerEmail}/>
                <Text style={{...headerText, position:'absolute'}}>Criar E-mail</Text>
              </TouchableOpacity>
              
          </View>
          <View style={flexContent}>
          <Text style={text}>
              {'\t\t'}Agora com o e-mail pronto abra o menu do celular e toque no App "Facebook", geralmente ele vem instalado
              , mas caso não tenha é só instalar, conforme você já aprendeu com a seção "App". Veja na imagem abaixo o ícone
              do Facebook:
            </Text>
            <Image source={facebook_01} style={textImg}/>
          </View>
          <View style={flexContent}>
            <Text style={text}>{'\t\t'}Na tela que abriu, toque em "Criar nova conta do Facebook":</Text>
            <Image source={facebook_02} style={textImg}/>
          </View>
          <View style={flexContent}>
            <Text style={text}>{'\t\t'}Nessa tela você digita seus dados: Nome e Sobrenome.{'\n'}
            Depois toque em avançar.
            </Text>
            <Image source={facebook_03} style={textImg}/>
          </View>
          <View style={flexContent}>
            <Text style={text}>{'\t\t'}Nessa tela toque na tela e deslize para cima ou para baixo para
            indicar sua data de nascimento. Dia - Mês - Ano. {'\n'}
            Depois toque em avançar.
            </Text>
            <Image source={facebook_04} style={textImg}/>
          </View>
          <View style={flexContent}>
            <Text style={text}>{'\t\t'}Agora escolha seu gênero:</Text>
            <Image source={facebook_05} style={textImg}/>
          </View>
          <View style={flexContent}>
            <Text style={text}>{'\t\t'} Aqui você digita o número do seu celular para registrar no facebook:</Text>
            <Image source={facebook_06} style={textImg}/>
          </View>
          <View style={flexContent}>
          <Text style={text}>{'\t\t'}E aqui você escolhe sua senha, geralmente
             é uma senha de no mínimo 6 digitos entre letras e números, anote em algum lugar para não esquecer.</Text>
            <Image source={facebook_07} style={textImg}/>
          </View>
          <View style={flexContent}>
            <Text style={text}>{'\t\t'}Depois de escolhida a senha ele vai perguntar se você quer
            salvar os dados de cadastro </Text>
            <Image source={facebook_08} style={textImg}/>
          </View>
          <View style={flexContent}>
            <Text style={text}>{'\t\t'}Pronto sua conta está criada, agora, como é seu primeiro acesso
            você vai configurar sua foto de capa, e outros itens. Pra escolher a foto você pode selecionar uma 
            na sua galeria de fotos ou pode tirar uma na hora, é só escolher e clicar no botão que você escolheu:  </Text>
            <Image source={facebook_09} style={textImg}/>
          </View>
          <View style={flexContent}>
            <Text style={text}>{'\t\t'} E aí esta, sua tela inicial do Facebook.{'\n'} Agora você pode adicionar amigos, pesquisar vídeos,
             participar de grupos e postar suas atividades preferidas.</Text>
            <Image source={facebook_10} style={textImg}/>
          </View>
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
export default Facebook;