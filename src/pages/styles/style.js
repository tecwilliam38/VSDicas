import React, {Component} from 'react';
import {StyleSheet, Dimensions } from 'react-native';
import {View} from 'react-native';
const{width, height} = Dimensions.get("window");//Não usar com arquivos de backcGround

class Separator extends Component {
  render() {
    let {separator} = stylesApp;
    return (
        <View style={separator} />
    )
  }
}

const homeStyle = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        width:'100%',
        height:'100%',
    },
    header:{
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:20,
        shadowColor:'#000',
        shadowOpacity:0.34,
        shadowOffset:{width:0, height:5},
        shadowRadius:6,
        elevation:10,        
    },
    headerImage:{
        resizeMode:"stretch",
        width:"99.9%",
    },
    headerText:{
        fontSize:30,
        fontWeight:"bold",
        color:"#fff",
        opacity:0.9,
        backgroundColor:"#183026",
        width:"99.9%",
        textAlign:"center",
    },
    card:{
         width:"99%",
         height:180,
         justifyContent:"center",
         alignItems:"center",
         marginBottom:20,
         backgroundColor:"transparent",
         borderRadius:15,
         shadowColor:"#000",
         shadowOpacity:0.34,
         shadowOffset:{width:0, height:5},
         shadowRadius:6,
         elevation:10,
    },
    cardImage:{
        width:"99%",
        height:180,
        resizeMode:"stretch",
        borderRadius:15,
    },
    cardText:{
        position:"absolute",
        fontWeight:'bold',
        color:"#fff",
        fontSize:27,
        width:'100%',
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",
        textShadowOffset:{width:3, height:3},
        textShadowColor:"#000", 
        textShadowRadius:4,
        textDecorationLine:"underline",        
    },
    btnSobre:{
        width:"99%",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:"5%",
        borderRadius:15,
        shadowColor:"#000",
        shadowOpacity:0.34,
        shadowOffset:{width:0, height:5},
        shadowRadius:6,
        elevation:10,
    },
    btnImage:{
        borderRadius:15,
        width:'99%',
        resizeMode:"cover",
    },
    btnText:{
        position:"absolute",
        color:"#fff",
        fontSize:30,
        fontWeight:"bold",
        textShadowOffset:{width:3, height:3},
        textShadowColor:"#000", 
        textShadowRadius:4,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        shadowOpacity:0.34,
        shadowOffset:{width:0, height:5},
        shadowRadius:6,
        elevation:5,
      },
})
const stylesApp = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff',
        width:'100%',
        height:'100%',
    },
    header:{
        width:'100%',
        backgroundColor:"#fff",
        alignItems:'center',
        marginBottom:10,
        marginTop:5,
        borderRadius:10,
        shadowColor:'#000',
        shadowOpacity:0.34,
        shadowOffset:{width:0, height:5},
        shadowRadius:6,
        elevation:10,
    },
    headerImage:{
        width:'99.9%',
        resizeMode:'cover',
        borderRadius:10,
        
    },
    headerText:{
        width:"100%",
        fontSize: 30,
        marginVertical:30,
        paddingHorizontal:5,
        color:"#fff",
        textAlign:'center',
        fontWeight:'bold',
        textShadowOffset:{width:3, height:3},
        textShadowColor:"#000", 
        textShadowRadius:4,
      },
    card:{
        alignItems:'center',
        justifyContent:"center",
        backgroundColor: 'transparent',
        marginBottom:20,
        
        flex:1,
        width:'99%',
        borderRadius:20,
        borderBottomColor:"#222",
        borderBottomWidth:2,
        shadowColor:"#000",
        shadowOpacity:0.34,
        shadowOffset:{width:0, height:5},
        shadowRadius:6,
        elevation:10,
    },
    cardText:{
        position:'absolute',
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",
        marginTop:"10%",
        fontSize:30,
        color:"#fff",
        fontWeight:'bold',
        textShadowOffset:{width:3, height:3},
        textShadowColor:"#000", 
        textShadowRadius:4,
    },
    cardImage:{
        flex:1,
        margin:10,
        alignItems:"center",
        justifyContent:"center",
        position:"relative",
        width:'98%',
        height:160,
        margin:0,
        resizeMode:'cover',
        borderRadius:20,
    },
    cardParagraph:{
        fontSize:25,
        textAlign:'center',
        marginTop:0,
        paddingBottom:10,
        color:"#fff",
        fontWeight:'bold',
        textShadowOffset:{width:1, height:1},
        textShadowColor:"#000", 
        textShadowRadius:6,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#fff',
        borderBottomWidth: 3,
        shadowOpacity:0.34,
        shadowOffset:{width:0, height:5},
        shadowRadius:6,
        elevation:5,
      },
    flexContent:{
        flex:1,
        width:'99%',
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff",
        borderBottomWidth:2,
        borderBottomColor:'#666',
        marginBottom:10,
        marginTop:5,
        borderRadius:10,
        shadowColor:'#000',
        shadowOpacity:0.34,
        shadowOffset:{width:0, height:5},
        shadowRadius:6,
        elevation:10,
      },
    text:{
        width:'100%',
        marginTop:5,
        marginBottom:15,
        padding:8,
        fontSize:20,
        textAlign:'justify',
        color:"#fff",
        fontWeight:'bold',
        textShadowOffset:{width:0, height:1},
        textShadowColor:"#000000", 
        textShadowRadius:3,
        },
    textImg:{
        width:"100%",
        height:342,
    },
    border_Radius_Image:{
        alignItems:"center",
        resizeMode:"cover",
        width:width * 0.7,
        height:342,
        borderRadius:10,
        overflow: 'hidden',
        marginBottom:15,
        borderColor:"#555",
        borderWidth:1,
        shadowColor:'#000',
        shadowOpacity:0.34,
        shadowOffset:{width:0, height:5},
        shadowRadius:6,
        elevation:10,
    },
        imgBg:{
        width: "100%",
        height:'100%',
        },
        voltarBtn:{
            width:'95%',
            backgroundColor:"#fff",
            alignItems:'center',
            justifyContent:"center",
            zIndex:100,
            marginBottom:'30%', 
            marginTop:20,
            borderRadius:10,
            shadowColor:'#000',
            shadowOpacity:0.34,
            shadowOffset:{width:0, height:5},
            shadowRadius:6,
            elevation:10,
        },
        btnSobre:{
            width:"95%",
            alignItems:"center",
            justifyContent:"center",
            marginTop:10,
            marginBottom:"20%",
            borderRadius:10,
            shadowColor:'#000',
            shadowOpacity:0.34,
            shadowOffset:{width:0, height:5},
            shadowRadius:6,
            elevation:10,
        },
        btnImage:{
            width:'100%',
            resizeMode:'cover',
            borderRadius:15,
        },
        btnText:{
            width:'98%',
            position:"absolute",
            alignItems:"center",
            justifyContent:"center",
            fontWeight:"bold",
            marginTop:0,
            paddingTop:10,
            paddingHorizontal:5,
            fontSize:30,
            textAlign:'center',
            color:"#fff",
            textShadowColor:'#444',
            textShadowOffset:{width:1, height:3,},
            textShadowRadius:3,  
            borderRadius:0,
        },
})
const stylesEmail = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff',
        width:'100%',
        height:'100%',
    },
    header:{
        width:'100%',
        backgroundColor:"#fff",
        alignItems:'center',
        marginBottom:10,
        marginTop:5,
        borderRadius:10,
        shadowColor:'#000',
        shadowOpacity:0.34,
        shadowOffset:{width:0, height:5},
        shadowRadius:6,
        elevation:10,
    },
    headerImage:{
        width:'100%',
        resizeMode:'cover',
        borderRadius:10,
        
    },
    headerText:{
        fontSize: 30,
        padding:10,
        color:"#fff",
        textAlign:'center',
        fontWeight:'bold',
        textShadowOffset:{width:3, height:3},
        textShadowColor:"#000", 
        textShadowRadius:4,
      },
    //   Corpo Da página
    flexContent:{
        flex:1,
        width:'99%',
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff",
        borderBottomWidth:2,
        borderBottomColor:'#666',
        marginBottom:10,
        marginTop:5,
        borderRadius:10,
        shadowColor:'#000',
        shadowOpacity:0.34,
        shadowOffset:{width:0, height:5},
        shadowRadius:6,
        elevation:10,
      },
    text:{
        width:'100%',
        marginTop:5,
        marginBottom:15,
        padding:8,
        fontSize:20,
        textAlign:'justify',
        color:"#fff",
        fontWeight:'bold',
        textShadowOffset:{width:0, height:1},
        textShadowColor:"#000000", 
        textShadowRadius:3,
        },
    textImg:{
        width:"100%",
        height:340,
        resizeMode:"cover",
        padding:30,
    },
    border_Radius_Image:{
        width:width * 0.9,
        height:350,
        borderRadius:10,
        overflow: 'hidden',
        marginBottom:10,
        borderColor:"#555",
        borderWidth:1,
        shadowColor:'#000',
        shadowOpacity:0.34,
        shadowOffset:{width:0, height:5},
        shadowRadius:6,
        elevation:10,
    },
    voltarBtn:{
        width:'95%',
        backgroundColor:"#fff",
        alignItems:'center',
        marginBottom:'30%', 
        marginTop:20,
        borderRadius:10,
        shadowColor:'#000',
        shadowOpacity:0.34,
        shadowOffset:{width:0, height:5},
        shadowRadius:6,
        elevation:10,
        },
        imgBg:{
        width: "100%",
        height:'100%',
        },
        card:{
            width:"99%",
            backgroundColor:"#fff",
            borderLeftColor:"#9f862a",
            borderLeftWidth:10,
            marginBottom:5,
            paddingLeft:15,
            borderRadius:5,
            shadowColor:'#000',
            shadowOpacity:0.34,
            shadowOffset:{width:0, height:5},
            shadowRadius:6,
            elevation:10,
        },
        cardText:{
            fontSize:30,
            color:"#fff",
            fontWeight:"bold",
            textAlign:"left",
            paddingVertical:5,
            textShadowColor:'#000',
            textShadowOffset:{width:1, height:3,},
            textShadowRadius:5, 
        },
})
const stylesFacebook = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff',
        width:'100%',
        height:'100%',
    },
    header:{
        width:'100%',
        backgroundColor:"#fff",
        alignItems:'center',
        marginBottom:10,
        marginTop:5,
        borderRadius:10,
        shadowColor:'#000',
        shadowOpacity:0.34,
        shadowOffset:{width:0, height:5},
        shadowRadius:6,
        elevation:10,
    },
    headerImage:{
        width:'100%',
        resizeMode:'cover',
        borderRadius:10,
        
    },
    headerText:{
        fontSize: 30,
        padding:10,
        color:"#fff",
        textAlign:'center',
        fontWeight:'bold',
        textShadowOffset:{width:3, height:3},
        textShadowColor:"#000", 
        textShadowRadius:4,
      },
      flexContent:{
        borderRadius:25,
        borderBottomWidth:2,
        borderBottomColor:'#666',
        width:'95%',
        backgroundColor:"#999",
        alignItems:'center',
        marginBottom:10,
        marginTop:5,
        borderRadius:10,
        shadowColor:'#000',
        shadowOpacity:0.34,
        shadowOffset:{width:0, height:5},
        shadowRadius:6,
        elevation:10,
        
        },
       text:{
        width:'98%',
        marginTop:0,
        marginBottom:15,
        paddingTop:10,
        paddingHorizontal:5,
        fontSize:20,
        textAlign:'justify',
        color:"#fff",
        textShadowColor:'#444',
        textShadowOffset:{width:1, height:3,},
        textShadowRadius:3, 
        },
        imgBg:{
        width: "100%",
        height:'100%',
        },
        textImg:{
        width:'30%', 
        alignItems:'center',
        resizeMode:'stretch',
        height:250,
        borderColor:'#333',
        borderRadius:25,
        borderWidth:0.3,
        marginBottom:15, 
        },
        voltarBtn:{
        width:'95%',
        backgroundColor:"#fff",
        alignItems:'center',
        marginBottom:'10%', 
        marginTop:20,
        borderRadius:10,
        shadowColor:'#000',
        shadowOpacity:0.34,
        shadowOffset:{width:0, height:5},
        shadowRadius:6,
        elevation:10,
        },
})
const stylesWhatsapp = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        width:'100%',
        height:'100%',
    },
    header:{
        width:'100%',
        backgroundColor:"#fff",
        alignItems:'center',
        marginBottom:10,
        marginTop:5,
        borderRadius:10,
        shadowColor:'#000',
        shadowOpacity:0.34,
        shadowOffset:{width:0, height:5},
        shadowRadius:6,
        elevation:10,
    },
    headerImage:{
        borderRadius:10,
        width:'100%',
        resizeMode:'cover',
    },
    headerText:{
        fontSize: 30,
        paddingHorizontal:5,
        color:"#fff",
        textAlign:'center',
        fontWeight:'bold',
        textShadowOffset:{width:3, height:3},
        textShadowColor:"#000", 
        textShadowRadius:4,
      },
      imgBg:{
        width: "100%",
        height:'100%',
        },
        card:{
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:"#fff",
            borderLeftWidth:10,
            borderLeftColor:"#003B2B",
            padding:20,
            marginBottom:10,
            width:'99%',
            shadowOpacity:0.4,
            shadowOffset:{width:0, height:5},
            shadowRadius:6,
            elevation:5,
            borderRadius:20,
        },
        cardText:{
            fontSize:30,
            color:"#000",
            textAlign:'center',
            fontWeight:'bold',
            textShadowOffset:{width:1, height:1},
            textShadowColor:"#555", 
            textShadowRadius:4,
        },
        flexContent:{
            flex:1,
            width:'99%',
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#fff",
            borderBottomWidth:2,
            borderBottomColor:'#666',
            marginBottom:10,
            marginTop:5,
            borderRadius:10,
            shadowColor:'#000',
            shadowOpacity:0.34,
            shadowOffset:{width:0, height:5},
            shadowRadius:6,
            elevation:10,
          },
        text:{
            width:'100%',
            marginTop:5,
            marginBottom:15,
            padding:8,
            fontSize:20,
            textAlign:'justify',
            color:"#fff",
            fontWeight:'bold',
            textShadowOffset:{width:0, height:1},
            textShadowColor:"#000000", 
            textShadowRadius:3,
            },
        textImg:{
            width:"100%",
            height:342,
            
        },
        border_Radius_Image:{
            width: width * 0.7,
            resizeMode:"cover",
            height:342,
            borderRadius:10,
            overflow: 'hidden',
            marginBottom:15,
            borderColor:"#555",
            borderWidth:1,
            shadowColor:'#000',
            shadowOpacity:0.34,
            shadowOffset:{width:0, height:5},
            shadowRadius:6,
            elevation:10,
        },
        voltarBtn:{
            width:'95%',
            backgroundColor:"#fff",
            alignItems:'center',
            marginBottom:'30%', 
            marginTop:20,
            borderRadius:10,
            shadowColor:'#000',
            shadowOpacity:0.34,
            shadowOffset:{width:0, height:5},
            shadowRadius:6,
            elevation:10,
        },
})
// Fim da stylesWhatsapp

