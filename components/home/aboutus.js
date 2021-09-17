import React from 'react';
import { View, StyleSheet, ScrollView, Linking, Image } from 'react-native';
import { Avatar, Title, Caption } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { IMAGE_URL } from '../../core/config';

export default function AboutUs({ isDarkTheme }) {
    return (
        <LinearGradient
            start={[0, 0]}
            end={[1, 1]}
            colors={isDarkTheme ? ['black', '#848383'] : ['#fff', '#fff']}
            style={styles.container}
        >
            <ScrollView style={styles.content}>
                {/* begin head */}
                <View style={{ justifyContent: 'center', margin: 20 }}>
                    <Title style={{ fontSize: 30, alignSelf: 'center', fontFamily: 'bigshoulders-bold', marginBottom: 8, color: isDarkTheme ? '#fff' : 'black' }}>
                        INTRODUCE
                    </Title>
                    <Image style={{ width: 80, height: 80, resizeMode: 'contain', alignSelf: 'center', borderRadius: 20, marginVertical: 5 }} source={{ uri: IMAGE_URL + 'logo.png' }}></Image>
                    <Caption style={[styles.caption, { color: isDarkTheme ? '#fff' : 'black' }]} >DOTShop appeared in early 2021, DOTShop is the mobile application development project of  my group , this is an application to sell electronic appliances, below are the members of the group.</Caption>
                    <Caption style={[styles.caption, { color: isDarkTheme ? '#fff' : 'black' }]} >Wish you have the best and happy experience at DOTShop, pleased to serve you.</Caption>
                </View>
                <View style={{ justifyContent: 'center', margin: 20 }}>
                    <Title style={{ fontSize: 30, alignSelf: 'center', fontFamily: 'bigshoulders-bold', marginBottom: 8, color: isDarkTheme ? '#fff' : 'black' }}>
                        OUR WEBSITE
                    </Title>
                    <Caption onPress={() => Linking.openURL('http://dotshop69.000webhostapp.com')} style={[styles.caption, { color: isDarkTheme ? '#fff' : 'black', alignSelf: 'center', textDecorationLine: 'underline' }]} >http://dotshop69.000webhostapp.com</Caption>
                </View>
                {/* end head */}

                {/* begin foot */}
                <Title style={{ fontSize: 30, alignSelf: 'center', fontFamily: 'bigshoulders-bold', marginBottom: 8, color: isDarkTheme ? '#fff' : 'black' }}>
                    DOTSHOP MEMBERS
                </Title>
                <View style={styles.userInfoSection}>
                    <Avatar.Image
                        source={{ uri: IMAGE_URL + 'huong.png' }}
                        size={80}
                        style={{
                            borderWidth: 41,
                            borderColor: isDarkTheme ? '#fff' : '#bbb',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    />
                    <View style={{ marginLeft: 20, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Title style={{ fontSize: 20, fontFamily: 'bigshoulders-bold', marginBottom: 8, color: isDarkTheme ? '#fff' : 'black' }}>Nguyen Tran Huong</Title>
                        <Caption style={[styles.caption, { color: isDarkTheme ? '#fff' : 'black' }]} >huongnguyentran01@gmail.com</Caption>
                    </View>
                </View>
                <View style={styles.userInfoSection}>
                    <Avatar.Image
                        source={{ uri: IMAGE_URL + 'ngan.png' }}
                        size={80}
                        style={{
                            borderWidth: 41,
                            borderColor: isDarkTheme ? '#fff' : '#bbb',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    />
                    <View style={{ marginLeft: 20, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Title style={{ fontSize: 20, fontFamily: 'bigshoulders-bold', marginBottom: 8, color: isDarkTheme ? '#fff' : 'black' }}>Cao Ngoc Kim Ngan</Title>
                        <Caption style={[styles.caption, { color: isDarkTheme ? '#fff' : 'black' }]} >cnkimngan@gmail.com</Caption>
                    </View>
                </View>
                <View style={styles.userInfoSection}>
                    <Avatar.Image
                        source={{ uri: IMAGE_URL + 'phuc.png' }}
                        size={80}
                        style={{
                            borderWidth: 41,
                            borderColor: isDarkTheme ? '#fff' : '#bbb',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    />
                    <View style={{ marginLeft: 20, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Title style={{ fontSize: 20, fontFamily: 'bigshoulders-bold', marginBottom: 8, color: isDarkTheme ? '#fff' : 'black' }}>Phan Huynh Phuc</Title>
                        <Caption style={[styles.caption, { color: isDarkTheme ? '#fff' : 'black' }]} >phucphan785@gmail.com</Caption>
                    </View>
                </View>
                <View style={styles.userInfoSection}>
                    <Avatar.Image
                        source={{ uri: IMAGE_URL + 'tue.png' }}
                        size={80}
                        style={{
                            borderWidth: 41,
                            borderColor: isDarkTheme ? '#fff' : '#bbb',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    />
                    <View style={{ marginLeft: 20, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Title style={{ fontSize: 20, fontFamily: 'bigshoulders-bold', marginBottom: 8, color: isDarkTheme ? '#fff' : 'black' }}>Le Chinh Tue</Title>
                        <Caption style={[styles.caption, { color: isDarkTheme ? '#fff' : 'black' }]} >dapamu333@gmail.com</Caption>
                    </View>
                </View>
            </ScrollView>
            {/* end foot */}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        width: '100%'
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%'
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
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20
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