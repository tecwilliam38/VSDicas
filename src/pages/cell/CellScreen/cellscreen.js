import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  } from 'react-native';
import {stylesApp} from "../../styles/style";
import {imageStyle} from "../../styles/imageStyle";


const Separator = () => (
  <View style={stylesApp.separator} />
);


export default class CellScreen extends Component {
  render(){
  let {container, header, headerImage, headerText, card, separator, cardImage, cardText, cardParagraph} = stylesApp;
  let {headerCell, playstore_menu, whatsApp_menu, internet_menu, instagram_menu, email_menu, facebook_menu, fotos_menu,} = imageStyle;
    return (
<>
<SafeAreaView>
<ScrollView>
<View style={container}>
    <TouchableOpacity style={header}>
        <Image source={headerCell} style={headerImage} />
        <Text style={headerText}>
        Aprenda a operar o Celular
        </Text>
    </TouchableOpacity>
</View>
    {/* Página menu celular */}
    <View style={container}>
    <TouchableOpacity style={card} onPress={() => this.props.navigation.navigate('App')}>
                <Image style={cardImage} source={playstore_menu}/>
                <Text style={cardText}>
                Aplicativos
                </Text>
                <Separator/>
                <Text style={cardParagraph}>Como instalar aplicativos no seu celular Android</Text>
    </TouchableOpacity>
    <TouchableOpacity style={card} onPress={() => this.props.navigation.navigate('WhatsApp')}>
                <Image style={cardImage} source={whatsApp_menu}/>
                <Text style={cardText}>
                WhatsApp
                </Text>
                <Separator/>
                <Text style={cardParagraph}>Como utilizar as principais funções do WhatsApp</Text>
    </TouchableOpacity>
    <TouchableOpacity style={card} onPress={() => this.props.navigation.navigate('E-mail')}>
                <Image style={cardImage} source={email_menu}/>
                <Text style={cardText}>
                E-Mail
                </Text>
                <Text style={cardParagraph}>Como criar um conta de E-mail</Text>
    </TouchableOpacity>
    <TouchableOpacity style={card} onPress={() => this.props.navigation.navigate('Facebook')}>
                <Image style={cardImage} source={facebook_menu}/>
                <Text style={cardText}>
                Facebook
                </Text>
                <Text style={cardParagraph}>Como criar uma conta no Facebook</Text>
    </TouchableOpacity>
    <TouchableOpacity style={card} onPress={() => this.props.navigation.navigate('Instagram')}>
                <Image style={cardImage} source={instagram_menu}/>
                <Text style={cardText}>
                Instagram
                </Text>
                <Text style={cardParagraph}>Como criar uma conta no Instagram</Text>
    </TouchableOpacity>
    <TouchableOpacity style={card} onPress={() => this.props.navigation.navigate('App')}>
                <Image style={cardImage} source={internet_menu}/>
                <Text style={cardText}>
                Contatos
                </Text>
                <Text style={cardParagraph}>Como adicionar editar ou excluir contatos na agenda</Text>
    </TouchableOpacity>
    <TouchableOpacity style={card} onPress={() => this.props.navigation.navigate('App')}>
                <Image style={cardImage} source={fotos_menu}/>
                <Text style={cardText}>
                Configurar
                </Text>
                <Text style={cardParagraph}>Como alterar algumas configurações do celular</Text>
    </TouchableOpacity>
</View>      
</ScrollView>
</SafeAreaView>
</>      
    );
  }
}