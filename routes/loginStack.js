import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login/LoginScreen';
import RegisterScreen from '../screens/Login/RegisterScreen';


const Stack = createStackNavigator();

export default function LoginStack({ navigation }) {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Login" children={(props)=><LoginScreen drawerNavigation={navigation} {...props}></LoginScreen>} options={{title:''}} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{title:''}} />
      </Stack.Navigator>
  );
}