import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Title, Caption } from 'react-native-paper';

export default function AboutScreen({ navigation, route }) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.about}>
                <Title style={{ fontSize: 16 }}>About this product</Title>
                <Caption style={{ fontSize: 14 }}>CPU: AMD Ryzen R7-4800H (2.90GHz upto 4.20GHz, 8MB)</Caption>
                <Caption style={{ fontSize: 14 }}>RAM: 16GB (8GB x2) DDR4 3200MHz (2x SO-DIMM slots)</Caption>
                <Caption style={{ fontSize: 14 }}>Hard Drive: 1TB PCIe Gen3 SSD</Caption>
                <Caption style={{ fontSize: 14 }}>VGA: NVIDIA GeForce RTX 2060 6GB GDDR6</Caption>
                <Caption style={{ fontSize: 14 }}>Screen: 15.6 inch FHD(1920 x 1080) IPS, Non-Glare, 144Hz Nanoedge</Caption>
                <Caption style={{ fontSize: 14 }}>Pin: 4Cell, 90WHrs</Caption>
                <Caption style={{ fontSize: 14 }}>Weight: 2.3Kg</Caption>
                <Caption style={{ fontSize: 14 }}>Feature: Đèn nền bàn phím</Caption>
                <Caption style={{ fontSize: 14 }}>OS: Windows 10 64bit</Caption>

                <Title style={{ fontSize: 16 }}>Designed for mobility</Title>
                <Caption style={{ fontSize: 14 }}>Asus TUF Gaming A15 FA506IV-HN202T - Although boasting a chassis with a smaller and lighter design than its predecessor. The Fortress Gray chassis is elegant and sleek. The delicate honeycomb design decorated on the underside of the chassis increases grip and cooling air circulation, while the scratch-covered design on the palm rest keeps the surface smooth and clean.</Caption>

                <Title style={{ fontSize: 16 }}>Military grade durability </Title>
                <Caption style={{ fontSize: 14 }}>Pass the rigorous standards in the MIL-STD-810H endurance tests. Devices are tested such as drop, vibration, humidity and extreme temperature to ensure reliability.</Caption>

                <Title style={{ fontSize: 16 }}>Incredible performance</Title>
                <Caption style={{ fontSize: 14 }}>Deliver incredible performance for gaming, streaming, or even professional graphic design. CPU processors from AMD Ryzen new generation provide fast multitasking capabilities. Graphics are combined with discrete GPUs up to GeForce RTX 2060, which can ensure high frame rates in a wide range of popular games today.</Caption>
            </View>
            <View style={styles.infor}>
                <Title style={{ fontSize: 16 }}>More infor</Title>
                <Caption style={{ fontSize: 14 }}>Bluetooth: Bluetooth 5.0</Caption>
                <Caption style={{ fontSize: 14 }}>Trademark: Asus</Caption>
                <Caption style={{ fontSize: 14 }}>Origin: Đài Loan</Caption>
                <Caption style={{ fontSize: 14 }}>Camera: HD 720p CMOS module</Caption>
                <Caption style={{ fontSize: 14 }}>RAM: 16GB (8GB x2) DDR4 3200MHz</Caption>
                <Caption style={{ fontSize: 14 }}>Wifi: Integrated Wi-Fi 5 (802.11 ac (2x2))</Caption>
                <Caption style={{ fontSize: 14 }}>SKU: 2036500895486</Caption>
            </View>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15
    },
    about: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    infor: {
        paddingVertical: 15
    }
});