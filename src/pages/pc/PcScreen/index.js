import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  } from 'react-native';
import styles from '../../Styles/master';

class PcScreen extends Component{
    render(){
    return(
        <>
        <ImageBackground source={require('../../Assets/pc.png')} style={styles.imgBg}>
        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
                {/* Links de menu */}
          <TouchableOpacity style={styles.classMenu}
          onPress={() => this.props.navigation.navigate('Canal')}>
              
          <Text style={styles.textMenu}>Computador início</Text>
          
          </TouchableOpacity>

            </View>
            </ScrollView>
        </SafeAreaView>
        </ImageBackground>
    </>
        );
}
}
export default PcScreen;