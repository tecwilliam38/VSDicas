import React, {Component} from 'react';
import {
ImageBackground,
View,
Text,
TouchableOpacity,
SafeAreaView,
ScrollView,
} from 'react-native';
import styles from '../../Styles/master';

class cellScreen extends Component{
    render(){
        return(
            <>
            <ImageBackground source={require('../../Assets/celular.png')} style={styles.imgBg}>
           <SafeAreaView>
               <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.classMenu}
                onPress={() => this.props.navigation.navigate('App')}
                >
                <Text style={styles.textMenu}>Aplicativo App</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.classMenu}
                onPress={() => this.props.navigation.navigate('WhatsApp')}
                >
                <Text style={styles.textMenu}>WhatsApp</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.classMenu}
                onPress={() => this.props.navigation.navigate('Camera')}
                >
                <Text style={styles.textMenu}>Câmera</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.h2}
                onPress={() => this.props.navigation.navigate('Fotos')}
                >
                <Text style={styles.menu}>Fotos</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
            </SafeAreaView>
            </ImageBackground>
            </>
        )
    }
}

export default cellScreen;
