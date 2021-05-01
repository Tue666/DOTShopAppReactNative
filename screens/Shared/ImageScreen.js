import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function ImageScreen({ route }) {
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image style={{width:'100%',height:'100%',resizeMode:'contain'}} source={route.params.image}></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width:'100%',
        height:300,
        backgroundColor:'#eee',
        justifyContent: 'center',
        alignItems: 'center'
    }
});