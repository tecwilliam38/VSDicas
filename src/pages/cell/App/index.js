import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import {imageStyle} from "../../styles/imageStyle";
import {masterStyle ,stylesApp} from '../../styles/style';
import {css_master} from "../../styles/css";

class App extends Component {
 render(){
    let {container, header, headerImage, headerText} = masterStyle;
    let {voltarBtn, flexContent,text, imgBg, textImg, border_Radius_Image} = stylesApp;   
    let {headerPlaystore, celular_bg,app_01, app_02, app_03, app_04, playstore, playstoreBuscar, PlayStoreSrc} = imageStyle;
    return (
      <>
  <ImageBackground source={celular_bg}  style={imgBg}>
  <SafeAreaView>
  <ScrollView>
  <View style={css_master.container}>
        <TouchableOpacity style={css_master.bannerHeader}>
          <Image source={imageStyle.bannerImg} style={css_master.bannerImage}/>
        </TouchableOpacity>
        </View>
  <View style={container}>
  <View style={header}>  
  <Image source={headerPlaystore} style={headerImage}/>
  <Text style={headerText}>
  Como adicionar um Aplicativo no celular Android
  </Text>
  </View>
   {/* Fim da class Header */}  
  <View style={container}>
    <View style={flexContent}>
      <Text style={text}>
      {'\t\t'} Para adicionar um aplicativo em um Celular (Smart Fone) com o sistema Android, 
      procure o ícone da PlayStore:
      </Text>
      <View style={border_Radius_Image}>
      <Image source={app_01} style={textImg}/>
      </View>
    </View>
    
    <View style={flexContent}>
      <Text style={text}>
      {'\t\t'} Depois toque onde está escrito: "Pesquisar apps e jogos"
      </Text>
      <View style={border_Radius_Image}>
      <Image source={app_02} style={textImg} />
      </View>
    </View>
  
    <View style={flexContent}>
      <Text style={text}>
      {'\t\t'} E digite o nome do App(aplicativo) que você quer instalar
          no celular. Por exemplo digite "WhatsApp", que é o App de mensagens mais comum. 
      </Text>
      <View style={border_Radius_Image}>
      <Image source={app_03} style={textImg} />
      </View>
    </View>
    
    <View style={flexContent}>
      <Text style={text}>
      {'\t\t'}Agora toque no ícone da Lupa para fazer a busca.
      </Text>
      <View style={border_Radius_Image}>
      <Image source={app_04} style={textImg} />
      </View>
    </View>
    
     <View style={flexContent}>
      <Text style={text}>
      {'\t\t'} Por fim toque no botão verde que está escrito "Instalar" e seguir as intruções,
      e só esperar a instalação do aplicativo e clicar no ícone que foi criado no seu menu de aplicações do celular.
      </Text>
      </View> 
     
     <TouchableOpacity onPress={()=> this.props.navigation.goBack()} style={css_master.button}>
       <Image style={css_master.buttonImage} source={imageStyle.sobreImg}/>
       <Text style={css_master.buttonText}>Voltar</Text>
     </TouchableOpacity>
     </View>
     </View>
     {/*Fim da classe Container */}
   </ScrollView>
  </SafeAreaView>
  </ImageBackground>
  
</>
  );
}
}
export default App;