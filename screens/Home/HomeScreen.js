import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Item from '../../components/home/item';
import Ads from '../../components/home/ads';

export default function HomeScreen({ navigation }) {
    const [listTopView, setListTopView] = useState([
        { name: 'ASUS ROG Strix SCAR 17 G733', image: require('../../assets/images/msige76raider.png'), price: '74,990,000', key: '1' },
        { name: 'ASUS TUF Gaming A15 2021', image: require('../../assets/images/asusrogstrixscar17g733.png'), price: '32,990,000', key: '2' },
        { name: 'MSI GE76 Raider Series', image: require('../../assets/images/asustufgaminga152021.png'), price: '109,990,000', key: '3' },
        { name: 'Dell Gaming G7 15 7500', image: require('../../assets/images/acernitro5.png'), price: '38,990,000', key: '4' },
        { name: 'Acer Nitro 5 2020', image: require('../../assets/images/dellgamingg7157500.png'), price: '20,990,000', key: '5' }
    ]);
    const [listAds, setListAds] = useState([
        { image: require('../../assets/images/1.png'), key: '1' },
        { image: require('../../assets/images/2.png'), key: '2' },
        { image: require('../../assets/images/3.png'), key: '3' },
    ]);
    return (
        <View style={styles.container}>
            <View style={styles.scrollCategory}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={[styles.cateItem, styles.active]}>
                        <Text style={styles.textActive}>All</Text>
                    </View>
                    <View style={styles.cateItem}>
                        <Text>Top Charts</Text>
                    </View>
                    <View style={styles.cateItem}>
                        <Text>Categories</Text>
                    </View>
                    <View style={styles.cateItem}>
                        <Text>About Us</Text>
                    </View>
                    <View style={styles.cateItem}>
                        <Text>Policy</Text>
                    </View>
                </ScrollView>
            </View>
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Ads */}
                <Ads listAds={listAds}></Ads>
                {/* Top View */}
                <Item listItem={listTopView} title="Top View" navigation={navigation}></Item>
                {/* Ads */}
                <Ads listAds={listAds}></Ads>
                {/* Top Hot */}
                <Item listItem={listTopView} title="Top Hot" navigation={navigation}></Item>
                {/* Ads */}
                <Ads listAds={listAds}></Ads>
                {/* Top New */}
                <Item listItem={listTopView} title="Top New" navigation={navigation}></Item>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    active: {
        borderBottomWidth: 2,
        borderBottomColor: 'green',
        borderRadius: 10
    },
    textActive: {
        color: 'green',
        fontWeight: 'bold'
    },
    container: {
        flex: 1
    },
    scrollCategory: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginBottom: 10,
        paddingHorizontal: 20
    },
    cateItem: {
        paddingVertical: 15,
        paddingHorizontal: 35
    },
    content: {
        flex: 1,
        paddingHorizontal: 20
    }
});