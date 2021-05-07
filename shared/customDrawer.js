import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Title, Caption, Avatar, Switch, Drawer, TouchableRipple } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { TOKEN } from '../constant';
import { ISDARK } from '../constant';
import { getStorage, removeStorage, setStorage } from '../model/asyncStorage';
import { LinearGradient } from 'expo-linear-gradient';

export default function CustomDrawer(props) {
    const [token, setToken] = useState('');
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const switchDarkTheme = () => {
        setStorage(ISDARK, JSON.stringify(!isDarkTheme));
        setIsDarkTheme(!isDarkTheme);
    }
    useEffect(() => {
        getStorage(TOKEN).then(response => setToken(response));
        getStorage(ISDARK).then(response => setIsDarkTheme(JSON.parse(response)));

    }, []);
    const onClickSignOutHandler = () => {
        removeStorage(TOKEN);
    }
    return (
        <LinearGradient
            start={[0, 0]}
            end={[1, 1]}
            colors={isDarkTheme ? ['black', 'rgba(0,0,0,0.7)'] : ['white', 'white']}
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <DrawerContentScrollView {...props}>
                    {token ?
                        <View style={styles.drawerContent}>
                            <View style={styles.userInfor}>
                                <Avatar.Image
                                    source={require('../assets/images/12.png')}
                                    size={70}
                                    style={{ backgroundColor: '#fff' }}
                                />
                                <View style={{ marginLeft: 15 }}>
                                    <Title>Admin</Title>
                                    <Caption>dapamu333@gmail.com</Caption>
                                </View>
                            </View>
                        </View>
                        :
                        <Drawer.Section>
                            <DrawerItem
                                icon={({ size, color }) => <Ionicons name="finger-print" size={size} color={color} />}
                                label="Login"
                                onPress={() => { props.navigation.push('LoginStack') }}
                            >
                            </DrawerItem>
                        </Drawer.Section>
                    }
                    <Drawer.Section>
                        <DrawerItemList {...props} />
                    </Drawer.Section>
                    <Drawer.Section>
                        <TouchableRipple onPress={switchDarkTheme}>
                            <View style={styles.darkTheme}>
                                <Text style={{ color: isDarkTheme ? "black" : "white" }}>Dark Theme</Text>
                                <Switch value={isDarkTheme}></Switch>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </DrawerContentScrollView>
                {token ?
                    <LinearGradient
                        start={[0, 0]}
                        end={[1, 1]}
                        colors={['rgba(255, 71, 71, 1)', 'rgba(255,255,255,0.7)']}
                        style={{ borderRadius: 20, height: 50 }}
                    >
                        <Drawer.Section>
                            <DrawerItem
                                icon={({ size }) => <MaterialIcons name="exit-to-app" size={size} color={"white"} />}
                                label="Sign Out"
                                onPress={onClickSignOutHandler}
                                labelStyle={{ color: '#fff', fontSize: 14 }}
                            >
                            </DrawerItem>
                        </Drawer.Section>
                    </LinearGradient>
                    :
                    <View></View>
                }
            </View>
        </LinearGradient>
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