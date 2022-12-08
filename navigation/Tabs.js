import React from 'react';
import {TouchableOpacity} from 'react-native'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import { useNavigation } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

// screens
import Main from '../screens/Main/Home'
import Schedule from '../screens/Schedule';
import Countdown from '../screens/Countdown'

import {TeamDetailsNavigator, MentorDetailsNavigator} from './CustomNavigation'

const Tabs = () => {
   const navigation = useNavigation();
    return (
    <Tab.Navigator initialRouteName='Main' 
        screenOptions = {
            ({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Main') {
                    iconName = focused ? 'md-home' : 'md-home-outline';
                  } 
                  else if (route.name === 'Team') {
                    iconName = focused ? 'md-people' : 'md-people-outline';
                  }
                  else if (route.name === 'Mentor') {
                    iconName = focused ? 'md-person' : 'md-person-outline';
                  }
                  else if (route.name === 'Schedule') {
                    iconName = focused ? 'videocam' : 'videocam-outline';
                  }
                  else if (route.name === 'Countdown') {
                    iconName = focused ? 'md-timer' : 'md-timer-outline';
                  }
      
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#171F1D',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false, 
                headerShown: false,
              })
        }>
            <Tab.Screen 
            name="Main" component={Main} 
            // options={{
            // tabBarButton: props => (<TouchableOpacity {...props} onPress={() => navigation.navigate('Main')} />),
            // }} 
            />
            <Tab.Screen 
            name="Team" component={TeamDetailsNavigator} 
            // options={{
            // tabBarButton: props => (<TouchableOpacity {...props} onPress={() => navigation.navigate('Team')} />),
            // }} 
            />
            <Tab.Screen 
            name="Mentor" 
            component={MentorDetailsNavigator}  
            // options={{
            //   tabBarButton: props => (<TouchableOpacity {...props} onPress={() => navigation.navigate('Mentor')} />),
            // }}
            />
            <Tab.Screen 
            name="Schedule" 
            component={Schedule}  
            // options={{
            //   tabBarButton: props => (<TouchableOpacity {...props} onPress={() => navigation.navigate('Schedule')} />),
            // }}
            />
            <Tab.Screen 
            name="Countdown" component={Countdown} 
            // options={{
            // tabBarButton: props => (<TouchableOpacity {...props} onPress={() => navigation.navigate('Countdown')} />),
            // headerShown: false,
            // }} 
            />
          </Tab.Navigator>
  );
}

export default Tabs;