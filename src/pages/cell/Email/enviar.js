import React, { Component } from 'react';
import {ImageBackground, View, Image, SafeAreaView, TouchableOpacity, ScrollView, Text} from 'react-native';
import {imageStyle} from '../../styles/imageStyle';
import {stylesEmail, masterStyle} from '../../styles/style';
class enviarEmail extends Component {
render(){
  let {container, header, headerImage, headerText} = masterStyle;
  let {voltarBtn, flexContent,text, imgBg, textImg, border_Radius_Image} = stylesEmail;   
  let {headerEmail, celular_bg,email_01, enviarEmail_01,enviarEmail_02,enviarEmail_03, enviarEmail_04, enviarEmail_05
  } = imageStyle;
  return (
<>
 <ImageBackground source={celular_bg}>
    <SafeAreaView>
      <ScrollView>
        <View>
          <View>
            <Image source={headerEmail}/>
            <Text>
            Como enviar um E-mail
            </Text>
          </View>
          {/* Fim da view Header */}
          <View>
            <View>
              <Text>
              {'\t\t'}Agora que você criou sua conta de e-mail, vamos aprender a enviar um e-mail.
              </Text>
            </View>
            <View>
              <Text>
              {'\t\t'}Primeiro abra seu gerenciador de e-mail.{'\n\t\t'}Como nós criamos um GMail vamos abrir o App 
              do GMail.
              </Text>
              <View style={border_Radius_Image}>                
              <Image style={textImg} source={enviarEmail_01}/>
              </View>
            </View>
            <View>
              <Text>{'\t\t'}Toque no botão "Escrever", que está na parte de baixo à direita da tela em vermelho
              </Text>
              <View style={border_Radius_Image}>                
              <Image style={textImg} source={enviarEmail_02}/>
              </View>
            </View>
            <View>
              <Text>{'\t\t'}Digite o endereço de E-mail da pessoa para quem você quer enviar o e-mail.
              {'\n\t\t'}Aqui nós colocamos o e-mail do aplicativo "vsdicas01@gmail.com". No seu caso digite um e-mail 
              válido.
              </Text>
              <View style={border_Radius_Image}>                
              <Image style={textImg} source={enviarEmail_03}/>
              </View>
            </View>
            <View>
              <Text>{'\t\t'}Agora você digita o Assunto, ou motivo do seu a-mail. Eno campo "Escrever e-mail" você escreve
              o que você quiser.                
              </Text>
              <View style={border_Radius_Image}>                
              <Image style={textImg} source={enviarEmail_04}/>
              </View>
            </View>
            <View>
              <Text>{'\t\t'}Nos três campos acima temo as opções de anexar um arquivo (No ícone que parece um clips de papel),
               enviar o e-mail (a seta que aponta para a direita) e nos três pontinhos não mexeremos por enquanto.
              </Text>
              <View style={border_Radius_Image}>                
              <Image style={textImg} source={enviarEmail_05}/>
              </View>
            </View>
            <View>
              <Text>{'\t\t'}Pronto depois de escrever o conteúdo do seu e-mail, e anexar os ar
              </Text>
              <View style={border_Radius_Image}>                
              <Image style={textImg} source={enviarEmail_05}/>
              </View>
            </View>
            {/* Botão Voltar */}
            <TouchableOpacity onPress={()=> this.props.navigation.goBack()} style={voltarBtn}>
            <Text style={{color:'#000',padding:15, fontSize:25}}>Voltar</Text>
            </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
      </SafeAreaView>
 </ImageBackground>
</>
  );
    }
};
export default enviarEmail;