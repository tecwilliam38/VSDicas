import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, SafeAreaView, ScrollView } from 'react-native';
import styles from '../../Styles/master';


// import { Container } from './styles';

export default function Grupo() {
  return (
    <>
  <ImageBackground source={require('../../Assets/celular.jpg')}  style={styles.imgBg}>
  <SafeAreaView>
  <ScrollView>
  <View style={styles.container}>
    <View style={styles.header}>
     <Text style={styles.headerText}>Como criar um grupo no WhatsApp</Text>
     </View>
     {/* Fim da class Header */}     
     <View style={styles.textMenu}>
     
     <View style={styles.flexContent}>
     <Text style={styles.text}>
     {'\t\t'}Para adicionar um grupo no WhatsApp abra o aplicativo. Na tela inicial toque no ícone que fica na parte de 
     baixo da tela, à direita, conforme a imagem abaixo:
     </Text>
     <Image source={require('../../Assets/WhatsApp/contato01.png')} style={styles.textImg}/>
     </View>

     <View style={styles.flexContent}>
     <Text style={styles.text}>
     {'\t\t'} A seguir toque no ícone ao lado do texto "Novo Grupo", veja a imagem abaixo: 
     </Text>
     <Image source={require('../../Assets/WhatsApp/grupo02.png')} style={styles.textImg}/>
     </View>

     <View style={styles.flexContent}>
     <Text style={styles.text}>
     {'\t\t'} A seguir toque nos contatos que você deseja adicionar ao seu grupo conforme a imagem abaixo:
     </Text>
     <Image source={require('../../Assets/WhatsApp/grupo03.png')} style={styles.textImg}/>
     </View>

     <View style={styles.flexContent}>
     <Text style={styles.text}>
     {'\t\t'} Na próxima tela, digite o nome que você dará ao grupo. Pode ser qualquer palavra, mas não esqueça que
      o nome tem que ter relação com o assunto que será discutido no grupo.
     </Text>
     <Image source={require('../../Assets/WhatsApp/grupo04.png')} style={styles.textImg}/>
     </View>

     <View style={styles.flexContent}>
     <Text style={styles.text}>
     {'\t\t'}Ainda nessa tela, você pode adicionar uma 
      imagem para simbolizar o grupo. Para isso, toque no ícone com o desenho de uma câmera, a esquerda de onde 
      você digitou o nome do grupo.
     </Text>
     <Image source={require('../../Assets/WhatsApp/grupo05.png')} style={styles.textImg}/>
     </View>
     <View style={styles.flexContent}>
     <Text style={styles.text}>
     {'\t\t'}Se você clicou na imagem da câmera, para adicionar uma imagem do grupo, escolha
     onde está sua imagem: "Galeria" (Que é na memória do celular),  "Câmera" (Que é para tirar uma nova Foto) ou "Buscar na Internet" (Que será na internet,
     mas para isso você precisa ter internet no celular) como na imagem abaixo:
     </Text>
     <Image source={require('../../Assets/WhatsApp/grupo06.png')} style={styles.textImg}/>
     </View>


     </View>
    </View>
    {/* Fim da Class Contanier */}     
    </ScrollView>
    </SafeAreaView>  
  </ImageBackground>  
  
</>

  );
}
