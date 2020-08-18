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

class TvScreen extends Component{
    render(){
    return(
        <>
        <ImageBackground source={require('../../Assets/tv.jpg')} style={styles.imgBg}>
        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
                {/* Links de menu */}
          <TouchableOpacity style={styles.classMenu}
          onPress={() => this.props.navigation.navigate('Canal')}>
          <Text style={styles.textMenu}>Canais</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.classMenu}
          onPress={() => this.props.navigation.navigate('Volume')}>
          <Text style={styles.textMenu}>Volume</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.classMenu}
          onPress={() => this.props.navigation.navigate('Cabo')}>
          <Text style={styles.textMenu}>Tv a Cabo</Text>
          </TouchableOpacity>            

            </View>
            </ScrollView>
        </SafeAreaView>
        </ImageBackground>
    </>
        );
}
}
export default TvScreen;