import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import { HeaderAbout, HeaderDetail, HeaderHome } from '../shared/header';
import DetailScreen from '../screens/Home/DetailScreen';
import AboutScreen from '../screens/Home/AboutScreen';
import ImageScreen from '../screens/Shared/ImageScreen';

const Stack = createStackNavigator();

export default function HomeStack({ navigation, iconBadge, onClickUpdateIconBadge }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerTitle: () => <HeaderHome iconBadge={iconBadge} drawerNavigation={navigation}></HeaderHome>
                }}
            >
            </Stack.Screen>
            <Stack.Screen
                name="Detail"
                children={(props)=><DetailScreen onClickUpdateIconBadge={onClickUpdateIconBadge} {...props} ></DetailScreen>}
                options={({ route }) => ({ headerTitle: () => <HeaderDetail iconBadge={iconBadge} drawerNavigation={navigation} param={route.params}></HeaderDetail> })}
            >
            </Stack.Screen>
            <Stack.Screen
                name="About"
                component={AboutScreen}
                options={({ route }) => ({ headerTitle: () => <HeaderAbout param={route.params}></HeaderAbout> })}
            >
            </Stack.Screen>
            <Stack.Screen
                name="Image"
                component={ImageScreen}
                options={{
                    title: '',
                    headerStyle: {
                        backgroundColor: 'black'
                    }
                }}
            >
            </Stack.Screen>
        </Stack.Navigator>
    )
}