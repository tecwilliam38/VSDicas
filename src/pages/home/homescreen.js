import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import {css_master} from '../styles/css';
import {imageStyle} from "../styles/imageStyle";


export default class HomeScreen extends Component {
  render() {
      let {container, bannerHeader, bannerImage, card, cardImage, cardText, button, buttonImage, buttonText} = css_master;
      let { headerImg, cellCard, tvCard, pcCard, headerSobre, sobreImg, bannerImg  } = imageStyle;
    return (
      <>
      <SafeAreaView>
      <ScrollView >
      <View style={container}>
        <TouchableOpacity style={bannerHeader}>
          <Image source={bannerImg} style={bannerImage}/>
        </TouchableOpacity>
        </View>
        {/* Corpo da HomeScreen */}
        <View style={container}>
        <TouchableOpacity style={card} onPress={() => this.props.navigation.navigate('Celular')}>
        <Image source={cellCard} style={cardImage}/>
        <Text style={cardText}>Como usar o celular </Text>
        </TouchableOpacity>
       <TouchableOpacity style={card} onPress={() => this.props.navigation.navigate('Pc')}>
        <Image style={cardImage} source={pcCard}/>
        <Text style={cardText}>Como usar o computador</Text>
        </TouchableOpacity>
        <TouchableOpacity style={card} onPress={() => this.props.navigation.navigate('Tv')}>
        <Image style={cardImage} source={tvCard}/>
        <Text style={cardText}>Como usar Smart Tv</Text>
        </TouchableOpacity>        
        <TouchableOpacity style={button} onPress={() => this.props.navigation.navigate('Sobre')}>
        <Image style={buttonImage} source={sobreImg}/>
        <Text style={buttonText}>Sobre o Vs Dicas</Text>
        </TouchableOpacity>
        </View>
    
      </ScrollView>
      </SafeAreaView>
      </>
    )
  }
}