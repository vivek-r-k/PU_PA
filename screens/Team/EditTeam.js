import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  
  useColorScheme,
  View,
  Image
} from 'react-native';
import {FormControl, Box, Stack, Input, Button,Text, WarningOutlineIcon, NativeBaseProvider, Center} from 'native-base'

const EditTeam = () => {
    return(
        <NativeBaseProvider>
        <ScrollView>
            <View>
                <Text textAlign={'center'} fontSize={30} >Edit Team Details </Text>
                <Stack space={2.5} alignSelf="center"  safeArea mt="4" width={80} >
                    <Box>
                        <Text bold fontSize="xl" mb="4">
                            Team Member 1 (Lead)
                        </Text>
                        <FormControl mb="5" >
                            <FormControl.Label>Name</FormControl.Label>
                            <Input  />
                        </FormControl>
                        <FormControl mb="5">
                            <FormControl.Label>Email id</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl mb="5">
                            <FormControl.Label>Phone number</FormControl.Label>
                            <Input keyboardType='numeric' />
                        </FormControl>
                        <FormControl mb="5">
                            <FormControl.Label>Place</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl mb="5">
                            <FormControl.Label>College</FormControl.Label>
                            <Input />
                        </FormControl>
                    </Box>
                    <Box>
                        <Text bold fontSize="xl" mb="4">
                            Team Member 2 
                        </Text>
                        <FormControl mb="5">
                            <FormControl.Label>Name</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl mb="5">
                            <FormControl.Label>Email id</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl mb="5">
                            <FormControl.Label>Phone number</FormControl.Label>
                            <Input keyboardType='numeric'/>
                        </FormControl>
                        <FormControl mb="5">
                            <FormControl.Label>Place</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl mb="5">
                            <FormControl.Label>College</FormControl.Label>
                            <Input />
                        </FormControl>
                    </Box>
                    <Box>
                        <Text bold fontSize="xl" mb="4">
                            Team Member 3 
                        </Text>
                        <FormControl mb="5">
                            <FormControl.Label>Name</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl mb="5">
                            <FormControl.Label>Email id</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl mb="5">
                            <FormControl.Label>Phone number</FormControl.Label>
                            <Input keyboardType='numeric'/>
                        </FormControl>
                        <FormControl mb="5">
                            <FormControl.Label>Place</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl mb="5">
                            <FormControl.Label>College</FormControl.Label>
                            <Input />
                        </FormControl>
                    </Box>
                    <Box>
                        <Text bold fontSize="xl" mb="4">
                            Team Member 4 
                        </Text>
                        <FormControl mb="5">
                            <FormControl.Label>Name</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl mb="5">
                            <FormControl.Label>Email id</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl mb="5">
                            <FormControl.Label>Phone number</FormControl.Label>
                            <Input keyboardType='numeric'/>
                        </FormControl>
                        <FormControl mb="5">
                            <FormControl.Label>Place</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl mb="5">
                            <FormControl.Label>College</FormControl.Label>
                            <Input />
                        </FormControl>
                    </Box>
                    <Button transparent color={"#FFC600"}>
                        <Text>Update</Text>
                    </Button>
                </Stack>
            </View>
        </ScrollView>
        </NativeBaseProvider>
    )
}

export default EditTeam