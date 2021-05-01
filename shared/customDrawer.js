import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {
    Title,
    Caption,
    Avatar,
    Switch,
    Drawer,
    TouchableRipple
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

export default function CustomDrawer(props) {
    const [isDarkTheme,setIsDarkTheme] = useState(false);
    const switchDarkTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }
    return (
        <View style={styles.container}>
            <DrawerContentScrollView>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfor}>
                        <Avatar.Image
                            source={require('../assets/images/12.png')}
                            size={70}
                            style={{backgroundColor:'#fff'}}
                        />
                        <View style={{marginLeft: 15}}>
                            <Title>Admin</Title>
                            <Caption>dapamu333@gmail.com</Caption>
                        </View>
                    </View>
                </View>
                <Drawer.Section>
                    <DrawerItem
                        focused={true}
                        icon={({size,color})=><Ionicons name="home-outline" size={size} color={color} />}
                        label="Home"
                        onPress={()=>{props.navigation.navigate('HomeStack')}}
                    >
                    </DrawerItem>
                    <DrawerItem
                        icon={({size,color})=><MaterialCommunityIcons name="account-outline" size={size} color={color} />}
                        label="Profile"
                        onPress={()=>{props.navigation.navigate('ProfileScreen')}}
                    >
                    </DrawerItem>
                    <DrawerItem
                        icon={({size,color})=><MaterialCommunityIcons name="av-timer" size={size} color={color} />}
                        label="Purchased"
                    >
                    </DrawerItem>
                    <DrawerItem
                        icon={({size,color})=><MaterialCommunityIcons name="contacts-outline" size={size} color={color} />}
                        label="Contact"
                    >
                    </DrawerItem>
                </Drawer.Section>
                <Drawer.Section>
                    <TouchableRipple onPress={switchDarkTheme}>
                        <View style={styles.darkTheme}>
                            <Text>Dark Theme</Text>
                            <Switch value={isDarkTheme}></Switch>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section>
                <DrawerItem
                    icon={({size,color})=><MaterialIcons name="exit-to-app" size={size} color={color} />}
                    label="Sign Out"
                >
                </DrawerItem>
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    userInfor: {
        flexDirection: 'row',
        marginBottom: 15
    },
    darkTheme: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    }
});