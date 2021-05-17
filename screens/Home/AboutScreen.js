import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Title, Caption } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export default function AboutScreen({ isDarkTheme, navigation, route }) {
    return (
        <LinearGradient
            start={[0, 0]}
            end={[1, 1]}
            colors={isDarkTheme ? ['black', '#848383'] : ['#fff', '#fff']}
            style={styles.container}
        >
            <ScrollView style={styles.content}>
                <View style={styles.about}>
                    <Title style={[styles.title, { color: isDarkTheme ? '#fff' : 'black' }]}>About this product</Title>
                    <Caption style={[styles.caption, { color: isDarkTheme ? '#fff' : 'black' }]}>CPU: AMD Ryzen R7-4800H (2.90GHz upto 4.20GHz, 8MB)</Caption>
                    <Caption style={[styles.caption, { color: isDarkTheme ? '#fff' : 'black' }]}>RAM: 16GB (8GB x2) DDR4 3200MHz (2x SO-DIMM slots)</Caption>
                    <Caption style={[styles.caption, { color: isDarkTheme ? '#fff' : 'black' }]}>Hard Drive: 1TB PCIe Gen3 SSD</Caption>
                    <Caption style={[styles.caption, { color: isDarkTheme ? '#fff' : 'black' }]}>VGA: NVIDIA GeForce RTX 2060 6GB GDDR6</Caption>
                    <Caption style={[styles.caption, { color: isDarkTheme ? '#fff' : 'black' }]}>Screen: 15.6 inch FHD(1920 x 1080) IPS, Non-Glare, 144Hz Nanoedge</Caption>
                    <Caption style={[styles.caption, { color: isDarkTheme ? '#fff' : 'black' }]}>Pin: 4Cell, 90WHrs</Caption>
                    <Caption style={[styles.caption, { color: isDarkTheme ? '#fff' : 'black' }]}>Weight: 2.3Kg</Caption>
                    <Caption style={[styles.caption, { color: isDarkTheme ? '#fff' : 'black' }]}>Feature: Đèn nền bàn phím</Caption>
                    <Caption style={[styles.caption, { color: isDarkTheme ? '#fff' : 'black' }]}>OS: Windows 10 64bit</Caption>

                    <Title style={[styles.title, { color: isDarkTheme ? '#fff' : 'black' }]}>Designed for mobility</Title>
                    <Caption style={[styles.caption, { color: isDarkTheme ? '#fff' : 'black' }]}>Asus TUF Gaming A15 FA506IV-HN202T - Although boasting a chassis with a smaller and lighter design than its predecessor. The Fortress Gray chassis is elegant and sleek. The delicate honeycomb design decorated on the underside of the chassis increases grip and cooling air circulation, while the scratch-covered design on the palm rest keeps the surface smooth and clean.</Caption>

                    <Title style={[styles.title, { color: isDarkTheme ? '#fff' : 'black' }]}>Military grade durability </Title>
                    <Caption style={[styles.caption, { color: isDarkTheme ? '#fff' : 'black' }]}>Pass the rigorous standards in the MIL-STD-810H endurance tests. Devices are tested such as drop, vibration, humidity and extreme temperature to ensure reliability.</Caption>

                    <Title style={[styles.title, { color: isDarkTheme ? '#fff' : 'black' }]}>Incredible performance</Title>
                    <Caption style={[styles.caption, { color: isDarkTheme ? '#fff' : 'black' }]}>Deliver incredible performance for gaming, streaming, or even professional graphic design. CPU processors from AMD Ryzen new generation provide fast multitasking capabilities. Graphics are combined with discrete GPUs up to GeForce RTX 2060, which can ensure high frame rates in a wide range of popular games today.</Caption>
                </View>
                <View style={styles.infor}>
                    <Title style={[styles.title, { color: isDarkTheme ? '#fff' : 'black' }]}>More infor</Title>
                    <Caption style={[styles.caption, { color: isDarkTheme ? '#fff' : 'black' }]}>Bluetooth: Bluetooth 5.0</Caption>
                    <Caption style={[styles.caption, { color: isDarkTheme ? '#fff' : 'black' }]}>Trademark: Asus</Caption>
                    <Caption style={[styles.caption, { color: isDarkTheme ? '#fff' : 'black' }]}>Origin: Đài Loan</Caption>
                    <Caption style={[styles.caption, { color: isDarkTheme ? '#fff' : 'black' }]}>Camera: HD 720p CMOS module</Caption>
                    <Caption style={[styles.caption, { color: isDarkTheme ? '#fff' : 'black' }]}>RAM: 16GB (8GB x2) DDR4 3200MHz</Caption>
                    <Caption style={[styles.caption, { color: isDarkTheme ? '#fff' : 'black' }]}>Wifi: Integrated Wi-Fi 5 (802.11 ac (2x2))</Caption>
                    <Caption style={[styles.caption, { color: isDarkTheme ? '#fff' : 'black' }]}>SKU: 2036500895486</Caption>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        paddingHorizontal: 15,
        width: '100%'
    },
    about: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    infor: {
        paddingVertical: 15
    },
    title: {
        fontSize: 16
    },
    caption: {
        fontSize: 14
    }
});