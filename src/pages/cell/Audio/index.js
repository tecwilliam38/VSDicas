import React, { Component } from 'react';
import {ImageBackground, View, Image, Text, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {imageStyle} from "../../styles/imageStyle";
import {masterStyle, stylesApp} from '../../styles/style';

class Audio extends Component {
render(){
  let{container, header, headerImage, headerText} = masterStyle;
  let{imgBg, flexContent,text, textImg, voltarBtn} = stylesApp;
  let {headerAudio, celular_bg, audio_01, audio_02, audio_03, audio_04} = imageStyle;
  return (
    <>

  <ImageBackground source={celular_bg}  style={imgBg}>
  <SafeAreaView>
   <ScrollView>
  <View style={container}>
    <View style={header}>
      <Image source={headerAudio} style={headerImage}/>
      <Text style={headerText}>Como enviar uma mensagem de Áudio no WhatsApp</Text>
    </View>
    {/* Fim da classe Header */}
    <View style={container}>
    <View style={flexContent}>
      <Text style={text}>
        {'\t\t'}Para enviar um áudio pelo WhatsApp o jeito mais comum é o que iremos apresentar.
        Primeiro abra o WhatsApp e abra uma conversa (toque em um contato ou em um grupo).
      </Text>
      <Image source={audio_01} style={textImg} />
    </View>

    <View style={flexContent}>
      <Text style={text}>
        {'\t\t'}Agora localize o ícone verde com um pequeno microfone que fica no canto inferior
        direito na tela.
      </Text>
      <Image source={audio_02} style={textImg} />
    </View>

    <View style={flexContent}>
      <Text style={text}>
        {'\t\t'}O próximo passo é tocar no ícone e manter pressionado, arraste para cima e solte o ícone. Observe que
        agora onde você digitaria uma mensagem está um pequeno contador de tempo, e que o ícone do microfone mudou de forma. Isso significa que você 
        está gravando o áudio para enviar.
      </Text>
      <Image source={audio_03} style={textImg} />
    </View>

    <View style={flexContent}>
      <Text style={text}>
        {'\t\t'}Quando terminar o que tem a gravar (pode ser uma mensagem de mais de um minuto se você quiser),
        toque de novo no botão onde estava o microfone que agora servirá para enviar seu áudio.
      </Text>
      <Image source={audio_04} style={textImg} />
    </View>

    <View style={flexContent}>
      <Text style={text}>
        {'\t\t'}Pronto você aprendeu a enviar um áudio pelo WhatsApp.{'\n'}</Text>
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
export default Audio;