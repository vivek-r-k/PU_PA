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
                source={require('../assets/LOGO1.png')} 
                
            /> 
            {/* <Image 
                style={styles.ctie}
                source={require('../assets/Ctie&MiB.png')}
            /> */}
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
        width:208,
        height:101,
    },
    ctie: {
        width:206,
        height:62,
    }
})

export default PupaCtie