import React, { Component } from 'react'
import { View, ImageBackground, ActivityIndicator, StyleSheet } from 'react-native';
import Spinner from "react-native-spinkit";

class ActivityExemplo extends Component{
state = {animating: true}
closeActivityIndicator(){
    setTimeout(
        ()=> this.setState({animating:false}),
        4000
    );
}
componentDidMount(){
    this.closeActivityIndicator();
}
render(){
    const animating = this.state.animating;
    return(
        <>
        <View style={css.activityStyle}>
            {/* <ActivityIndicator style={{marginTop:450}} animating = {animating}            
                size={100} color="#fff" 
                /> */}
            <Spinner
            style={{flex:1, justifyContent:"center", marginTop:420, borderRadius:"50%"}}
            color="#fff"
            // color="#268f8a"
            size={80}
            type={'Wave'}
            speed="slow"            
            />
        </View>
        </>
    )
}
}

export default class SplashScreen extends Component {
    render() {
        return (
            <View style={css.container}>
                <ImageBackground source={require('./Assets/img/splash.png')} style={css.splashImage}/>
                <ActivityExemplo style={css.activityStyle}/>
                
            </View>
        )
    }
}
const css = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    splashImage:{
        width:"100%",
        height:"100%",
        resizeMode:"cover"        
    },
    activityStyle:{
        position:"absolute",        
    }
})

