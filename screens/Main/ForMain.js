import React, { useState, useCallback, useContext } from "react";
import {Linking, TouchableOpacity} from 'react-native'
import { 
    Box, 
    Heading, 
    AspectRatio, 
    Image, 
    Text, 
    Center, 
    HStack, 
    Stack, 
    NativeBaseProvider,
    ScrollView,
    Flex,
    Divider,
    TouchableHighlight,
    Button
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Cr from 'react-native-vector-icons/FontAwesome5';
import YoutubePlayer from "react-native-youtube-iframe";
import { AuthContext } from "../../navigation/AuthProvider";
import Records from '../../assets/csvjson.json'

const ForMain = () => {
    ctieWeb = () => {
        Linking.openURL('https://www.klectie.com/')
    }
    ctieLink = () => {
        Linking.openURL('https://www.linkedin.com/school/kletechbvb/')
    }
    ctieInsta = () => {
        Linking.openURL('https://www.instagram.com/KLETechbvb/')
    }
    Ekletech = () => {
        Linking.openURL('https://instagram.com/e_kletech?igshid=YmMyMTA2M2Y=')
    }
    googleMap = () => {
        Linking.openURL('https://www.google.com/maps/place/KLE+Technological+University/@15.3688332,75.1213796,15z/data=!4m2!3m1!1s0x0:0xa247612556cc78b3?sa=X&ved=2ahUKEwjb_Ibm6Yr7AhVr6jgGHeWWCIsQ_BJ6BAhoEAU')
    }
    const [playing, setPlaying] = useState(false);
    const {user} = useContext(AuthContext)

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);
  return (
    <SafeAreaView>
        <ScrollView>
            {
                Records.map(record => {
                    if (record['Email']==user.email) {
                  
                      return(
                        <Heading
                            marginTop={17}
                            size="2xl" 
                            textAlign={'center'}
                            key={record.id}
                            >
                                WELCOME {record['TeamName:']}
                        </Heading>
                      )
                    }
                  })
            }
            
            <Text 
                italic
                textAlign={'center'}
                >
                    Reach out to the cocoon of entrepreneur in you and get ready to flourish and fly
            </Text>

            {/* PUPA */}
            <Box alignItems="center" marginTop={22}>
                <Box  width={80} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
                }} _web={{
                shadow: 2,
                borderWidth: 0
                }} _light={{
                backgroundColor: "gray.50"
                }}>
                    <Box>
                    <AspectRatio w="100%" ratio={16 / 9}>
                        <Image width={318.5} height={190} source={require('../../assets/LastPupa/PUPA.jpg')} alt="image" />
                    </AspectRatio>
                    </Box>
                    <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1" textAlign={'center'} >
                        PUPA
                        </Heading>
                    </Stack>
                    <Text fontWeight="400" textAlign={'center'}>
                    PUPA is an accelerated event that instills entrepreneurial qualities in a juvenile mindset. 
                    As the name suggests, PUPA is a transient yet thriving state where student teams accumulate 
                    essential resources and exhibit their final products within four weeks.
                    </Text>
                    
                    </Stack>
                </Box>
            </Box>

                {/* Imgs of last pupa */}
            <Text
            bold
            textAlign={'center'}
            marginTop={28}
            marginBottom={-5}
            fontSize={20}
            
            >PUPA 2019</Text>
            <ScrollView horizontal marginBottom={5}>
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
                        <Box>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image width={318.5} height={190} source={require('../../assets/LastPupa/1.jpg')} alt="image" />
                        </AspectRatio>
                        </Box>
                        
                    </Box>
                </Box>
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
                        <Box>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image width={318.5} height={190} source={require('../../assets/LastPupa/2.jpg')} alt="image" />
                        </AspectRatio>
                        </Box>
                    </Box>
                </Box>
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
                        <Box>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image width={318.5} height={190} source={require('../../assets/LastPupa/3.jpg')} alt="image" />
                        </AspectRatio>
                        </Box>
                    </Box>
                </Box>
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
                        <Box>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image width={318.5} height={190} source={require('../../assets/LastPupa/4.jpg')} alt="image" />
                        </AspectRatio>
                        </Box>
                    </Box>
                </Box>
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
                        <Box>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image width={318.5} height={190} source={require('../../assets/LastPupa/5.jpg')} alt="image" />
                        </AspectRatio>
                        </Box>
                    </Box>
                </Box>
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
                        <Box>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image width={318.5} height={190} source={require('../../assets/LastPupa/6.jpg')} alt="image" />
                        </AspectRatio>
                        </Box>
                    </Box>
                </Box>
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
                        <Box>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image width={318.5} height={190} source={require('../../assets/LastPupa/7.jpg')} alt="image" />
                        </AspectRatio>
                        </Box>
                    </Box>
                </Box>
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
                        <Box>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image width={318.5} height={190} source={require('../../assets/LastPupa/8.jpg')} alt="image" />
                        </AspectRatio>
                        </Box>
                    </Box>
                </Box>
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
                        <Box>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image width={318.5} height={190} source={require('../../assets/LastPupa/9.jpg')} alt="image" />
                        </AspectRatio>
                        </Box>
                    </Box>
                </Box>
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
                        <Box>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image width={318.5} height={190} source={require('../../assets/LastPupa/10.jpg')} alt="image" />
                        </AspectRatio>
                        </Box>
                    </Box>
                </Box>
            </ScrollView>

            <YoutubePlayer
                height={300}
                play={playing}
                videoId={"BKSTMeIhiyw"}
                onChangeState={onStateChange}
            />
                {/* About Ctie */}
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
                    <Box>
                    <AspectRatio w="100%" ratio={16 / 9}>
                        <Image width={318.5} height={190} source={require('../../assets/LastPupa/techpark.jpeg')} alt="image" />
                    </AspectRatio>
                    </Box>
                    <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1" textAlign={'center'} >
                        KLECTIE
                        </Heading>
                    </Stack>
                    <Text fontWeight="400" textAlign={'center'}>
                    KLE - CTIE is pioneer in the region to support entrepreneurs establish successful businesses. 
                    Its incubation program is startup-friendly with minimal overhead on startup. At the same time, 
                    benefits provided are immense. The local ecosystem and being part of University, helps startup 
                    evolve business that fits the era. 
                    </Text>
                    
                    <HStack marginTop={-2} alignItems="center" space={2} justifyContent="center">
                        <Icon.Button name={'web-box'} backgroundColor="#FFC600" onPress={this.ctieWeb} color={"#171F1D"}>
                            <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>Visit</Text>
                        </Icon.Button>
                            <Divider orientation="vertical" />
                        <Icon.Button name={'linkedin'} backgroundColor="#FFC600" onPress={this.ctieLink} color={"#171F1D"}>
                            <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>Connect</Text>
                        </Icon.Button>
                            <Divider orientation="vertical" />
                        <Icon.Button name={'instagram'} backgroundColor="#FFC600" onPress={this.ctieInsta} color={"#171F1D"} >
                            <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>Explore</Text>
                        </Icon.Button>
                    </HStack>

                    </Stack>
                </Box>
            </Box>

                {/* About E-Kletech */}
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
                    <Box>
                    <AspectRatio w="100%" ratio={16 / 9}>
                        <Image width={318.5} height={190} source={require('../../assets/LastPupa/Ekle.jpeg')} alt="image" />
                    </AspectRatio>
                    </Box>
                    <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1" textAlign={'center'} >
                        E-KLETECH 
                        </Heading>
                    </Stack>
                        <Text marginTop={-4} textAlign={'center'}>(formerly known as Make in BVB)</Text>
                    <Text fontWeight="400" textAlign={'center'}>
                    E-KLE Tech (formerly known as Make in BVB) is a student body organization under KLE CTIE. 
                    The club aims to inculcate skills like leadership, communication and entrepreneurship in students 
                    by conducting seminars, activities and events. 
                    </Text>
                    
                    <HStack marginTop={-2} alignItems="center" space={4} justifyContent="center">
                        <Icon.Button name={'instagram'} backgroundColor="#FFC600" onPress={this.Ekletech} color={"#171F1D"} >
                            <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>Explore</Text>
                        </Icon.Button>                    
                    </HStack>
                    </Stack>
                </Box>
            </Box>
            <Box alignItems="center" marginTop={22}>
                {/* TODO: Add map link of our college */}
                <Text
                   bold
                   textAlign={'center'}
                   marginTop={28}
                   marginBottom={-5}
                   fontSize={20}
                >Location</Text>         
                <Box alignItems="center" marginTop={22}>
                    <Box maxW="80" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700"
                    }} _web={{
                    shadow: 2,
                    borderWidth: 0
                    }} _light={{
                    backgroundColor: "gray.50"
                    }}>
                       
                        <Box>
                            <AspectRatio w="100%" ratio={16 / 9}>
                                <TouchableOpacity onPress={() => this.googleMap()}>
                                    <Image width={318.5} height={190} source={require('../../assets/LastPupa/map.jpeg')} alt="image" />
                                </TouchableOpacity>
                            </AspectRatio>
                        </Box>
                        
                    </Box>
                </Box>
                <Divider marginTop={4} marginBottom={2.5} />
                <Cr name={'copyright'} backgroundColor="#FFC600"  color={"#171F1D"} >
                <Text style={{ fontFamily: 'Arial', fontSize: 10 }}> All rights reserved</Text>
                </Cr>
            </Box>
        </ScrollView>
    </SafeAreaView>
    );
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <ForMain />
            </Center>
          </NativeBaseProvider>
        );
    };
    