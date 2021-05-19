import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { IMAGE_URL } from '../core/config';
import { Caption } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export function HeaderHome({ isDarkTheme, drawerNavigation, iconBadge }) {
    const openMenu = () => {
        drawerNavigation.openDrawer();
    }
    return (
        <View style={styles.header}>
            <Entypo style={styles.headerIcon} name="menu" size={27} color={isDarkTheme ? '#fff' : 'black'} onPress={openMenu} />
            <View style={styles.title}>
                <Text style={[styles.textTitle, { color: 'orange' }]}>DOT </Text>
                <Text style={[styles.textTitle, { color: isDarkTheme ? '#fff' : 'black' }]}>Shop</Text>
            </View>
            <View style={styles.action}>
                <View style={styles.titleCart}>
                    {iconBadge > 0 ?
                        <View style={styles.titleCount}>
                            <Text style={styles.textCount}>{iconBadge}</Text>
                        </View>
                        :
                        <View></View>
                    }
                    <TouchableOpacity onPress={() => drawerNavigation.jumpTo('CartStack')}>
                        <AntDesign name="shoppingcart" size={34} color={isDarkTheme ? '#fff' : 'black'} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export function HeaderAbout({ isDarkTheme, param }) {
    return (
        <View style={styles.header}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 40, height: 40 }}>
                    <Image style={{ width: '90%', height: '90%', resizeMode: 'contain' }} source={{ uri: IMAGE_URL + param.Image }}></Image>
                </View>
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontWeight: 'bold', color: isDarkTheme ? '#fff' : 'black' }}>{param.ProductName}</Text>
                    <Caption style={{ color: isDarkTheme ? '#fff' : 'black' }}>Detail</Caption>
                </View>
            </View>
        </View>
    )
}

export function HeaderDetail({ isDarkTheme, drawerNavigation, param, iconBadge }) {
    return (
        <View style={styles.header}>
            <View>
                <Text style={{ fontWeight: 'bold', color: isDarkTheme ? '#fff' : 'black' }}>{param.ProductName}</Text>
            </View>
            <View style={styles.action}>
                <View style={styles.titleCart}>
                    {iconBadge > 0 ?
                        <View style={styles.titleCount}>
                            <Text style={styles.textCount}>{iconBadge}</Text>
                        </View>
                        :
                        <View></View>
                    }
                    <TouchableOpacity onPress={() => drawerNavigation.jumpTo('CartStack')}>
                        <AntDesign name="shoppingcart" size={34} color={isDarkTheme ? '#fff' : 'black'} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export function HeaderCart({ drawerNavigation }) {
    return (
        <View style={styles.header}>
            <View style={{ marginLeft: 20 }}>
                <AntDesign name="shoppingcart" size={40} color="red" />
            </View>
            <TouchableOpacity onPress={() => { drawerNavigation.goBack() }}>
                <AntDesign name="closecircle" size={30} color="red" />
            </TouchableOpacity>
        </View>
    )
}

export function HeaderPurchased({ isDarkTheme, drawerNavigation }) {
    const openMenu = () => {
        drawerNavigation.openDrawer();
    }

    return (
        <View style={styles.header}>
            <Entypo style={styles.headerIcon} name="menu" size={27} color={isDarkTheme ? '#fff' : 'black'} onPress={openMenu} />
            <View style={styles.title}>
                <Text style={[styles.textTitle, { color: 'orange', marginRight: 30 }]}>Purchased</Text>
            </View>
        </View>
    )
}

export function HeaderContact({ isDarkTheme, drawerNavigation }) {
    const openMenu = () => {
        drawerNavigation.openDrawer();
    }
    return (
        <View style={styles.header}>
            <Entypo style={styles.headerIcon} name="menu" size={27} color={isDarkTheme ? '#fff' : 'black'} onPress={openMenu} />
        </View>
    )
}

export function HeaderTop({ isDarkTheme, drawerNavigation, iconBadge }) {
    return (
        <View style={styles.header}>
            <View style={styles.title}>
                <Text style={[styles.textTitle, { color: 'orange' }]}>DOT </Text>
                <Text style={[styles.textTitle, { color: isDarkTheme ? '#fff' : 'black' }]}>Shop</Text>
            </View>
            <View style={styles.action}>
                <View style={styles.titleCart}>
                    {iconBadge > 0 ?
                        <View style={styles.titleCount}>
                            <Text style={styles.textCount}>{iconBadge}</Text>
                        </View>
                        :
                        <View></View>
                    }
                    <TouchableOpacity onPress={() => drawerNavigation.jumpTo('CartStack')}>
                        <AntDesign name="shoppingcart" size={34} color={isDarkTheme ? '#fff' : 'black'} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        flexDirection: 'row'
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    titleCart: {
        position: 'relative'
    },
    titleCount: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 15,
        height: 15,
        borderRadius: 15 / 2,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2
    },
    textCount: {
        color: '#fff',
        fontSize: 10
    }
});