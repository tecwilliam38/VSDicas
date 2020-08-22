import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import {homeStyle} from '../styles/style';
import {imageStyle} from "../styles/imageStyle";


export default class HomeScreen extends Component {
  render() {
      let {container, header, headerText, headerImage, card, cardText, cardImage, btnSobre, btnImage, btnText} = homeStyle;
      let { headerImg, cellCard, tvCard, pcCard, headerSobre, sobreImg  } = imageStyle;
    return (
      <>
      <SafeAreaView>
      <ScrollView >
      <View style={container}>
        <TouchableOpacity style={header}>
          <Image source={headerSobre} style={headerImage}/>
          <Text style={headerText}>Bem Vindos</Text>    
        </TouchableOpacity>
        </View>
        {/* Corpo da HomeScreen */}
        <View style={container}>
        <TouchableOpacity style={card} onPress={() => this.props.navigation.navigate('Celular')}>
        <Image  style={cardImage} source={cellCard}/>
        <Text style={cardText}>Como usar o celular </Text>
        </TouchableOpacity>
       <TouchableOpacity style={card} onPress={() => this.props.navigation.navigate('Pc')}>
        <Image  style={cardImage} source={pcCard}/>
        <Text style={cardText}>Como usar o computador</Text>
        </TouchableOpacity>
        <TouchableOpacity style={card} onPress={() => this.props.navigation.navigate('Tv')}>
        <Image  style={cardImage} source={tvCard}/>
        <Text style={cardText}>Como usar Smart Tv </Text>
        </TouchableOpacity>
        <TouchableOpacity style={btnSobre} onPress={() => this.props.navigation.navigate('Sobre')}>
        <Image  style={btnImage} source={sobreImg}/>
        <Text style={btnText}>Sobre o VS Dicas
        </Text>
        </TouchableOpacity>
        </View>
    
      </ScrollView>
      </SafeAreaView>
      </>
    )
  }
}