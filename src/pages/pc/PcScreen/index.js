import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  } from 'react-native';
  import {imageStyle} from "../../styles/imageStyle";
  import {PcStyle} from '../../styles/style';

class PcScreen extends Component{
    render(){
let {imgBg, container, header, headerImage, headerText, card, cardImage, cardText, cardParagraph } = PcStyle;
let {headerPc, pc_bg} =imageStyle;
    return(
        <>
        <ImageBackground source={pc_bg} style={imgBg}>
        <SafeAreaView>
            <ScrollView>
            <View style={container}>
                <View style={header}>  
                    <Image source={headerPc} style={headerImage}/>
                    <Text style={headerText}>
                    Como utilizar as funções básicas de um Computador
                    </Text>
                </View>
                {/* Fim da Header */}
                <View style={container}>
                <TouchableOpacity style={card} onPress={() => this.props.navigation.navigate('Programas')}>
                <Text style={cardText}>
                Instalar ou desintalar programas
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={card} onPress={() => this.props.navigation.navigate('Impressora')}>
                <Text style={cardText}>
                Impressora
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={card} onPress={() => this.props.navigation.navigate('Impressora')}>
                <Text style={cardText}>
                Internet
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={card} onPress={() => this.props.navigation.navigate('Impressora')}>
                <Text style={cardText}>
                Vídeos e Fotos
                </Text>
                </TouchableOpacity>




                </View>
         

            </View>
            </ScrollView>
        </SafeAreaView>
        </ImageBackground>
    </>
        );
}
}
export default PcScreen;