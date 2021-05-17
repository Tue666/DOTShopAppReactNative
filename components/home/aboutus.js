import React from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
} from 'react-native-paper';
import DropDownItem from 'react-native-drop-down-item';
const IC_ARR_DOWN = require('../../assets/images/ic_arr_down.png');
const IC_ARR_UP = require('../../assets/images/ic_arr_up.png');
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';



state = {
    contents: [
        {
            title: 'Social Network',
            body: <View>
                <Text style={{ color: color="#FF6347" }}> <Ionicons name="logo-facebook" color="#4b0082" size={30} marginTop='20' />    facebook.com</Text>
                <Text style={{ color: color="#FF6347" }}> <Ionicons name="logo-instagram" color="#FF6347" size={30} />    instagram.com</Text>
            </View>
        },
        {
            title: 'Support, Advice',
            body: <View >
                <Text style={{ color: color="#FF6347" }}> <Ionicons name="mail-outline" color="#daa520" size={30} marginTop='20' />    Dotshop@gmail.com</Text>
                <Text style={{ color: color="#FF6347" }}> <Ionicons name="call-outline" color="#daa520" size={30} />    0125465995</Text>
            </View>
        },
        {
            title: 'Chain stores',
            body: <View>
                <Text style={{ color: color="#FF6347" }}> <Ionicons name="location-outline" color="#daa520" size={30} marginTop='20' />    280 An Dương Vương, Q5, TpHCM</Text>
                <Text style={{ color: color="#FF6347" }}> <Ionicons name="location-outline" color="#daa520" size={30} marginTop='20' />    106 lạc Long Quân, Q5, TpHCM</Text>
            </View>
        },
        {
            title: 'Regulations',
            body: 'Users must carefully protect their personal information by carefully editing the information and accepting the service of the shop',

        },
    ],
};


