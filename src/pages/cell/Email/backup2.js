import React, { Component } from 'react';
import {ImageBackground, View, Image, SafeAreaView, TouchableOpacity, ScrollView,Button, Text} from 'react-native';
import {imageStyle} from '../../styles/imageStyle';
import {stylesEmail} from '../../styles/style';

class CriarEmail extends Component {
  constructor () { 
    super();
    this.state = {showImage: false};
  }

  showImageFunc = () => {
     this.setState({showImage: true});
  }
render(){
  let {container, voltarBtn, header, headerText, headerImage, flexContent,text, imgBg, textImg, imgAbrir} = stylesEmail;   
  let {headerEmail, celular_bg,email_01, email_02, email_03, email_04, email_05,
    email_06, email_07, email_08, email_09, email_10, email_11, email_12,
  } = imageStyle;
  return (
<>
 <ImageBackground source={celular_bg} style={imgBg}>
    <SafeAreaView>
      <ScrollView>
        <View style={container}>
          <View style={header}>
            <Image source={headerEmail} style={headerImage} resizeMode="stretch"/>
            <Text style={headerText}>
            Como criar uma conta de e-mail
            </Text>
          </View>
          {/* Fim da view Header */}
          <View style={container}>
            
            <View style={flexContent}>
              <Text style={text}>
              {'\t\t'}Vamos lá:{'\n\t\t'} Abra o navegador do seu celular.{'\n\t\t'}Aqui
              eu usei o Google Chrome, mas você pode usar o que você achar melhor.
              </Text>
              <TouchableOpacity onPress={this.showImageFunc} style={{width:"100%", height:300}}>
                <Image source={email_01} style={textImg}/>
                </TouchableOpacity>              
              {this.state.showImage && 
              <View style={imgAbrir}>
              <Image style={{width:"200%",margin:0, height:500}} source={email_01}/>
              </View>
              // <TouchableOpacity onPress={this.showImageFunc(showImage: false} title="Fechar imagem"></TouchableOpacity>
              }
            </View>

            {/* Danilo */}
        
           
        </View>
        </View>
      </ScrollView>
      </SafeAreaView>
 </ImageBackground>
</>
  );
    }
};
export default CriarEmail;