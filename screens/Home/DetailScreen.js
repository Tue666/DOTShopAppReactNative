import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, TouchableWithoutFeedback, Modal, TextInput, Alert } from 'react-native';
import { IMAGE_URL } from '../../core/config';
import { Title, Caption } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { addCart, FetchRelatedProducts, insertToFavorite } from '../../model/fetchData';
import Item from '../../components/home/item';

export default function DetailScreen({ isDarkTheme, navigation, route, onClickUpdateIconBadge, onLoadCartHandler, token, onLoadFavorite }) {
    const [switchModal, setSwitchModal] = useState(false);
    const [listRelated, setListRelated] = useState([]);
    const [slideImage, setSlideImage] = useState([
        { image: require('../../assets/images/msige76raider.png'), key: '1' },
        { image: require('../../assets/images/asusrogstrixscar17g733.png'), key: '2' },
        { image: require('../../assets/images/asustufgaminga152021.png'), key: '3' },
        { image: require('../../assets/images/dellgamingg7157500.png'), key: '4' }
    ]);
    useEffect(() => {
        FetchRelatedProducts(route.params.ID)
            .then(response => response.json())
            .then(json => setListRelated(json));
    }, []);
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
    const onClickAddCartHandler = () => {
        if (token) {
            addCart(token, route.params.ID, quantityInput)
                .then(response => response.json())
                .then(json => {
                    if (json['Result']) {
                        Alert.alert('📣', 'Add ' + route.params.ProductName + ' to cart successfully ✅', [{ text: 'OK' }]);
                        onClickUpdateIconBadge(json['CountItem']);
                        onLoadCartHandler();
                    }
                    else {
                        Alert.alert('📣', 'Add product failed ❌. Maybe something going wrong 😥. \nCONTACT us for more information and resolve 📞', [{ text: 'OK' }])
                    }
                    setSwitchModal(!switchModal);
                });
        }
        else {
            Alert.alert('📣', 'You are not logged in, do it and try again!. 💩', [{ text: 'OK' }])
        }
    }
    const onClickInsertToFavoriteHandler = () => {
        Alert.alert('📣', 'Click \'OK\' to continue 🙃', [
            {
                text: 'OK',
                onPress: () => {
                    if (token) {
                        insertToFavorite(token, route.params.ID)
                            .then(response => response.json())
                            .then(json => {
                                switch (json) {
                                    case 1:
                                        Alert.alert('📣', 'Add ' + route.params.ProductName + ' to favorite successfully ✅', [{ text: 'OK' }]);
                                        onLoadFavorite();
                                        break;
                                    case 2:
                                        Alert.alert('📣', 'This product already have in your favorite 🙃. \nTry something new 🤩', [{ text: 'OK' }]);
                                        break;
                                    case 3:
                                        Alert.alert('📣', 'Add to favorite failed ❌. Maybe something going wrong 😥. \nCONTACT us for more information and resolve 📞', [{ text: 'OK' }])
                                        break;
                                }
                            })
                    }
                    else {
                        Alert.alert('📣', 'You are not logged in, do it and try again!. 💩', [{ text: 'OK' }])
                    }
                }
            },
            { text: 'CANCEL' }
        ])
    }
    return (
        <LinearGradient
            start={[0, 0]}
            end={[1, 1]}
            colors={isDarkTheme ? ['black', '#848383'] : ['#fff', '#fff']}
            style={styles.container}
        >
            <ScrollView style={styles.content}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={switchModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalView}>
                            <View style={{ position: 'absolute', top: 10, right: 13 }}>
                                <TouchableOpacity onPress={() => setSwitchModal(!switchModal)}>
                                    <AntDesign name="close" size={28} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: '100%', height: '50%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                <Image style={{ width: '40%', height: '100%', resizeMode: 'contain' }} source={{ uri: IMAGE_URL + route.params.Image }}></Image>
                                <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 17, maxWidth: '60%', marginLeft: 20, flexShrink: 1 }}>{route.params.ProductName}</Text>
                            </View>
                            <View style={{ width: '100%', height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                                {route.params.Quantity > 0 ?
                                    <>
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
                                        <View style={{ width: '100%', height: '60%' }}>
                                            <View style={[styles.row, { justifyContent: 'flex-start', borderBottomWidth: 1, borderBottomColor: '#eee', marginBottom: 5, width: '100%', height: '25%' }]}>
                                                <FontAwesome5 name="money-bill-alt" size={24} color="black" />
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '75%' }}>
                                                <View style={{ borderRadius: 5, elevation: 5, backgroundColor: '#eee' }}>
                                                    <Text style={{ fontWeight: 'bold', padding: 10 }}>{totalPrice.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} vnđ</Text>
                                                </View>
                                                <View>
                                                    <TouchableOpacity onPress={onClickAddCartHandler}>
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
                                    </>
                                    :
                                    <View style={{ marginTop: 75 }}>
                                        <Text style={{ fontSize: 16, color: 'red', fontFamily: 'poppins-extralight' }}>😍 Sold out! Thanks for your attention 😍</Text>
                                    </View>
                                }
                            </View>
                        </View>
                    </View>
                </Modal>
                <View style={{ marginBottom: 15 }}>
                    <View style={[styles.inforImage, { backgroundColor: isDarkTheme ? '#eee' : '#fff' }]}>
                        <Image style={{ width: '90%', height: '90%', resizeMode: 'contain' }} source={{ uri: IMAGE_URL + route.params.Image }}></Image>
                        {route.params.Quantity > 0 ?
                            <View></View>
                            :
                            <Image style={{ width: 150, height: 150, resizeMode: 'contain', position: 'absolute', top: 5, right: 1 }} source={{ uri: IMAGE_URL + 'soldout.png' }}></Image>
                        }
                        {route.params.Discount > 0 ?
                            <Image style={{ width: 80, height: 80, resizeMode: 'contain', position: 'absolute', top: -20, left: 1 }} source={{ uri: IMAGE_URL + 'sale.png' }}></Image>
                            :
                            <View></View>
                        }
                    </View>
                    <View style={styles.inforName}>
                        <Title style={styles.name}>{route.params.ProductName}</Title>
                        {route.params.Discount > 0 ?
                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 3 }}>
                                    <Text style={{ fontSize: 15, fontStyle: 'italic', textDecorationLine: 'line-through', color: isDarkTheme ? '#fff' : 'black' }}>{route.params.Price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} vnđ</Text>
                                    <Text style={{ fontSize: 15, fontStyle: 'italic', marginLeft: 10, color: isDarkTheme ? '#fff' : 'black' }}>-{route.params.Discount}%</Text>
                                </View>
                                <Text style={{ fontSize: 20, fontStyle: 'italic', fontWeight: 'bold', color: 'red', marginBottom: 3 }}>NOW {((parseInt(route.params.Price)) - ((parseInt(route.params.Price) * route.params.Discount / 100))).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} vnđ</Text>
                            </View>
                            :
                            <Text style={{ fontSize: 16, fontStyle: 'italic', color: isDarkTheme ? '#fff' : 'black' }}>{route.params.Price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} vnđ</Text>
                        }
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 5 }}>
                            <Text style={{ color: isDarkTheme ? '#fff' : 'black' }}>Status: </Text>
                            {route.params.Quantity > 0 ?
                                <Text style={{ fontSize: 14, fontStyle: 'italic', color: isDarkTheme ? '#fff' : 'black' }}>{route.params.Quantity} items left!</Text>
                                :
                                <Text style={{ color: 'red', fontWeight: 'bold', fontStyle: 'italic' }}>SOLD OUT</Text>
                            }
                        </View>
                        <Text style={{ fontSize: 14, fontStyle: 'italic', marginBottom: 17, color: isDarkTheme ? '#fff' : 'black' }}>{route.params.Count} products have been sold!</Text>
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
                    <TouchableOpacity onPress={onClickInsertToFavoriteHandler}>
                        <LinearGradient
                            start={[0, 0]}
                            end={[1, 1]}
                            colors={['pink', 'orange']}
                            style={styles.buyButton}
                        >
                            <Text style={styles.buyText}>ADD TO FAVORITES</Text>
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
                        <Title style={{ fontSize: 17, color: isDarkTheme ? '#fff' : 'black' }}>About this product</Title>
                        <Caption style={{ marginLeft: 20, color: isDarkTheme ? '#fff' : 'black' }}>The information about this product</Caption>
                    </View>
                    <TouchableOpacity>
                        <AntDesign name="arrowright" size={24} color={isDarkTheme ? '#fff' : 'black'} />
                    </TouchableOpacity>
                </TouchableOpacity>
                {/* Related */}
                <Item listItem={listRelated} isDarkTheme={isDarkTheme} title="Related products" navigation={navigation}></Item>
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
    inforImage: {
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 20
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
        borderRadius: 10,
        marginVertical: 5
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
        height: 340,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        width: '100%',
        flexDirection: 'row'
    },
    quantity: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        width: '100%',
        height: '40%'
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