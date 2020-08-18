import React from 'react';
import {
    ImageBackground,
    View,
    Text,
    Image,
    SafeAreaView,
    ScrollView,
    } from 'react-native';
import styles from '../../Styles/master';

export default function TvCabo() {
  return (
    <>
    <ImageBackground source={require('../../Assets/tv.jpg')} style={styles.imgBg}>
    <SafeAreaView>
      <ScrollView>      
        <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.headerText}>
            Tv a Cabo
        </Text>
        </View>

        <View style={styles.textMenu}>
        <View style={styles.flexContent}>
          <Text style={styles.text}>
          {"\t\t"}Página em Construção
          </Text>
          <Image source={require('../../Assets/tv.jpg')} style={styles.textImg}/>
        </View>

        <View style={styles.flexContent}>
          <Text style={styles.text}>
          {"\t\t"} 
          </Text>
          <Image source={require('../../Assets/tv.jpg')} style={styles.textImg}/>
        </View>

        <View style={styles.flexContent}>
          <Text style={styles.text}>
          {"\t\t"} 
          </Text>
          <Image source={require('../../Assets/tv.jpg')} style={styles.textImg}/>
        </View>


        </View>
    </View> 
    </ScrollView>
    </SafeAreaView>
    </ImageBackground>
    </>
  );
}
