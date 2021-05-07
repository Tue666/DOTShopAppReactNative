import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LoginStack from './routes/loginStack';
import HomeStack from './routes/homeStack';
import CustomDrawer from './shared/customDrawer';
import { TOKEN } from './constant';
import { ISDARK } from './constant';
import { getStorage, removeStorage, setStorage } from './model/asyncStorage';
import CartStack from './routes/cartStack';
import ProfileStack from './routes/profileStack';

const Drawer = createDrawerNavigator();

export default function App() {
  const [token, setToken] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  useEffect(() => {
    getStorage(TOKEN).then(response => setToken(response));
    getStorage(ISDARK).then(response => {
      if (response === undefined) {
        setStorage(ISDARK, JSON.stringify(isDarkTheme));
      }
      else {
        setIsDarkTheme(JSON.parse(response));
      }
    });
  }, []);
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeStack" drawerContent={props => <CustomDrawer {...props}></CustomDrawer>}>
        {/* {!token ?
          <Drawer.Screen
            name="LoginStack"
            component={LoginStack}
            options={{
              title: 'Login',
              drawerIcon: ({ size, color }) => <Ionicons name="home-outline" size={size} color={color} />

            }}
          >
          </Drawer.Screen>
          :
          <View></View>
        } */}
        <Drawer.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            title: 'Home',
            drawerIcon: ({ size }) => <Ionicons name="home-outline" size={size} color={isDarkTheme ? "white" : "black"} />
          }}
        >
        </Drawer.Screen>
        <Drawer.Screen
          name="ProfileScreen"
          component={ProfileStack}
          options={{
            title: 'Profile',
            drawerIcon: ({ size }) => <MaterialCommunityIcons name="account-outline" size={size} color={isDarkTheme ? "white" : "black"} />
          }}
        >
        </Drawer.Screen>
        <Drawer.Screen
          name="CartStack"
          component={CartStack}
          options={{
            title: 'Cart',
            drawerIcon: ({ size }) => <AntDesign name="shoppingcart" size={size} color={isDarkTheme ? "white" : "black"} />
          }}
        >
        </Drawer.Screen>
        <Drawer.Screen
          name="PurchasedScreen"
          component={ProfileStack}
          options={{
            title: 'Purchased',
            drawerIcon: ({ size }) => <MaterialCommunityIcons name="av-timer" size={size} color={isDarkTheme ? "white" : "black"} />
          }}
        >
        </Drawer.Screen>
        <Drawer.Screen
          name="ContactScreen"
          component={ProfileStack}
          options={{
            title: 'Contact',
            drawerIcon: ({ size }) => <MaterialCommunityIcons name="contacts-outline" size={size} color={isDarkTheme ? "white" : "black"} />
          }}
        >
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
