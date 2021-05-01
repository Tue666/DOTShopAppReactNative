import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Button, TouchableOpacity, FlatList, TouchableWithoutFeedback } from 'react-native';
import { Title, Caption } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import Item from '../../components/home/item';

export default function DetailScreen({ navigation, route }) {
    const [listRelated, setListRelated] = useState([
        { name: 'ASUS ROG Strix SCAR 17 G733', image: require('../../assets/images/msige76raider.png'), price: '74,990,000', key: '1' },
        { name: 'ASUS TUF Gaming A15 2021', image: require('../../assets/images/asusrogstrixscar17g733.png'), price: '32,990,000', key: '2' },
        { name: 'MSI GE76 Raider Series', image: require('../../assets/images/asustufgaminga152021.png'), price: '109,990,000', key: '3' },
        { name: 'Dell Gaming G7 15 7500', image: require('../../assets/images/acernitro5.png'), price: '38,990,000', key: '4' },
        { name: 'Acer Nitro 5 2020', image: require('../../assets/images/dellgamingg7157500.png'), price: '20,990,000', key: '5' }
    ]);
    const [slideImage, setSlideImage] = useState([
        { image: require('../../assets/images/msige76raider.png'), key: '1' },
        { image: require('../../assets/images/asusrogstrixscar17g733.png'), key: '2' },
        { image: require('../../assets/images/asustufgaminga152021.png'), key: '3' },
        { image: require('../../assets/images/dellgamingg7157500.png'), key: '4' }
    ]);
    return (
        <ScrollView style={styles.container}>
            <View style={{ marginBottom: 15 }}>
                <View style={styles.inforImage}>
                    <Image style={{ width: '90%', height: '90%', resizeMode: 'contain' }} source={route.params.image}></Image>
                </View>
                <View style={styles.inforName}>
                    <Title style={styles.name}>{route.params.name}</Title>
                    <Text style={styles.price}>{route.params.price} vnđ</Text>
                    <Button title="BUY NOW" color="orange"></Button>
                </View>
            </View>
            <View style={styles.imageProduct}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={slideImage}
                    renderItem={({ item }) => {
                        return (
                            <TouchableWithoutFeedback onPress={()=>{navigation.push('Image',item)}}>
                                <View style={styles.item}>
                                    <Image style={{ width: '90%', height: '90%', resizeMode: 'contain' }} source={item.image}></Image>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    }}
                ></FlatList>
            </View>
            <TouchableOpacity style={styles.aboutProduct} onPress={() => { navigation.push('About', route.params) }}>
                <View>
                    <Title style={{ fontSize: 17 }}>About this product</Title>
                    <Caption style={{ marginLeft: 20 }}>The information about this product</Caption>
                </View>
                <TouchableOpacity>
                    <AntDesign name="arrowright" size={24} color="black" />
                </TouchableOpacity>
            </TouchableOpacity>
            {/* Related */}
            <Item listItem={listRelated} title="Related products" navigation={navigation}></Item>
            {/* Similar */}
            <Item listItem={listRelated} title="Similar products" navigation={navigation}></Item>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: '#fff'
    },
    inforImage: {
        height: 250,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        color: 'red'
    },
    price: {
        fontSize: 18,
        marginBottom: 15
    },
    imageProduct: {
        height: 200,
        marginBottom: 15
    },
    item: {
        width: 280,
        height: '100%',
        backgroundColor: '#eee',
        borderRadius: 10,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    aboutProduct: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    }
});