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
import ContactStack from '../routes/contactStack';
import { getStorage, setStorage } from '../model/asyncStorage';
import { ISDARK, TOKEN } from '../constant';
import { countCartItem, getUser, loadCart, loadPurchased, loadHistory, loadFeedback } from '../model/fetchData';

const Drawer = createDrawerNavigator();

export default function AppScreen({ onClickRouteLogin }) {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [iconBadge, setIconBadge] = useState(0);
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});
    const [listCart, setListCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [listPurchased, setListPurchased] = useState([]);
    const [listHistory, setListHistory] = useState([]);
    const [listFeedback, setListFeedback] = useState([]);
    const [countUnread, setCounUnread] = useState(0);
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
                loadCart(response)
                    .then(response => response.json())
                    .then(json => {
                        setListCart(JSON.parse(json['ListCart']));
                        setTotalPrice(JSON.parse(json['TotalPrice']));
                    });
                loadPurchased(response)
                    .then(response => response.json())
                    .then(json => setListPurchased(json));
                loadHistory(response)
                    .then(response => response.json())
                    .then(json => setListHistory(json));
                loadFeedback(response)
                    .then(response => response.json())
                    .then(json => {
                        setCounUnread(JSON.parse(json['CountUnread']));
                        setListFeedback(JSON.parse(json['ListFeedback']));
                    });
            }
        });
        getStorage(ISDARK).then(response => {
            if (response) {
                setIsDarkTheme(JSON.parse(response));
            }
        })
    }, []);
    const onSwapDarkHandler = () => {
        setIsDarkTheme(!isDarkTheme);
        setStorage(ISDARK, JSON.stringify(!isDarkTheme));
    }
    const onEditUserHandler = () => {
        getUser(token)
            .then(response => response.json())
            .then(json => setUser(json));
    }
    const onLoadCartHandler = () => {
        loadCart(token)
            .then(response => response.json())
            .then(json => {
                setListCart(JSON.parse(json['ListCart']));
                setTotalPrice(JSON.parse(json['TotalPrice']));
            });
    }
    const onLoadListPurchased = () => {
        loadPurchased(token)
            .then(response => response.json())
            .then(json => setListPurchased(json));
    }
    const onLoadHistory = () => {
        loadHistory(token)
            .then(response => response.json())
            .then(json => setListHistory(json));
    }
    const onClickUpdateIconBadge = (value) => {
        setIconBadge(parseInt(value));
    }
    const onLoadFeedback = () => {
        loadFeedback(token)
            .then(response => response.json())
            .then(json => {
                setCounUnread(JSON.parse(json['CountUnread']));
                setListFeedback(JSON.parse(json['ListFeedback']));
            });
    }
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="HomeStack"
                drawerContent={props => <CustomDrawer
                    isDarkTheme={isDarkTheme}
                    onSwapDarkHandler={onSwapDarkHandler}
                    token={token}
                    onClickRouteLogin={onClickRouteLogin}
                    user={user} {...props}>
                </CustomDrawer>}
                drawerContentOptions={{
                    activeTintColor: "orange",
                    inactiveTintColor: isDarkTheme ? '#fff' : 'gray'
                }}
            >
                <Drawer.Screen
                    name="HomeStack"
                    children={(props) => <HomeStack
                        isDarkTheme={isDarkTheme}
                        iconBadge={iconBadge}
                        onClickUpdateIconBadge={onClickUpdateIconBadge}
                        token={token}
                        onLoadCartHandler={onLoadCartHandler} {...props}></HomeStack>}
                    options={{
                        title: 'Home',
                        drawerIcon: ({ size, color }) => <Ionicons name="home-outline" size={size} color={color} />
                    }}
                >
                </Drawer.Screen>
                <Drawer.Screen
                    name="ProfileStack"
                    children={(props) => <ProfileStack
                        isDarkTheme={isDarkTheme}
                        token={token}
                        onClickRouteLogin={onClickRouteLogin}
                        user={user}
                        onEditUserHandler={onEditUserHandler}
                        listHistory={listHistory} {...props}></ProfileStack>}
                    options={{
                        title: 'Profile',
                        drawerIcon: ({ size, color }) => <MaterialCommunityIcons name="account-outline" size={size} color={color} />
                    }}
                >
                </Drawer.Screen>
                <Drawer.Screen
                    name="CartStack"
                    children={(props) => <CartStack
                        isDarkTheme={isDarkTheme}
                        totalPrice={totalPrice}
                        onClickUpdateIconBadge={onClickUpdateIconBadge}
                        token={token}
                        onClickRouteLogin={onClickRouteLogin}
                        listCart={listCart}
                        onLoadCartHandler={onLoadCartHandler}
                        onLoadListPurchased={onLoadListPurchased}
                        onLoadHistory={onLoadHistory} {...props}></CartStack>}
                    options={{
                        title: 'Cart',
                        drawerIcon: ({ size, color }) => <AntDesign name="shoppingcart" size={size} color={color} />
                    }}
                >
                </Drawer.Screen>
                <Drawer.Screen
                    name="PurchasedScreen"
                    children={(props) => <PurchasedStack
                        isDarkTheme={isDarkTheme}
                        iconBadge={iconBadge}
                        onClickUpdateIconBadge={onClickUpdateIconBadge}
                        token={token}
                        onClickRouteLogin={onClickRouteLogin}
                        onLoadCartHandler={onLoadCartHandler}
                        listPurchased={listPurchased}
                        onLoadListPurchased={onLoadListPurchased} {...props}></PurchasedStack>}
                    options={{
                        title: 'Purchased',
                        drawerIcon: ({ size, color }) => <MaterialCommunityIcons name="av-timer" size={size} color={color} />
                    }}
                >
                </Drawer.Screen>
                <Drawer.Screen
                    name="ContactStack"
                    children={(props) => <ContactStack
                        isDarkTheme={isDarkTheme}
                        token={token}
                        countUnread={countUnread}
                        listFeedback={listFeedback}
                        onLoadFeedback={onLoadFeedback} {...props}></ContactStack>}
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