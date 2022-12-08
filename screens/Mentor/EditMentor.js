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

const EditMentor = () => {
    return(
        <NativeBaseProvider>
        <ScrollView>
            <View>
                <Text textAlign={'center'} fontSize={30} >Edit Mentor Details </Text>
                <Stack space={2.5} alignSelf="center"  safeArea mt="4" width={80} >
                    <Box>
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
                            <FormControl.Label>Linkedin</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl mb="5">
                            <FormControl.Label>Department</FormControl.Label>
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

export default EditMentor