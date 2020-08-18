import React,{PureComponent} from 'react';
import { View,Text,ImageBackground, ScrollView, TextInput,Image,StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import {IMAGE} from '../../Assets/imagens';
// import { Container } from './styles';

export default class testes extends PureComponent {
    // constructor(props){
    //     super(props)
    //     this.state ={
    //         items:[]
    //     }
    // }
    // _renderItem=({item,index}) => {
    //     let {card, cardImage, cardText} = styles    
    //     return(
    
    //     )
    // }
    render() {
let{Container, card, cardImage, cardText}= styles
// let {items} = this.state
  return (
    // <FlatList
    // style={Container}
    // data={items}
    // keyExtractor={(item, index) => index.toString()}
    // renderItem={this._renderItem}
    // />
    <ScrollView>
    <View style={Container}>
    <TouchableOpacity style={card} onPress={() => this.props.navigation.navigate('App')}>
        <Image style={cardImage} source={IMAGE.playstore_menu} resizeMode="cover"/>
        <Text style={cardText}>
        Aplicativos
        </Text>
    </TouchableOpacity>

    <TouchableOpacity style={card}
    onPress={() => this.props.navigation.navigate('Email')}
    >
        <Image style={cardImage} source={IMAGE.instagram_menu} resizeMode="cover"/>
        <Text style={cardText}>
            E-mail
        </Text>
    </TouchableOpacity>

    <TouchableOpacity style={card}
    onPress={() => this.props.navigation.navigate('WhatsApp')}
    >    
        <Image style={cardImage} source={IMAGE.whatsApp_menu} resizeMode="cover"/>
        <Text style={cardText}>
            WhatsApp
        </Text>
    </TouchableOpacity>
    </View>
    </ScrollView>
)
 }
};
const styles = StyleSheet.create({
    Container:{
        marginTop:30,
    },
    card:{
    backgroundColor:'#fff',
    marginBottom:10,
    marginLeft:'2%',
    marginTop:'1%',
    width:'96%',
    height:100,
    shadowColor: "#1f7568",
    shadowOffset: {width: 2, height: 6,},
    shadowOpacity: 1.25,
    shadowRadius: 4.65,
    elevation: 5,
    borderRadius:10,

    },
    cardText:{
        textAlign:'center',
        fontSize:45,
        padding:15,
        width:'100%',
        textShadowColor:'#000',
        textShadowOffset:{width:2, height:4},
        textShadowRadius:10,
        color:'#fff',

    },
    cardImage:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:100,
        
        borderRadius:12,
        },

})
//backgroundColor:'#1f7568',


