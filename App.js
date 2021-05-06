import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LoginStack from './routes/loginStack';
import HomeStack from './routes/homeStack';
import CustomDrawer from './shared/customDrawer';
import ProflieScreen from './screens/ProfileScreen';
import { TOKEN } from './constant';
import { getStorage } from './model/asyncStorage';

const Drawer = createDrawerNavigator();

export default function App() {
  const [token, setToken] = useState('');
  useEffect(() => {
    getStorage(TOKEN).then(response => setToken(response));
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
            drawerIcon: ({ size, color }) => <Ionicons name="home-outline" size={size} color={color} />
          }}
        >
        </Drawer.Screen>
        <Drawer.Screen
          name="ProfileScreen"
          component={ProflieScreen}
          options={{
            title: 'Profile',
            drawerIcon: ({ size, color }) => <MaterialCommunityIcons name="account-outline" size={size} color={color} />
          }}
        >
        </Drawer.Screen>
        <Drawer.Screen
          name="PurchasedScreen"
          component={ProflieScreen}
          options={{
            title: 'Purchased',
            drawerIcon: ({ size, color }) => <MaterialCommunityIcons name="av-timer" size={size} color={color} />
          }}
        >
        </Drawer.Screen>
        <Drawer.Screen
          name="ContactScreen"
          component={ProflieScreen}
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
