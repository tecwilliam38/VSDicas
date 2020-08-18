import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, SafeAreaView, ScrollView } from 'react-native';
import styles from '../../Styles/master';


export default function Texto() {
  return (
    <>
    <ImageBackground source={require('../../Assets/celular.jpg')} style={styles.imgBg}><SafeAreaView><ScrollView>
    <View style={styles.container}>
    <View style={styles.header}>
        <Text style={styles.headerText}>Como enviar uma mensagem de texto no WhatsApp</Text>
    </View>
    <View style={styles.textMenu}>

        <View style={styles.flexContent}>
        <Text style={styles.text}>{'\t\t'} 
        {'\t\t'}
        Para enviar uma mensagem de texto abra uma conversa com um contato ou em um grupo.
        </Text>
        <Image source={require('../../Assets/WhatsApp/msgtxt01.png')} style={styles.textImg}/>
        </View>

        <View style={styles.flexContent}>
        <Text style={styles.text}>{'\t\t'} 
        Agora toque no campo "Digite uma...", que fica no meio da tela na parte de baixo:
        </Text>
        <Image source={require('../../Assets/WhatsApp/msgtxt02.png')} style={styles.textImg}/>
        </View>

        
        <View style={styles.flexContent}>
        <Text style={styles.text}>{'\t\t'} 
        Agora é só digitar o texto que você quer enviar e tocar em enviar.
        como na imagem abaixo:
        </Text>
        <Image source={require('../../Assets/WhatsApp/msgtxt04.png')} style={styles.textImg}/>
        </View>

        <View style={styles.flexContent}>
        <Text style={styles.text}>{'\t\t'} 
        Parabéns, você acabou de enviar uma mensagem de texto no WhatsApp.
        {'\n\n'}
        </Text>
        </View>
    
    </View>{/*Fim do textMenu */}

    </View>
    </ScrollView></SafeAreaView></ImageBackground></>
  );
}
