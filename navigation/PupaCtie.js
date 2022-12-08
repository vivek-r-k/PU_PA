import React from 'react';
import {
  Image,
  StyleSheet,
  View
} from 'react-native';

const PupaCtie = () => {
    return(
        <View style={styles.container}>
        <Image
            style={styles.pupa}
            source={require('../assets/Pupalogo.png')} 
            
        /> 
        <Image 
            style={styles.ctie}
            source={require('../assets/klectie.png')}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    pupa: {
        width:220,
        height:90,
    },
    ctie: {
        width:150,
        height:40,
    }
})

export default PupaCtie