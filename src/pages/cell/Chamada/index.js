import React, { Component } from 'react';
import {ImageBackground, View, SafeAreaView, ScrollView, Image, Text} from 'react-native';
import {masterStyle, stylesWhatsapp} from "../../styles/style";
import {imageStyle} from "../../styles/imageStyle";

class chamada extends Component {
render(){
  return (
    <>
  <ImageBackground source={require('../../Assets/celular.jpg')}  style={styles.imgBg}>
    <SafeAreaView><ScrollView>
  <View style={styles.container}>
    <View style={styles.header}>
     <Text style={styles.headerText}> Como realizar uma chamada pelo WhatsApp</Text>
     </View>
     <View style={styles.textMenu}>
       <View style={styles.flexContent}>
         <Text style={styles.text}>
           {'\t\t'}
           Para realizar uma chamada nnormal pelo WhatsApp, abra o app(Aplicativo, que no caso é
           o WhatsApp):</Text>
         <Image source={require('../../Assets/WhatsApp/chamada/chamada01.png')} style={styles.textImg}/>
       </View>

       <View style={styles.flexContent}>
         <Text style={styles.text}>
           {'\t\t'}
           Na parte de cima à direita toque em "CHAMAD...", que é a área de chamadas do 
           WhatsApp.
         </Text>
         <Image source={require('../../Assets/WhatsApp/chamada/chamada02.png')} style={styles.textImg}/>
       </View>

        <View style={styles.flexContent}>
         <Text style={styles.text}>
           {'\t\t'}
           Agora toque no ícone verde com um telefone, na parte de baixo a direita:
         </Text>
         <Image source={require('../../Assets/WhatsApp/chamada/chamada03.png')} style={styles.textImg}/>
       </View>    

        <View style={styles.flexContent}>
         <Text style={styles.text}>
           {'\t\t'}
           Agora escolha o contato que você quer fazer a chamada e toque no ícone do
           telefone conforme a imagem abaixo.
         </Text>
         <Image source={require('../../Assets/WhatsApp/chamada/chamada04.png')} style={styles.textImg}/>
       </View>

       
       <View style={styles.flexContent}>
         <Text style={styles.text}>
           {'\t\t'}
          Pronto, voce acabou de fazer uma ligação (chamadad) pelo WhatsApp.
          </Text>
         <Image source={require('../../Assets/WhatsApp/chamada/chamada05.png')} style={styles.textImg}/>
       </View>

       <View style={styles.flexContent}>
         <Text style={styles.text}>
           {'\t\t'}
          Porém há alguns pontos a serem considerados: {'\n'}
          1 - Chamadas feitas pelo WhatsApp, consomem dados, ou seja, você precisa de um pacote de
          dados ativo, ou estar conectado a uma rede WiFi para fazer as ligações. {'\n'}
          2 - Além das chamadas de áudio, o WhatsApp também pode realizar chamadas de
          vídeo, para isso basta que você toque no ícone de uma câmera ao lado do nome do
          contato, ao invés de tocar no ícone de telefone.
          </Text>
         </View>
    
     </View>
    </View>  
    </ScrollView></SafeAreaView>
  </ImageBackground>  
</>
  );
    }
};
export default chamada;