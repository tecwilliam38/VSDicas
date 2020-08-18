import React, { Component } from 'react';
import {ImageBackground, View, Image, SafeAreaView, TouchableOpacity, ScrollView, Text} from 'react-native';
import {imageStyle} from '../../styles/imageStyle';
import {stylesEmail} from '../../styles/style';

class CriarEmail extends Component {
  imgAbrir = () =>
  {
    alert("Abrir imagem!");
  }
render(){
  let {container, voltarBtn, header, headerText, headerImage, flexContent,text, imgBg, textImg} = stylesEmail;   
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
              {'\t\t\t'}Para criar uma conta de e-mail vamos precisar de internet no celular.{'\n'} Então
           tenha ciência de que você precisará de acesso a dados móveis ou uma rede com wi-fi, ok?
              </Text>
            </View>
            <View style={flexContent}>
              <Text style={text}>
              {'\t\t'}Vamos lá:{'\n\t\t'} Abra o navegador do seu celular.{'\n\t\t'}Aqui
              eu usei o Google Chrome, mas você pode usar o que você achar melhor.
              </Text>
              <TouchableOpacity onpress={this.imgAbrir}>
              <Image style={textImg} source={email_01}/>
              </TouchableOpacity>
            </View>
            <View style={flexContent}>
              <Text style={text}>
                {'\t\t'}Na tela do navegador, toque na barra de endereços que fica na parte de cima como na imagem abaixo:
              </Text>
              <Image style={{...textImg,resizeMode:"stretch"}} source={email_02}/>
            </View>
            <View style={flexContent}>
              <Text style={text}>
                {'\t\t'}Agora digite "Criar email no gmail", como na imagem abaixo
              </Text>
              <Image style={textImg} source={email_03}/>
            </View>
            <View style={flexContent}>
              <Text style={text}>
                {"\t\t"} Toque na opção "criar uma conta do Gmail - Ajuda..."
              </Text>
              <Image style={textImg} source={email_04}/>
            </View>
            <View style={flexContent}>
              <Text style={text}>
                {"\t\t"} Toque no botão vermelho "Criar uma conta"
              </Text>
              <Image style={textImg} source={email_05}/>
            </View>
            <View style={flexContent}>
              <Text style={text}>
                {"\t\t"}Preencha os campos de acordo com seus dados, conforme a imagem abaixo.
              </Text>
              <Image style={textImg} source={email_06}/>
              <Text style={text}>
                {"\n\t\t"}Observe que no campo e-mail você só preencherá com o nome do e-mail que você quer.
                Pense em um nome diferente pois muitos e-mails comuns já existem por isso se o nome que você 
                escolheu não estiver disponível, escolha um diferente. Uma sugestão é seu nome e as inicias do seu 
                sobrenome e seu estado ou sua idade.{'\n\t\t'} No campo senha, anote em um local seguro pois você precisará
                dela no futuro
              </Text>
              
            </View>
            <View style={flexContent}>
              <Text style={text}>
                {"\t\t"} Na tela seguinte você precisará de um número de telefone celular válido (de preferencia o seu mesmo)
                para confirmar a criação do seu e-mail. Digite seu número com o ddd (o meu é 21) e os dados que faltam para o cadastro, e toque em "próxima":
              </Text>
              <Image style={textImg} source={email_07}/>
            </View>
            <View style={flexContent}>
              <Text style={text}>
                {"\t\t"}Aqui você vai digitar o código que foi enviado para o seu celular (são seis  números), e aperte
                "Verificar":
              </Text>
              <Image style={textImg} source={email_08}/>
            </View>
            <View style={flexContent}>
              <Text style={text}>
                {"\t\t"}Aqui você tem a opção de usar seu número para armazenar outras informações, por enquanto escolha pular:
              </Text>
              <Image style={textImg} source={email_09}/>
            </View>
            <View style={flexContent}>
              <Text style={text}>
                {"\t\t"} Aqui é a tela com os termos de privacidade do Google, após ler,
                role a tela para cima e toque em Concordo:
               </Text>
              <Image style={textImg} source={email_10}/>
              <Image style={textImg} source={email_11}/>
            </View>
            <View style={flexContent}>
              <Text style={text}>
                {"\t\t"}Pronto seu e-mail foi criado, anote em algum lugar seguro para não esquecer.
                Lembre-se seu G-mail é o nome que você escolheu mais "@gmail.com", então não esqueça de anotar essa parte também.
              </Text>
              <Image style={textImg} source={email_12}/>
              <Text style={text}>{"\t"}Já pode fechar o navegador</Text>
            </View>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Celular')} style={voltarBtn}>
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
export default CriarEmail;