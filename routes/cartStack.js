import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../screens/Cart/CartScreen';
import { HeaderCart } from '../shared/header';
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
              headerBackground: ()=><Image style={{width:'100%',height:'100%',resizeMode:'cover'}} source={{uri:IMAGE_URL+'background_cart.png'}}></Image>,
              headerTitle: ()=><HeaderCart drawerNavigation={navigation}></HeaderCart>
            }}
        >
        </Stack.Screen>
      </Stack.Navigator>
    )
}
