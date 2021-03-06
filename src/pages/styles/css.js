import {StyleSheet} from "react-native";

const css_master= StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        width:"100%",
        height:"100%",
    },
    bannerHeader:{
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        //marginBottom:20,
        //borderRadius:10,
        shadowColor:'#000',
        shadowOpacity:0.34,
        shadowOffset:{width:0, height:5},
        shadowRadius:6,
        elevation:10,  
    },
    bannerText:{
    fontWeight:'bold',
    color:"#fff",
    fontSize:30,
    marginBottom:15,
    paddingBottom:15,
    width:'110%',
    borderBottomColor:"#555",
    borderBottomWidth:2,
    backgroundColor:"#fff",
    //alignItems:"center",
    //justifyContent:"center",
    textAlign:"center",
    textShadowOffset:{width:3, height:3},
    textShadowColor:"#000", 
    textShadowRadius:4,
    borderRadius:50,
        // shadowColor:'#000',
        // shadowOpacity:0.34,
        // shadowOffset:{width:0, height:5},
        // shadowRadius:15,
        // elevation:10,  
    //textDecorationLine:"underline",        
},
    bannerImage:{
        resizeMode:"cover",
        width:"100%",
        height:120,
    },
    card:{
        width:"99%",
        height:150,
        justifyContent:"center",
        alignItems:"center",
        marginVertical:"3%",
        backgroundColor:"transparent",
        borderRadius:30,
        shadowColor:"#000",
        shadowOpacity:0.34,
        shadowOffset:{width:0, height:5},
        shadowRadius:6,
        elevation:10,
   },
   cardImage:{
       width:"99%",
       height:160,
       resizeMode:"stretch",
       borderRadius:40,
   },
   cardText:{
       position:"absolute",
       fontWeight:'bold',
       color:"#fff",
       fontSize:25,
       width:'100%',
       alignItems:"center",
       justifyContent:"center",
       textAlign:"center",
       textShadowOffset:{width:3, height:3},
       textShadowColor:"#000", 
       textShadowRadius:4,
       //textDecorationLine:"underline",        
   },
    button:{
        width:"99%",
        height:90,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:"7%",
        marginTop:"3%",
        backgroundColor:"transparent",
        borderRadius:30,
        shadowColor:"#000",
        shadowOpacity:0.34,
        shadowOffset:{width:0, height:5},
        shadowRadius:6,
        elevation:10,
        },
        buttonImage:{
            borderRadius:35,
            height:100,          
            width:'99%',
            resizeMode:"cover",
        },
        buttonText:{
            position:"absolute",
            fontWeight:'bold',
            color:"#fff",
            fontSize:20,
            width:'100%',
            alignItems:"center",
            justifyContent:"center",
            textAlign:"center",
            textShadowOffset:{width:3, height:3},
            textShadowColor:"#000", 
            textShadowRadius:4,
        },


});
const css_cell = StyleSheet.create({
    card:{
        //alignContent:'center',
        alignItems:"center",
        justifyContent:"center",
        //backgroundColor:"#rgba(0,0,0,0.3)",  
        marginBottom:"3%",
        //marginTop:"3%",
        //flex:1,
        width:'98%',
        height:150,
        borderRadius:20,
        //borderBottomColor:"#222",
        //borderBottomWidth:1,
        shadowColor:"#000",
        shadowOpacity:0.34,
        shadowOffset:{width:0, height:5},
        shadowRadius:6,
        elevation:10,
    },
    cardText:{
        position:'absolute',
        //alignItems:"center",
        //justifyContent:"flex-start",
        textAlign:"center",
        //marginTop:"15%",
        //marginTop:"5%",
        fontSize:25,
        color:"#fff",
        fontWeight:'bold',
        textShadowOffset:{width:3, height:3},
        textShadowColor:"#000", 
        textShadowRadius:4,
    },
    cardParagraph:{
        fontSize:17,
        //textAlign:'center',
        alignItems:"center",
        //width:'18%',
        //backgroundColor:"#555",
        paddingBottom:10,
        color:"#fff",
        //fontWeight:'bold',
        textShadowOffset:{width:1, height:1},
        textShadowColor:"#000", 
        textShadowRadius:6,
        borderRadius:20,
    },
    cardBg:{
        alignContent:"stretch",
        alignItems:"stretch",
        justifyContent:"flex-end",
        textAlign:"center",
        //backgroundColor:"#000",
        //width:"50%",
        padding:10, 
        //marginTop:20, 
    },
    cardImage:{
        //flex:1,
        margin:10,
        alignItems:"center",
        justifyContent:"center",
        position:"relative",
        width:'99%',
        height:150,
        //margin:0,
        resizeMode:'cover',
        borderRadius:40,
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
});



export  {css_master, css_cell};