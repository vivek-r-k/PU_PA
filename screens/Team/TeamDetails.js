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
  ActivityIndicator
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import PupaCtie from '../../navigation/PupaCtie';
import EditTeam from './EditTeam';
import {FormControl, Input, Fab, NativeBaseProvider, Stack, Box, Button, Text} from 'native-base'
import { AuthContext } from '../../navigation/AuthProvider';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Records from '../../assets/csvjson.json'

const Team = ({navigation,route}) => {
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
              // backgroundColor: isDarkMode ? Colors.black : Colors.white,
              flex: 1, justifyContent: 'center', alignItems: 'center' 
            }}>
              <PupaCtie />
              <NativeBaseProvider>
                    <Fab onPress={() => logout()} placement='top-right' shadow={2} size="sm" icon={<Icons name={"logout"} size={20} color={"#000000"} />} />
                <Stack space={2.5} alignSelf="center"  safeArea mt="4" width={80} >
                    <Box marginTop={10}>
                    
                      {
                          Records.map(record => {
                            if (record['Email']==user.email) {
                          
                              return(
                                // TODO: update the correct id in json file
                                <Box key={record.id}>
                                  <Box>
                                      <Text fontSize={25} bold >{record.TeamDetails.Member1.Name}</Text>
                                      <Text fontSize={20}>{record.TeamDetails.Member1['PhoneNo.']}</Text>
                                      <Text fontSize={20}>{record.TeamDetails.Member1.Email}</Text>
                                  </Box>
                                  <Box marginTop={4}>
                                      <Text fontSize={25} bold >{record.TeamDetails.Member2.Name}</Text>
                                      <Text fontSize={20}>{record.TeamDetails.Member2['PhoneNo.']}</Text>
                                      <Text fontSize={20}>{record.TeamDetails.Member2.Email}</Text>
                                  </Box>
                                  <Box marginTop={4}>
                                      <Text fontSize={25} bold >{record.TeamDetails.Member3.Name}</Text>
                                      <Text fontSize={20}>{record.TeamDetails.Member3['PhoneNo.']}</Text>
                                      <Text fontSize={20}>{record.TeamDetails.Member3.Email}</Text>
                                  </Box>
                                  <Box marginTop={4}>
                                      <Text fontSize={25} bold >{record.TeamDetails.Member4.Name}</Text>
                                      <Text fontSize={20}>{record.TeamDetails.Member4['PhoneNo.']}</Text>
                                      <Text fontSize={20}>{record.TeamDetails.Member4.Email}</Text>
                                  </Box>
                                </Box>
                              )
                            }
                          })
                        }
                      {
                        uploading ? (
                          <View>
                            <Text style={{color: "#05375a"}} >{transferred}% Completed!</Text>
                            <ActivityIndicator size={'large'} color="#0000ff" />
                          </View>
                        ) : (
                          <View style={{marginTop: 30}}>
                            <Text style={{alignSelf: 'center'}}>Select and upload Bill of Material</Text>
                            <Button onPress={choosePhotoFromLibrary} marginBottom='1' marginTop={2} colorScheme='info' >Select BOM</Button>
                            <Button onPress={uploadBom} colorScheme='info'>Upload</Button>
                          </View>
                        )
                      }
                      {/* <Button onPress={downloadBOM}>Download BOM</Button> */}
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
  
  export default Team;
  