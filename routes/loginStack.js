import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login/LoginScreen';
import RegisterScreen from '../screens/Login/RegisterScreen';

const Stack = createStackNavigator();

export default function LoginStack({ onClickRouteApp }) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" children={(props) => <LoginScreen onClickRouteApp={onClickRouteApp} {...props}></LoginScreen>} options={{ title: '' }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: '' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}