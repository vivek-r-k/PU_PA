import React from 'react'

import EditTeam from '../screens/Team/EditTeam'
import Team from '../screens/Team/TeamDetails'
import Mentor from '../screens/Mentor/MentorDetails'
import EditMentor from '../screens/Mentor/EditMentor'

import {createNativeStackNavigator} from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();

const TeamDetailsNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Team"
                component={Team}
            />
            <Stack.Screen
                name="EditTeam"
                component={EditTeam}
            />
        </Stack.Navigator>
    )
}
export {TeamDetailsNavigator}

const MentorDetailsNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Mentor"
                component={Mentor}
            />
            <Stack.Screen
                name="ForMentor"
                component={EditMentor}
            />
        </Stack.Navigator>
    )
}
export {MentorDetailsNavigator}