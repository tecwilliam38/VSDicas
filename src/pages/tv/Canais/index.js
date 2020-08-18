import React from 'react';
import { View, Text, ImageBackground, Image, SafeAreaView, ScrollView } from 'react-native';
import styles from '../../Styles/master';


export default function Canais() {
  return (
    <>
    <ImageBackground source={require('../../Assets/tv.jpg')} style={styles.imgBg}>
    <SafeAreaView>
      <ScrollView>      
        <View style={styles.container}>
          <View style={styles.header}>
        <Text style={styles.headerText}>
            Como sintonizar os canais de uma Smart Tv
        </Text>
        </View>

        <View style={styles.textMenu}>

          <View style={styles.flexContent}>
            <Text style={styles.text}>
            {'\t\t'}
            Página em construção
            </Text>
            <Image source={require('../../Assets/celular.jpg')} style={styles.textImg}/>
          </View>

          <View style={styles.flexContent}>
            <Text style={styles.text}>
            {'\t\t'}
            </Text>
            <Image source={require('../../Assets/celular.jpg')} style={styles.textImg}/>
          </View>

          <View style={styles.flexContent}>
            <Text style={styles.text}>
            {'\t\t'}
            </Text>
            <Image source={require('../../Assets/celular.jpg')} style={styles.textImg}/>
          </View>

        </View>
    </View> 
    </ScrollView>
    </SafeAreaView>
    </ImageBackground>
    </>
     );
}
