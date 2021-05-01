import React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';

export default function Ads({ listAds }) {
    return (
        <View>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={listAds}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.item}>
                            <View style={styles.image}>
                                <Image style={{ width: '100%', height: '100%', borderRadius: 10 }} source={item.image}></Image>
                            </View>
                        </View>
                    )
                }}
            >
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 10
    },
    image: {
        width: 320,
        height: 180,
        borderRadius: 10
    }
});