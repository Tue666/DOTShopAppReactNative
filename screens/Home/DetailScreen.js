import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, TouchableWithoutFeedback, Modal, TextInput } from 'react-native';
import { IMAGE_URL } from '../../core/config';
import { Title, Caption } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FetchRelatedProducts } from '../../model/fetchData';
import Item from '../../components/home/item';

export default function DetailScreen({ navigation, route }) {
    const [switchModal, setSwitchModal] = useState(false);
    const [listRelated, setListRelated] = useState([]);
    const [slideImage, setSlideImage] = useState([
        { image: require('../../assets/images/msige76raider.png'), key: '1' },
        { image: require('../../assets/images/asusrogstrixscar17g733.png'), key: '2' },
        { image: require('../../assets/images/asustufgaminga152021.png'), key: '3' },
        { image: require('../../assets/images/dellgamingg7157500.png'), key: '4' }
    ]);
    useEffect(() => {
        let isMounted = true;
        FetchRelatedProducts(route.params.IDCate).then(response => response.json()).then(json => { if (isMounted) setListRelated(json) });
        return ()=>isMounted = false;
    }, [listRelated]);
    const [quantityInput, setQuantityInput] = useState('1');
    const [maxInput, setMaxInput] = useState(route.params.Quantity);
    const [totalPrice, setTotalPrice] = useState(route.params.Price.toString());
    const onChangeInputHander = (value) => {
        if (parseInt(value) < 1 || value === '') {
            setQuantityInput('1');
        }
        else if (parseInt(value) > maxInput) {
            setQuantityInput(maxInput.toString());
        }
        else {
            setQuantityInput(value);
        }
        setTotalPrice(((value === '' ? 1 : parseInt(value)) * route.params.Price).toString());
    }
    const onClickIncreaseHandler = () => {
        setQuantityInput((parseInt(quantityInput) + 1).toString());
        setTotalPrice(((parseInt(quantityInput) + 1) * route.params.Price).toString());
    }
    const onClickDecreaseHandler = () => {
        setQuantityInput((parseInt(quantityInput) - 1).toString());
        setTotalPrice(((parseInt(quantityInput) - 1) * route.params.Price).toString());
    }
    return (
        <ScrollView style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={switchModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <View style={styles.wrapper}>
                            <View style={[styles.row, { justifyContent: 'flex-end' }]}>
                                <TouchableOpacity onPress={() => setSwitchModal(!switchModal)}>
                                    <AntDesign name="close" size={28} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.row, { justifyContent: 'space-evenly', alignItems: 'center',marginBottom:10 }]}>
                                <Image style={{ width: 140, height: 140, resizeMode: 'contain' }} source={{ uri: IMAGE_URL + route.params.Image }}></Image>
                                <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 17, maxWidth: 230, marginLeft: 20 }}>{route.params.ProductName}</Text>
                            </View>
                            <View style={styles.quantity}>
                                <TouchableOpacity onPress={onClickDecreaseHandler} disabled={parseInt(quantityInput) <= 1 ? true : false} style={styles.quantityButton}>
                                    <Text style={styles.quantityText}>-</Text>
                                </TouchableOpacity>
                                <View style={styles.quantityInput}>
                                    <TextInput
                                        keyboardType="number-pad"
                                        onChangeText={(value) => { onChangeInputHander(value) }}
                                        value={quantityInput}
                                    ></TextInput>
                                </View>
                                <TouchableOpacity onPress={onClickIncreaseHandler} disabled={parseInt(quantityInput) >= maxInput ? true : false} style={styles.quantityButton}>
                                    <Text style={styles.quantityText}>+</Text>
                                </TouchableOpacity>
                                <Text style={{ marginLeft: 20, fontSize: 17 }}> ( {maxInput} lefts )</Text>
                            </View>
                            <View style={[styles.row, { justifyContent: 'flex-start', borderBottomWidth: 1, borderBottomColor: '#eee', marginBottom: 5 }]}>
                                <FontAwesome5 name="money-bill-alt" size={24} color="black" />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                <View style={{ borderRadius: 5, elevation: 5, backgroundColor: '#eee' }}>
                                    <Text style={{ fontWeight: 'bold', padding: 10 }}>{totalPrice.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} vnđ</Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <LinearGradient
                                            start={[0, 0]}
                                            end={[1, 1]}
                                            colors={['red', 'orange']}
                                            style={styles.addCartButton}
                                        >
                                            <Text style={styles.addCartText}>ADD TO CARD</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={{ marginBottom: 15 }}>
                <View style={styles.inforImage}>
                    <Image style={{ width: '90%', height: '90%', resizeMode: 'contain' }} source={{ uri: IMAGE_URL + route.params.Image }}></Image>
                </View>
                <View style={styles.inforName}>
                    <Title style={styles.name}>{route.params.ProductName}</Title>
                    <Text style={styles.price}>{route.params.Price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} vnđ</Text>
                </View>
                <TouchableOpacity onPress={() => { setSwitchModal(!switchModal) }}>
                    <LinearGradient
                        start={[0, 0]}
                        end={[1, 1]}
                        colors={['red', 'orange']}
                        style={styles.buyButton}
                    >
                        <Text style={styles.buyText}>BUY NOW</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={styles.imageProduct}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={slideImage}
                    renderItem={({ item }) => {
                        return (
                            <TouchableWithoutFeedback onPress={() => { navigation.push('Image', item) }}>
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
    },
    buyButton: {
        borderRadius: 10
    },
    buyText: {
        padding: 13,
        textAlign: 'center',
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.7)'
    },
    modalView: {
        width: '100%',
        height: '45%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 13
    },
    row: {
        width: '100%',
        flexDirection: 'row'
    },
    quantity: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    quantityButton: {
        borderRadius: 10,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 7,
        backgroundColor: '#eee'
    },
    quantityText: {
        fontSize: 20,
    },
    quantityInput: {
        width: 40,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    addCartButton: {
        borderRadius: 10
    },
    addCartText: {
        padding: 13,
        textAlign: 'center',
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold'
    }
});