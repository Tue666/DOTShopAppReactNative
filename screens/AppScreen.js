import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeStack from '../routes/homeStack';
import CustomDrawer from '../shared/customDrawer';
import CartStack from '../routes/cartStack';
import ProfileStack from '../routes/profileStack';

const Drawer = createDrawerNavigator();

export default function AppScreen({ onClickRouteLogin }) {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="HomeStack"
                drawerContent={props => <CustomDrawer onClickRouteLogin={onClickRouteLogin} {...props}></CustomDrawer>}
                drawerContentOptions={{
                    activeTintColor: "orange"
                }}
            >
                <Drawer.Screen
                    name="HomeStack"
                    component={HomeStack}
                    options={{
                        title: 'Home',
                        drawerIcon: ({ size, color }) => <Ionicons name="home-outline" size={size} color={color} />
                    }}
                >
                </Drawer.Screen>
                <Drawer.Screen
                    name="ProfileScreen"
                    children={(props)=><ProfileStack onClickRouteLogin={onClickRouteLogin} {...props}></ProfileStack>}
                    options={{
                        title: 'Profile',
                        drawerIcon: ({ size, color }) => <MaterialCommunityIcons name="account-outline" size={size} color={color} />
                    }}
                >
                </Drawer.Screen>
                <Drawer.Screen
                    name="CartStack"
                    component={CartStack}
                    options={{
                        title: 'Cart',
                        drawerIcon: ({ size, color }) => <AntDesign name="shoppingcart" size={size} color={color} />
                    }}
                >
                </Drawer.Screen>
                <Drawer.Screen
                    name="PurchasedScreen"
                    component={ProfileStack}
                    options={{
                        title: 'Purchased',
                        drawerIcon: ({ size, color }) => <MaterialCommunityIcons name="av-timer" size={size} color={color} />
                    }}
                >
                </Drawer.Screen>
                <Drawer.Screen
                    name="ContactScreen"
                    component={ProfileStack}
                    options={{
                        title: 'Contact',
                        drawerIcon: ({ size, color }) => <MaterialCommunityIcons name="contacts-outline" size={size} color={color} />
                    }}
                >
                </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}