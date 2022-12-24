import React from 'react'

import Main from '../screens/Main/Home';

import EditTeam from '../screens/Team/EditTeam'
import Team from '../screens/Team/TeamDetails'

import Mentor from '../screens/Mentor/MentorDetails'
import ForMentor from '../screens/Mentor/EditMentor'

import Countdown from '../screens/Countdown';
import { Stack } from 'native-base';
import Schedule from '../screens/Schedule';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import Ionicons from 'react-native-vector-icons/Ionicons';


const AppStack = () => {
    return(
        <Tab.Navigator initialRouteName='Mentor' 
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
                  // else if (route.name === 'Countdown') {
                  //   iconName = focused ? 'md-timer' : 'md-timer-outline';
                  // }
      
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
            />
            <Tab.Screen 
            name="Schedule" 
            component={Schedule}
            />
            <Tab.Screen 
            name="Mentor" 
            component={Mentor}
            />
            <Tab.Screen 
            name="Team" component={Team}
            />
            {/* <Tab.Screen 
            name="Countdown" component={Countdown} 
            // options={{
            //
            /> */}
          </Tab.Navigator>
    )
}

export default AppStack;