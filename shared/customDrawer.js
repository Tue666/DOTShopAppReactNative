import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Title, Caption, Avatar, Switch, Drawer, TouchableRipple } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { TOKEN } from '../constant';
import { getStorage, removeStorage } from '../model/asyncStorage';
import { LinearGradient } from 'expo-linear-gradient';
import { IMAGE_URL } from '../core/config';

export default function CustomDrawer({ onClickRouteLogin, ...props }) {
    const [token, setToken] = useState('');
    useEffect(() => {
        getStorage(TOKEN).then(response => setToken(response));

    }, []);
    const onClickSignOutHandler = () => {
        removeStorage(TOKEN);
        onClickRouteLogin();
    }
    return (
        <LinearGradient
            start={[1, 0]}
            end={[0, 1]}
            colors={['#fff','rgba(248, 191, 115,0.4)']}
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                {token ?
                    <View style={styles.login}>
                        <ImageBackground style={styles.backgroundImage} source={{ uri: IMAGE_URL + 'background_drawer.png' }}>
                            <View style={styles.userInfor}>
                                <Avatar.Image
                                    source={require('../assets/images/12.png')}
                                    size={100}
                                    style={{ backgroundColor: 'transparent',borderWidth: 1,borderColor:'#fff' }}
                                />
                                <View style={{justifyContent:'center',alignItems:'center'}}>
                                    <Title>Admin</Title>
                                    <Caption>dapamu333@gmail.com</Caption>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    :
                    <View style={styles.login}>
                        <ImageBackground style={styles.backgroundImage} source={{ uri: IMAGE_URL + 'background_drawer.png' }}>
                            <Caption>You are not logged in</Caption>
                            <Caption>Click below to login</Caption>
                            <LinearGradient
                                start={[0, 0]}
                                end={[1, 1]}
                                colors={['orange', '#F25C3C']}
                                style={styles.loginButton}
                            >
                                <TouchableOpacity onPress={onClickRouteLogin}>
                                    <Text style={{ paddingHorizontal: 20, paddingVertical: 10, color: '#fff' }}>LOGIN</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </ImageBackground>
                    </View>
                }
                <DrawerContentScrollView style={{ paddingHorizontal: 15 }} {...props}>
                    <Drawer.Section>
                        <DrawerItemList {...props} />
                    </Drawer.Section>
                    <Drawer.Section>
                        <TouchableRipple>
                            <View style={styles.darkTheme}>
                                <Text style={{ color: "black" }}>Dark Theme</Text>
                                <Switch></Switch>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </DrawerContentScrollView>
                {token ?
                    <LinearGradient
                        start={[0, 0]}
                        end={[1, 1]}
                        colors={['rgba(255, 71, 71, 1)', 'rgba(255,100,100,0.3)']}
                        style={{ borderRadius: 50, height: 50,marginHorizontal:25,marginBottom:10 }}
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
        flex: 1
    },
    login: {
        height: 230
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButton: {
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 20,
        elevation: 5
    },
    userInfor: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    darkTheme: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    }
});