import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  } from 'react-native';
import {masterStyle} from "../../styles/style";
import {imageStyle} from "../../styles/imageStyle";
import {css_master} from "../../styles/css";

class TvScreen extends Component{
    render(){
        let {imgBg, header, headerImage, headerText, container, card, cardText,cardImage, voltarBtn} = masterStyle;
        let {tv_bg, headerTv } = imageStyle;
    return(
        <>
        <SafeAreaView>
            <ScrollView>
            <View style={css_master.container}>
        <TouchableOpacity style={css_master.bannerHeader}>
          <Image source={imageStyle.bannerImg} style={css_master.bannerImage}/>
          <Text style={css_master.bannerText}>Smart Tv</Text>
        </TouchableOpacity>
        </View>
                {/* <View style={container}>
                    <View style={header}>
                        <Image source={headerTv} style={headerImage}/>
                        <Text style={headerText}>Como usar as Smart Tv's</Text>
                    </View>
                </View> */}
                {/* Links de menu */}
        <View style={{...container, backgroundColor:"transparent", marginVertical:10}}>
          <TouchableOpacity style={card}
          onPress={() => this.props.navigation.navigate('Canais')}>
          <Text style={cardText}>Canais</Text>
          </TouchableOpacity>

          <TouchableOpacity style={card}
          onPress={() => this.props.navigation.navigate('Volume')}>
          <Text style={cardText}>Volume</Text>
          </TouchableOpacity>

          <TouchableOpacity style={card}
          onPress={() => this.props.navigation.navigate('CaboTv')}>
          <Text style={cardText}>Tv a Cabo</Text>
          </TouchableOpacity>   
          <TouchableOpacity style={css_master.button} onPress={()=> this.props.navigation.goBack()}>
                    <Image source={imageStyle.sobreImg} style={css_master.buttonImage}/>
                    <Text style={css_master.buttonText}>Voltar</Text>
                </TouchableOpacity>   

            </View>
            </ScrollView>
        </SafeAreaView>        
    </>
        );
}
}
export default TvScreen;