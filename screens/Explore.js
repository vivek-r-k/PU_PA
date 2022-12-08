import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  ImageBackground
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import PupaCtie from '../navigation/PupaCtie';

// import button from 'react-native-bootstrap-styles';
// import Main from './main'
const Explore = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <ImageBackground source={require('../Source/backG.png')} resizeMode="cover"/> */}
        
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
            <View
              style={{
                marginLeft: 140
              }}
            >
            <PupaCtie />
            </View>
            <Image 
            source={require('../assets/image.png')} 
            style={{
                width:373,
                height: 334,
                // backgroundColor: backgroundStyle.backgroundColor,
                marginTop: 20,
                marginLeft: 53
            }}
            />
            <Text
            style={{
                marginTop: 48,
                textAlign: 'center',
                fontSize: 20,
                color: isDarkMode ? Colors.white : Colors.black,
            }}
            >Explore the App</Text>
            <Text
            style={{
                marginTop: 24,
                fontSize: 16,
                textAlign: 'center',
                marginLeft: 10,
                marginRight: 10,
                color: isDarkMode ? Colors.white : Colors.black,
            }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maecenas quis 
                interdum enim enim molestie faucibus. Pretium non non massa eros, nunc, urna. 
                Ac laoreet sagittis donec vel. Amet, duis justo, quam quisque egestas. Quam 
                enim at dictum condimentum. Suspendisse.
            </Text>
            <View
            style={styles.letsstart}
            >
                <Button
                    onPress={() => navigation.navigate('Main')}
                    title="Lets Start"
                    color="#FFC600"
                    // accessibilityLabel="Learn more about this purple button"
                />
            </View>
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
  letsstart: {
    marginTop: 40,
    marginBottom: 48,
    marginLeft: 16,
    marginRight: 16,
    fontSize: 20
  },
});

export default Explore;
