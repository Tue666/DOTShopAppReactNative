import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Button, TouchableOpacity, FlatList, TouchableWithoutFeedback } from 'react-native';
import { IMAGE_URL } from '../../core/config';
import { Title, Caption } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { FetchRelatedProducts } from '../../model/fetchData';
import Item from '../../components/home/item';

export default function DetailScreen({ navigation, route }) {
    const [listRelated, setListRelated] = useState([]);
    const [slideImage, setSlideImage] = useState([
        { image: require('../../assets/images/msige76raider.png'), key: '1' },
        { image: require('../../assets/images/asusrogstrixscar17g733.png'), key: '2' },
        { image: require('../../assets/images/asustufgaminga152021.png'), key: '3' },
        { image: require('../../assets/images/dellgamingg7157500.png'), key: '4' }
    ]);
    useEffect(()=>{
        FetchRelatedProducts(route.params.IDCate).then(response=>response.json()).then(json=>setListRelated(json));
    },[listRelated]);
    return (
        <ScrollView style={styles.container}>
            <View style={{ marginBottom: 15 }}>
                <View style={styles.inforImage}>
                    <Image style={{ width: '90%', height: '90%', resizeMode: 'contain' }} source={{uri:IMAGE_URL+route.params.Image}}></Image>
                </View>
                <View style={styles.inforName}>
                    <Title style={styles.name}>{route.params.ProductName}</Title>
                    <Text style={styles.price}>{route.params.Price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} vnđ</Text>
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
            <TouchableOpacity style={styles.aboutProduct} onPress={() => { navigation.navigate('About', route.params) }}>
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