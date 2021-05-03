import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeStack from './routes/homeStack';
import CustomDrawer from './shared/customDrawer';
import ProflieScreen from './screens/ProfileScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeStack" drawerContent={props=><CustomDrawer {...props}></CustomDrawer>}>
        <Drawer.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            title:'Home',
            drawerIcon: ({size,color})=><Ionicons name="home-outline" size={size} color={color} />
          }}
          >
        </Drawer.Screen>
        <Drawer.Screen
          name="ProfileScreen"
          component={ProflieScreen}
          options={{
            title:'Profile',
            drawerIcon: ({size,color})=><MaterialCommunityIcons name="account-outline" size={size} color={color} />
          }}
          >
        </Drawer.Screen>
        <Drawer.Screen
          name="PurchasedScreen"
          component={ProflieScreen}
          options={{
            title:'Purchased',
            drawerIcon: ({size,color})=><MaterialCommunityIcons name="av-timer" size={size} color={color} />
          }}
          >
        </Drawer.Screen>
        <Drawer.Screen
          name="ContactScreen"
          component={ProflieScreen}
          options={{
            title:'Contact',
            drawerIcon: ({size,color})=><MaterialCommunityIcons name="contacts-outline" size={size} color={color} />
          }}
          >
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
