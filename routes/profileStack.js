import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const Stack = createStackNavigator();

export default function ProfileStack({ navigation }) {
    return (
      <Stack.Navigator>
        <Stack.Screen
            name="Profil"
            component={ProfileScreen}
        >
        </Stack.Screen>
      </Stack.Navigator>
    )
}
