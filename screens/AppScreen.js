import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeStack from '../routes/homeStack';
import CustomDrawer from '../shared/customDrawer';
import CartStack from '../routes/cartStack';
import ProfileStack from '../routes/profileStack';
import PurchasedStack from '../routes/purchasedStack';
import { getStorage } from '../model/asyncStorage';
import { TOKEN } from '../constant';
import { countCartItem, getUser } from '../model/fetchData';


const Drawer = createDrawerNavigator();

export default function AppScreen({ onClickRouteLogin }) {
    const [iconBadge, setIconBadge] = useState(0);
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});
    useEffect(() => {
        getStorage(TOKEN).then(response => {
            if (response) {
                setToken(response);
                countCartItem(response)
                    .then(response => response.json())
                    .then(json => setIconBadge(json));
                getUser(response)
                    .then(response => response.json())
                    .then(json => setUser(json));
            }
        });
    }, []);
    const onEditUserHandler = () => {
        getUser(token)
            .then(response => response.json())
            .then(json => setUser(json));
    }
    const onClickUpdateIconBadge = (value) => {
        setIconBadge(parseInt(value));
    }
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="HomeStack"
                drawerContent={props => <CustomDrawer token={token} user={user} onClickRouteLogin={onClickRouteLogin} {...props}></CustomDrawer>}
                drawerContentOptions={{
                    activeTintColor: "orange"
                }}
            >
                <Drawer.Screen
                    name="HomeStack"
                    children={(props) => <HomeStack iconBadge={iconBadge} onClickUpdateIconBadge={onClickUpdateIconBadge} {...props}></HomeStack>}
                    options={{
                        title: 'Home',
                        drawerIcon: ({ size, color }) => <Ionicons name="home-outline" size={size} color={color} />
                    }}
                >
                </Drawer.Screen>
                <Drawer.Screen
                    name="ProfileStack"
                    children={(props) => <ProfileStack token={token} user={user} onEditUserHandler={onEditUserHandler} onClickRouteLogin={onClickRouteLogin} {...props}></ProfileStack>}
                    options={{
                        title: 'Profile',
                        drawerIcon: ({ size, color }) => <MaterialCommunityIcons name="account-outline" size={size} color={color} />
                    }}
                >
                </Drawer.Screen>
                <Drawer.Screen
                    name="CartStack"
                    children={(props) => <CartStack onClickRouteLogin={onClickRouteLogin} onClickUpdateIconBadge={onClickUpdateIconBadge} {...props}></CartStack>}
                    options={{
                        title: 'Cart',
                        drawerIcon: ({ size, color }) => <AntDesign name="shoppingcart" size={size} color={color} />
                    }}
                >
                </Drawer.Screen>
                <Drawer.Screen
                    name="PurchasedScreen"
                    children={(props) => <PurchasedStack token={token} onClickRouteLogin={onClickRouteLogin} {...props}></PurchasedStack>}
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