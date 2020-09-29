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
  import {css_master} from "../../styles/css";

class PcScreen extends Component{
    render(){
let {imgBg, container, header, headerImage, headerText, card, cardImage, cardText, cardParagraph } = PcStyle;
let {headerPc, pc_bg} =imageStyle;
    return(
        <>        
        <SafeAreaView>
            <ScrollView>
            <View style={css_master.container}>
        <TouchableOpacity style={css_master.bannerHeader}>
          <Image source={imageStyle.bannerImg} style={css_master.bannerImage}/>
          <Text style={css_master.bannerText}>Computador</Text>
        </TouchableOpacity>
        </View>
            {/* <View style={container}>
                <View style={header}>  
                    <Image source={headerPc} style={headerImage}/>
                    <Text style={headerText}>
                    Como utilizar as funções básicas de um Computador
                    </Text>
                </View> */}
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
                <TouchableOpacity style={css_master.button} onPress={()=> this.props.navigation.goBack()}>
                    <Image source={imageStyle.sobreImg} style={css_master.buttonImage}/>
                    <Text style={css_master.buttonText}>Voltar</Text>
                </TouchableOpacity>

                {/* </View> */}
         

            </View>
            </ScrollView>
        </SafeAreaView>
    </>
        );
}
}
export default PcScreen;