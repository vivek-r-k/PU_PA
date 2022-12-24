import React, { useContext, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Button,
} from 'react-native';

import {
  Box, 
  Heading, 
  AspectRatio, 
  Text, 
  Center, 
  HStack, 
  Stack, 
  NativeBaseProvider,
  Flex,
  Divider,
  TouchableHighlight,
  Fab
} from 'native-base'

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import PupaCtie from '../../navigation/PupaCtie';
import { AuthContext } from '../../navigation/AuthProvider';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Records from '../../assets/Mentor.json'
import { Avatar } from 'react-native-elements';
// import hello from '../../assets/124021.png'

const Mentor = ({navigation,route}) => {
    const { logout } = useContext(AuthContext)
    const isDarkMode = useColorScheme() === 'dark';
    const [image, setImage] = useState(null)
    const [transferred, setTransferred] = useState(0);
    const [uploading, setUploading] = useState(false);
    const [TASK, setTASK] = useState(null) //TODO:
    const [team, setTeam] = useState();

    const {user} = useContext(AuthContext)
    disp = user.displayName

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const choosePhotoFromLibrary = () => {
      ImagePicker.openPicker({
        cropping: true,
      }).then((image) => {
        console.log(image);
        const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
        setImage(imageUri);
      });
    };

    const uploadBom = async () => {
      const uploadUri = image;
      let fileName = uploadUri.substring(uploadUri.lastIndexOf('/')+1)
      
      setUploading(true);
      setTransferred(0);
      const task = storage().ref(disp+"/"+fileName).putFile(uploadUri);
      setTASK(task) //TODO:
      setTeam(null)
      task.on('state_changed', taskSnapshot => {
        console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
        setTransferred(
          Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes * 100)
          )
      });
      
      try {
        await task
        Alert.alert("Bill of material uploaded!")
        setUploading(false)
      } catch(e){
        alert(e)
      }
    }

    // TODO:
    const downloadBOM = async () => {
      try {
        await TASK;
  
        const url = await storageRef.getDownloadURL();
  
        setUploading(false);
        setImage(null);
        setTASK(null);
        // console.log(url);
        return url;
  
      } catch (e) {
        console.log(e);
        return null;
      }
    }
    return (
    <SafeAreaView>
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
              // backgroundColor: "#242B2E",
              flex: 1, justifyContent: 'center', alignItems: 'center' 
            }}>
              <PupaCtie />
              <NativeBaseProvider>                    
                <Stack space={2.5} alignSelf="center"  safeArea mt="4" width={80} >
                    <Box marginTop={10}>
                    
                      {
                          Records.map(record => {
                            if (record['Email']==user.email) {
                              // TODO: after assigning the mentors make sure to keep the matching
                              // email ids of mentor.json and csvjson.json in record.Email
                              return(
                                // TODO: update the correct id in json file
                                <View>
                                    <Text
                                      bold
                                      textAlign={'center'}
                                      marginTop={-12}
                                      // marginBottom={-5}
                                      fontSize={40}
                                    >Mentor Details</Text>
                                <Box key={record.id}>
                                  <Box>
                                      <View style={{marginTop: 10}}>
                                      <Box alignItems="center" marginTop={22}>
                                            <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                                            borderColor: "coolGray.600",
                                            backgroundColor: "gray.700"
                                            }} _web={{
                                            shadow: 2,
                                            borderWidth: 0
                                            }} _light={{
                                            backgroundColor: "gray.50"
                                            }}>
                                                <Stack p="4" space={3}>
                                                <View style={{alignItems: "center"}}>
                                                  <Avatar
                                                    rounded
                                                    size={120}
                                                    source={require('../../assets/messi.jpeg')}
                                                  />
                                                </View>
                                                <Stack space={2}>
                                                    <Heading fontSize={30} ml="-1" textAlign={'center'} >
                                                    {record.MentorDetails.Name}
                                                    </Heading>
                                                </Stack>
                                                <Text fontSize={15} textAlign={"center"} marginTop="-2" selectable>{record.MentorDetails['PhoneNo.']}</Text>
                                                <Text fontSize={15} textAlign={"center"} marginTop="-2" selectable>{record.MentorDetails.Email}</Text>
                                                <HStack marginTop={3} alignItems="center" space={2} justifyContent="center">
                                                  <Icon.Button name={'linkedin'} backgroundColor="#CAD5E2" onPress={record.MentorDetails.Linkedin} color={"#171F1D"}>
                                                      <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>Connect</Text>
                                                  </Icon.Button>
                                                      <Divider orientation="vertical" />
                                                  <Icon.Button name={'instagram'} backgroundColor="#CAD5E2" onPress={record.MentorDetails.Insta} color={"#171F1D"} >
                                                      <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>Explore</Text>
                                                  </Icon.Button>
                                                </HStack>
                                                </Stack>
                                            </Box>
                                        </Box>
                                      </View>
                                  </Box>
                                </Box>
                                </View>
                              )
                            }
                          })
                        }
                  </Box>
                </Stack>
              </NativeBaseProvider>
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
  