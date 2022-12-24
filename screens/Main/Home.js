import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
import {Fab, NativeBaseProvider} from 'native-base'
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PupaCtie from '../../navigation/PupaCtie';
import ForMain from './ForMain';
import LinearGradient from 'react-native-linear-gradient';

const Stack = createNativeStackNavigator();

const Home = ({navigation,route}) => {
    const isDarkMode = useColorScheme() === 'dark';
  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
  
    return (
            
      <SafeAreaView >
      <StatusBar
        // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        // backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* <LinearGradient colors={['#feeba3','#FFC600','#FFC600','#FFC600']}> */}
      {/* <NativeBaseProvider>
      <View>    
            <Fab placement='top-right' shadow={2} size="md" label={<Text color="white" fontSize="sm" >
                                                                    210{"\n"} registrations
                                                                  </Text>} 
            />
      </View>
      </NativeBaseProvider> */}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        // style={backgroundStyle}
        >
        <View
          style={{
            // backgroundColor: isDarkMode ? Colors.black : Colors.white,
            flex: 1, justifyContent: 'center', alignItems: 'center' 
          }}>
            <PupaCtie />
            <ForMain />
        </View>
      </ScrollView>
      {/* </LinearGradient> */}
    </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    tabs: {
      flex: 1,
      marginTop: 100,
    }
  });
  
  export default Home;
  