import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  ImageBackground,
  } from 'react-native';
import {masterStyle, stylesApp} from "../../styles/style";
import {imageStyle} from "../../styles/imageStyle";
import {css_master, css_cell} from "../../styles/css";

const Separator = () => (
  <View style={stylesApp.separator} />
);


export default class CellScreen extends Component {
  navigationOptions: {
    headerShown: false,
  }
  render(){    
  let {separator, card, cardImage, cardParagraph, cardText, cardBg} = css_cell;
  let {container, button, buttonImage,buttonText, bannerImage, bannerHeader} = css_master;
  let {bannerImg, sobreImg, playstore_menu, whatsApp_menu, internet_menu, instagram_menu, email_menu, facebook_menu, fotos_menu,} = imageStyle;
    return (
<>
<SafeAreaView>
<ScrollView>
<View style={container}>
        <TouchableOpacity style={bannerHeader}>
          <Image source={bannerImg} style={bannerImage}/>
          <Text style={css_master.bannerText}>Celular</Text>
          </TouchableOpacity>
        </View>
    {/* Página menu celular */}
     <View style={container}>
    <TouchableOpacity style={card} onPress={() => this.props.navigation.navigate('App')}>
      <Image style={cardImage} source={playstore_menu}/>      
      <Text style={cardText}>Apicativos {'\n'}
      <Text style={cardParagraph}>Como instalar aplicativos no seu celular Android</Text>
      </Text>
    </TouchableOpacity>    
    <TouchableOpacity style={card} onPress={() => this.props.navigation.navigate('WhatsApp')}>
                <Image style={cardImage} source={whatsApp_menu}/>
                <Text style={cardText}>WhatsApp{'\n'}
                <Text style={cardParagraph}>Como utilizar as principais funções do WhatsApp</Text>
                </Text>                
    </TouchableOpacity>  
    <TouchableOpacity style={card} onPress={() => this.props.navigation.navigate('E-mail')}>
                <Image style={cardImage} source={email_menu}/>
                <Text style={cardText}>
                E-Mail{'\n'}
                <Text style={cardParagraph}>Como criar um conta de E-mail</Text>
                </Text>
    </TouchableOpacity>
    <TouchableOpacity style={card} onPress={() => this.props.navigation.navigate('Facebook')}>
                <Image style={cardImage} source={facebook_menu}/>
                <Text style={cardText}>
                Facebook{'\n'}
                <Text style={cardParagraph}>Como criar uma conta no Facebook</Text>
                </Text>
    </TouchableOpacity>   
    <TouchableOpacity style={card}  onPress={() => this.props.navigation.navigate('Instagram')}>
                <Image style={cardImage} source={instagram_menu}/>
                <Text style={cardText}>
                Instagram{'\n'}
                <Text style={cardParagraph}>Como criar uma conta no Instagram</Text>
                </Text>
    </TouchableOpacity>    
    <TouchableOpacity style={card}  onPress={() => this.props.navigation.navigate('App')}>
                <Image style={cardImage} source={internet_menu}/>
                <Text style={cardText}>
                Contatos{'\n'}
                <Text style={cardParagraph}>Como adicionar editar ou excluir contatos na agenda</Text>
                </Text>
    </TouchableOpacity>      
    <TouchableOpacity style={card}  onPress={() => this.props.navigation.navigate('App')}>
                <Image style={cardImage} source={fotos_menu}/>
                <Text style={cardText}>
                Configurar{'\n'}
                <Text style={cardParagraph}>Como alterar algumas configurações do celular</Text>
                </Text>
    </TouchableOpacity>
    <TouchableOpacity style={button} onPress={()=> this.props.navigation.goBack()}>
            <Image source={sobreImg} style={buttonImage}/>
            <Text style={buttonText}>Voltar</Text>
    </TouchableOpacity>
</View>       
</ScrollView>
</SafeAreaView>
</>      
    );
  }
}