const PcStyle = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        width:'100%',
        height:'100%',
    },
    header:{
        width:'100%',
        backgroundColor:"#fff",
        alignItems:'center',
        marginBottom:10,
        marginTop:5,
        borderRadius:10,
        shadowColor:'#000',
        shadowOpacity:0.34,
        shadowOffset:{width:0, height:5},
        shadowRadius:6,
        elevation:10,
    },
    headerImage:{
        borderRadius:10,
        width:'100%',
        resizeMode:'cover',
    },
    headerText:{
        fontSize: 30,
        paddingHorizontal:5,
        color:"#fff",
        textAlign:'center',
        fontWeight:'bold',
        textShadowOffset:{width:3, height:3},
        textShadowColor:"#000", 
        textShadowRadius:4,
      },
      imgBg:{
        width: "100%",
        height:'100%',
        },
        card:{
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:"#fff",
            borderLeftWidth:10,
            borderLeftColor:"#003B2B",
            padding:20,
            marginBottom:10,
            width:'99%',
            shadowOpacity:0.4,
            shadowOffset:{width:0, height:5},
            shadowRadius:6,
            elevation:5,
            borderRadius:20,
        },
        cardText:{
            fontSize:30,
            color:"#000",
            textAlign:'center',
            fontWeight:'bold',
            textShadowOffset:{width:1, height:1},
            textShadowColor:"#555", 
            textShadowRadius:4,
        },
        cardParagraph:{
            fontSize:25,
            textAlign:'center',
            marginTop:0,
            paddingBottom:10,
            color:"#fff",
            fontWeight:'bold',
            textShadowOffset:{width:1, height:1},
            textShadowColor:"#000", 
            textShadowRadius:6,
        },
        flexContent:{
            flex:1,
            width:'99%',
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#fff",
            borderBottomWidth:2,
            borderBottomColor:'#666',
            marginBottom:10,
            marginTop:5,
            borderRadius:10,
            shadowColor:'#000',
            shadowOpacity:0.34,
            shadowOffset:{width:0, height:5},
            shadowRadius:6,
            elevation:10,
          },
        text:{
            width:'100%',
            marginTop:5,
            marginBottom:15,
            padding:8,
            fontSize:20,
            textAlign:'justify',
            color:"#fff",
            fontWeight:'bold',
            textShadowOffset:{width:0, height:1},
            textShadowColor:"#000000", 
            textShadowRadius:3,
            },
        textImg:{
            width:"100%",
            height:350,
            resizeMode:"cover",
            padding:30,
        },
        border_Radius_Image:{
            width: width * 0.9,
            height:350,
            borderRadius:10,
            overflow: 'hidden',
            marginBottom:10,
            borderColor:"#555",
            borderWidth:1,
            shadowColor:'#000',
            shadowOpacity:0.34,
            shadowOffset:{width:0, height:5},
            shadowRadius:6,
            elevation:10,
        },
        voltarBtn:{
            width:'95%',
            backgroundColor:"#fff",
            alignItems:'center',
            marginBottom:'30%', 
            marginTop:20,
            borderRadius:10,
            shadowColor:'#000',
            shadowOpacity:0.34,
            shadowOffset:{width:0, height:5},
            shadowRadius:6,
            elevation:10,
        },
})
export  {stylesApp, stylesWhatsapp, stylesFacebook, stylesEmail, Separator, homeStyle, PcStyle};