export default function AboutUs({ isDarkTheme }) {
    return (
        <LinearGradient
            start={[0, 0]}
            end={[1, 1]}
            colors={isDarkTheme ? ['black', '#848383'] : ['#fff', '#fff']}
            style={styles.container}
        >
            <Text style={{ color: isDarkTheme ? '#fff' : 'black' }}></Text>
                <SafeAreaView style={styles.container}>

                    {/* begin head */}
                    <ScrollView style={styles.container}>
                        <View style={{ justifyContent: 'center', margin: 30 }}>
                            <Title style={[styles.title, {
                                marginBottom: 8,
                                color: isDarkTheme ? '#fff' : 'black'
                            }]}>
                                INTRODUCE
                </Title>
                            <Caption style={[styles.caption, {color: isDarkTheme ? '#fff' : 'black'}]} >DOTShop appeared in early 2021, DOTShop is </Caption>
                            <Caption style={[styles.caption, {color: isDarkTheme ? '#fff' : 'black'}]} >the mobile application development project</Caption>
                            <Caption style={[styles.caption, {color: isDarkTheme ? '#fff' : 'black'}]} >of  my group , this is an application to sell </Caption>
                            <Caption style={[styles.caption, {color: isDarkTheme ? '#fff' : 'black'}]} >electronic appliances, below are the members </Caption>
                            <Caption style={[styles.caption, {color: isDarkTheme ? '#fff' : 'black'}]} >of the group, </Caption>
                            <ScrollView style={styles.container}>
                                {
                                    this.state.contents
                                        ? this.state.contents.map((param, i) => {
                                            return (
                                                <DropDownItem
                                                    key={i}
                                                    style={styles.dropDownItem}
                                                    contentVisible={false}
                                                    invisibleImage={IC_ARR_DOWN}
                                                    visibleImage={IC_ARR_UP}
                                                    header={
                                                        <View style={styles.header}>
                                                            <Text style={{
                                                                fontSize: 18,
                                                                color: isDarkTheme ? '#fff' : 'black'
                                                            }}>{param.title}</Text>
                                                        </View>
                                                    }
                                                >
                                                    <Text style={[
                                                        styles.txt,
                                                        {
                                                            fontSize: 16,
                                                            // color: isDarkTheme ? '#fff' : 'black'
                                                            color: color="#FF6347"
                                                        },
                                                    ]}>
                                                        {param.body}
                                                    </Text>
                                                </DropDownItem>
                                            );
                                        })
                                        : null
                                }
                                <View style={{ height: 15 }} />
                            </ScrollView>
                            <Caption style={[styles.caption, {color: isDarkTheme ? '#fff' : 'black'}]} >Wish you have the best and happy experience</Caption>
                            <Caption style={[styles.caption, {color: isDarkTheme ? '#fff' : 'black'}]} >at DOTShop, pleased to serve you</Caption>
                        </View>
                        {/* end head */}

                        {/* begin foot */}
                        <Title style={[styles.title, {
                            marginBottom: 14,
                            color: isDarkTheme ? '#fff' : 'black'
                        }]}>
                            DOTSHOP MEMBERS
                </Title>
                        <View style={styles.userInfoSection}>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                <Avatar.Image
                                    source={require('../../assets/user.png')}
                                    size={80}
                                />
                                <View style={{ marginLeft: 20 }}>
                                    <Title style={[styles.title, {
                                        marginTop: 15,
                                        marginBottom: 5,
                                        color: isDarkTheme ? '#fff' : 'black'
                                    }]}>Le Chinh Tue</Title>
                                    <Caption style={[styles.caption, {color: isDarkTheme ? '#fff' : 'black'}]} >tuele@gmail.com</Caption>
                                </View>
                            </View>
                        </View>


                        <View style={styles.userInfoSection}>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                <Avatar.Image
                                    source={require('../../assets/user.png')}
                                    size={80}
                                />
                                <View style={{ marginLeft: 20 }}>
                                    <Title style={[styles.title, {
                                        marginTop: 15,
                                        marginBottom: 5,
                                        color: isDarkTheme ? '#fff' : 'black'
                                    }]}>Nguyen Thang Long</Title>
                                   <Caption style={[styles.caption, {color: isDarkTheme ? '#fff' : 'black'}]} >ngthanglong@gmail.com</Caption>
                                </View>
                            </View>
                        </View>

                        <View style={styles.userInfoSection}>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                <Avatar.Image
                                    source={require('../../assets/userfemale.png')}
                                    size={80}
                                />
                                <View style={{ marginLeft: 20 }}>
                                    <Title style={[styles.title, {
                                        marginTop: 15,
                                        marginBottom: 5,
                                        color: isDarkTheme ? '#fff' : 'black'
                                    }]}>Cao Ngoc Kim Ngan</Title>
                                    <Caption style={[styles.caption, {color: isDarkTheme ? '#fff' : 'black'}]} >cnkimngan@gmail.com</Caption>
                                </View>
                            </View>
                        </View>

                        <View style={styles.userInfoSection}>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                <Avatar.Image
                                    source={require('../../assets/user.png')}
                                    size={80}
                                />
                                <View style={{ marginLeft: 20 }}>
                                    <Title style={[styles.title, {
                                        marginTop: 15,
                                        marginBottom: 1,
                                        color: isDarkTheme ? '#fff' : 'black'
                                    }]}>Nguyen The Anh</Title>
                                    <Caption style={[styles.caption, {color: isDarkTheme ? '#fff' : 'black'}]} >nta@gmail.com</Caption>
                                </View>
                            </View>
                        </View>

                    </ScrollView>
                    {/* end foot */}
                </SafeAreaView>
           
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
        

    },
    caption: {
        fontSize: 15,
        
    },

    header: {
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 12,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTxt: {
        fontSize: 16,
        marginRight: 60,
        flexWrap: 'wrap',
    },
    txt: {
        fontSize: 14,
    },

    Dropdown: {
        alignSelf: 'stretch',

    },
    titledown: {
        fontSize: 22,

        textAlign: 'center'
    }
});