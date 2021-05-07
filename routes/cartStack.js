import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../screens/Cart/CartScreen';
import { HeaderCart } from '../shared/header';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import { IMAGE_URL } from '../core/config';

const Stack = createStackNavigator();

export default function CartStack({ navigation }) {
    return (
      <Stack.Navigator>
        <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{
                headerBackImage: ()=><Image source={{uri:IMAGE_URL+'laptop1.png'}}></Image>,
                headerTitle: ()=><HeaderCart drawerNavigation={navigation}></HeaderCart>
            }}
        >
        </Stack.Screen>
      </Stack.Navigator>
    )
}
