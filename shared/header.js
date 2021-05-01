import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Title, Caption } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export function HeaderHome({ drawerNavigation }) {
    const openMenu = ()=>{
        drawerNavigation.openDrawer();
    }
    return (
        <View style={styles.header}>
            <Entypo style={styles.headerIcon} name="menu" size={27} color="black" onPress={openMenu}/>
            <View style={styles.title}>
                <Text style={[styles.textTitle,{color:'orange'}]}>DOT </Text>
                <Text style={[styles.textTitle,{color:'black'}]}>Shop</Text>
            </View>
            <View style={styles.action}>
                <View style={styles.titleCart}>
                    <View style={styles.titleCount}>
                        <Text style={styles.textCount}>10</Text>
                    </View>
                    <TouchableOpacity>
                        <AntDesign name="shoppingcart" size={29} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export function HeaderAbout({ param }) {
    return (
        <View style={styles.header}>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <View style={{width:40,height:40}}>
                    <Image style={{width:'90%',height:'90%',resizeMode:'contain'}} source={param.image}></Image>
                </View>
                <View style={{marginLeft:10}}>
                    <Text style={{fontWeight:'bold'}}>{param.name}</Text>
                    <Caption>Detail</Caption>
                </View>
            </View>
        </View>
    )
}
export function HeaderDetail({ param }) {
    return (
        <View style={styles.header}>
            <View>
                <Text style={{fontWeight:'bold'}}>{param.name}</Text>
            </View>
            <View style={styles.action}>
                <View style={styles.titleCart}>
                    <View style={styles.titleCount}>
                        <Text style={styles.textCount}>10</Text>
                    </View>
                    <TouchableOpacity>
                        <AntDesign name="shoppingcart" size={29} color="black" />
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
        width:15,
        height: 15,
        borderRadius: 15/2,
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