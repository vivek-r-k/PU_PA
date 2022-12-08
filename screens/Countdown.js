import React, {useState, useCallback, useEffect} from 'react';
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
import { Box, Center, NativeBaseProvider } from 'native-base';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import PupaCtie from '../navigation/PupaCtie';

const names = [
  "Don't give up, slow progress is better than no progress; Stay Positive!",
  "Stuck somewhere? Your mentors are always there to help you!",
  "A true entrepreneur falls in love with the problem, not the solution",
  "Entrepreneurs don’t finish when they are tired, they finish when they are done",
  "Entrepreneurship is neither a science nor an art, it's a practice",
  "You're the first to hear every time you state what you want or believe. It’s a message to you and others about what you think is possible. Don’t put a ceiling on yourself",
  "“All our dreams can come true, if we have the courage to pursue them”—Walt Disney",
  "“The secret of getting ahead is getting started.” —Mark Twain",
  "“It’s hard to beat a person who never gives up.” —Babe Ruth",
  "If people are doubting how far you can go, go so far that you can’t hear them anymore."
]

const renderTime = (time, dimension) => {
  // https://codesandbox.io/s/musing-davinci-mqssz?fontsize=14&hidenavigation=1&theme=dark&file=/src/App.js
  return (
    <Text className="time-wrapper">
      <Text style={{fontSize: 60}} >{dimension}</Text>
      <Text className="time" style={{fontSize: 60}}>{'\n'}{time}</Text>
    </Text>
  );
};

const daySeconds = 86400;

const getTimeDays = (time) => (time / daySeconds) | 0;

const Countdown = ({navigation,route}) => {
  const isDarkMode = useColorScheme() === 'dark';
  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const stratTime = Math.floor(new Date().getTime()/1000.0); // use UNIX timestamp in seconds
  const endTime = 1673587210000/1000 // use UNIX timestamp in seconds
  // ref: https://www.epochconverter.com/

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
  // console.log(remainingTime);
  
  const [newName, setnewName] = useState("You're the first to hear every time you state what you want or believe. It’s a message to you and others about what you think is possible. Don’t put a ceiling on yourself");

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 10000);
        return () => clearInterval(intervalID);
    }, [shuffle])


    return (
    <SafeAreaView>
        <StatusBar
          // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          // backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          // style={backgroundStyle}
          >
          <NativeBaseProvider>
          <View
            style={{
              // backgroundColor: isDarkMode ? Colors.black : Colors.white,
              flex: 1, justifyContent: 'center', alignItems: 'center' 
            }}>
              <PupaCtie />
              <Box alignItems="center" marginTop={70}>
                {/* TODO: if possible add meeting scheduler */}
                {/* <Text 
                style={{textAlign: 'center',
                fontSize: 20,
                marginTop: 19,
                alignSelf: 'flex-start'
                }}
                >
                Meeting Scheduled</Text>
                <Ionicons name="calendar" style={{alignSelf: 'flex-start'}} /> */}
                {/* TODO: 
                    1.Apply gradient to timer if possible which is available on npm website of this
                      particular package
                */}
                <CountdownCircleTimer
                  isPlaying
                  rotation='counterclockwise'
                  duration={daysDuration}
                  colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                  colorsTime={[25, 20, 5, 3]}
                  onComplete={() => {
                    return alert("It's time to present") 
                  }}
                  // TODO: problem is with the initialRemainingTime
                  // initialRemainingTime={remainingTime}
                  size={340}
                  style={{
                    flex: 1,
                  }}
                >
                  {({ elapsedTime }) => (
                    <Text style={{ color: '#FFC600', textAlign:'center' }}>
                      {renderTime(getTimeDays(daysDuration - (elapsedTime))," Days ")}
                    </Text>
                  )}
                </CountdownCircleTimer>
                <Text
                  style={{textAlign: 'center', marginTop: 50, color: '#05375a'}}
                >
                  {newName}
                </Text>
              </Box>
         </View>
          </NativeBaseProvider>
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
  
  export default Countdown;
  