import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import HomeStack from './routes/homeStack';
import CustomDrawer from './shared/customDrawer';
import ProflieScreen from './screens/ProfileScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props=><CustomDrawer {...props}></CustomDrawer>}>
        <Drawer.Screen
          name="HomeStack"
          component={HomeStack}
          options={{title:'Home'}}
          >
        </Drawer.Screen>
        <Drawer.Screen
          name="ProfileScreen"
          component={ProflieScreen}
          options={{title:'Profile'}}
          >
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
