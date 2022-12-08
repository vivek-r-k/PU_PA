import React, {useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import PupaCtie from '../../navigation/PupaCtie';
import ForMentor from './EditMentor';
import {Box, Stack, Text, NativeBaseProvider, Center} from 'native-base'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Records from '../../assets/csvjson.json'
import { AuthContext } from "../../navigation/AuthProvider";

const Mentor = ({navigation,route}) => {
    const isDarkMode = useColorScheme() === 'dark';
  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
  
    const {user} = useContext(AuthContext)
    return (
    <SafeAreaView >
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          // backgroundColor={backgroundStyle.backgroundColor}
        />
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
          </View>
        </ScrollView>
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
  });
  
  export default Mentor;
  