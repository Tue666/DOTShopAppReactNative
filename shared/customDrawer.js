import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {
    Title,
    Caption,
    Avatar,
    Switch,
    Drawer,
    TouchableRipple,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from '@react-navigation/drawer';

export default function CustomDrawer(props) {
    const [isDarkTheme,setIsDarkTheme] = useState(false);
    const switchDarkTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
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
                    <DrawerItemList {...props} />
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