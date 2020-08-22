import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView} from "react-native";
import {PcStyle} from "../../styles/style";
import {imageStyle} from "../../styles/imageStyle";


class Programas extends Component {
    render() {
        let{container, header, headerText, headerImage, text, flexContent, textImg, border_Radius_Image, voltarBtn} = PcStyle;
        let{headerPc, prgimg_01, prgimg_02, prgimg_03, prgimg_04}=imageStyle;
        return (
            <>
            <SafeAreaView>
                <ScrollView>
                    <View style={container}>
                        <View style={header}>
                            <Image style={headerImage} source={headerPc}/>
                            <Text style={headerText}>
                                Programas de Computador
                            </Text>
                        </View>                    
                    </View>
                    {/* Fim da header */}
                    <View style={container}>
                        <View style={flexContent}>
                            <Text style={text}>{"\t\t"}Para instalar um programa no Windows, siga os passos abaixo:</Text>
                        </View>
                        <View style={flexContent}>
                            <Text style={text}>{"\t\t"}Abra o navegador, vamos usar o Google Chrome. E pesquisar o programa que 
                            desejamos instalar, no nosso caso eu pesquisei "media player classic", que é um software grátis:</Text>
                            <View style={border_Radius_Image}>
                                <Image style={textImg} source={prgimg_01}/>
                            </View>
                        </View>
                        <View style={flexContent}>
                            <Text style={text}>{"\t\t"}Abra o navegador, vamos usar o Google Chrome. E pesquisar o programa que 
                            desejamos instalar:</Text>
                            <View style={border_Radius_Image}>
                                <Image style={textImg} source={prgimg_02}/>
                            </View>
                        </View>
                        <View style={flexContent}>
                            <Text style={text}>{"\t\t"}Abra o navegador, vamos usar o Google Chrome. E pesquisar o programa que 
                            desejamos instalar:</Text>
                            <View style={border_Radius_Image}>
                                <Image style={textImg} source={prgimg_03}/>
                            </View>
                        </View>

                        <TouchableOpacity onPress={()=> this.props.navigation.goBack()} style={voltarBtn}>
                          <Text style={{color:'#000',padding:15, fontSize:25}}>Voltar</Text>
                        </TouchableOpacity>


                    </View>
                </ScrollView>
            </SafeAreaView>               
            </>
        );
    }
}

export default Programas;
