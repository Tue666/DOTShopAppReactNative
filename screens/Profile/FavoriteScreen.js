import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Modal, Alert } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { IMAGE_URL } from '../../core/config';
import { clearFavorite, removeFavorite } from '../../model/fetchData';

export default function FavoriteScreen({ token, isDarkTheme, navigation, listFavorite, onLoadFavorite }) {
    const [switchModal, setSwitchModal] = useState(false);
    const [itemHover, setItemHover] = useState({});
    const onLongClickOpenModalHandler = (item) => {
        setSwitchModal(!switchModal);
        setItemHover(item);
    }
    const onClickRemoveHandler = () => {
        Alert.alert('Hey!', 'Are you sure you wanna remove this item?', [
            {
                text: 'REMOVE', onPress: () => {
                    removeFavorite(token, itemHover['ID'])
                        .then(response => response.json())
                        .then(json => {
                            if (json) {
                                Alert.alert('📣', 'Remove item successfully ✅', [{ text: 'OK' }]);
                            }
                            else {
                                Alert.alert('📣', 'Remove item failed ❌. Maybe something going wrong 😥. \nCONTACT us for more information and resolve 📞', [{ text: 'OK' }]);
                            }
                            onLoadFavorite();
                            setSwitchModal(!switchModal);
                        })
                }
            },
            { text: 'CANCEL' }
        ])
    }
    const onClickClearHandler = () => {
        Alert.alert('Hey!', 'Are you sure you wanna clear all item?', [
            {
                text: 'CLEAR', onPress: () => {
                    clearFavorite(token)
                        .then(response => response.json())
                        .then(json => {
                            if (json) {
                                Alert.alert('📣', 'Clear successfully ✅', [{ text: 'OK' }]);
                            }
                            else {
                                Alert.alert('📣', 'Clear failed ❌. Maybe something going wrong 😥. \nCONTACT us for more information and resolve 📞', [{ text: 'OK' }]);
                            }
                            onLoadFavorite();
                            setSwitchModal(!switchModal);
                        })
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
            <Modal
                animationType="slide"
                transparent={true}
                visible={switchModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <TouchableOpacity style={{ position: 'absolute', top: 5, right: 7 }} onPress={() => setSwitchModal(!switchModal)}>
                            <AntDesign name="close" size={20} color="gray"/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '100%' }} onPress={() => navigation.navigate('Detail', itemHover)}>
                            <Text style={styles.textModal}>View</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '100%' }} onPress={onClickRemoveHandler}>
                            <Text style={styles.textModal}>Remove</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '100%' }} onPress={onClickClearHandler}>
                            <Text style={styles.textModal}>Clear All</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Svg height="1000" width="1000" style={{ position: 'absolute' }}>
                <Circle cx="400" cy="40" r="350" fill={isDarkTheme ? 'rgba(253, 137, 20, 1)' : "rgba(41, 127, 239, 0.8)"} />
            </Svg>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.pop()}>
                <Ionicons name="arrow-back-sharp" size={28} color="white" />
            </TouchableOpacity>
            <View>
                {listFavorite.length > 0 ?
                    <View style={{ marginTop: 60 }}>
                        <Text style={{ fontFamily: 'poppins-extralight', color: '#fff', fontSize: 25 }}>YOUR FAVORITE HERE</Text>
                        <Text style={{ fontFamily: 'poppins-extralight', color: '#fff', fontSize: 14, alignSelf: 'center' }}>(Hover item to remove)</Text>
                    </View>
                    :
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, color: isDarkTheme ? '#fff' : 'black', fontFamily: 'poppins-extralight' }}>NOTHING 😛 HERE</Text>
                        <Text style={{ fontSize: 18, color: isDarkTheme ? '#fff' : 'black', fontFamily: 'poppins-extralight' }}>Go and buy something 🙆🏻‍♀️</Text>
                    </View>
                }
            </View>
            <ScrollView style={{ width: '100%', height: '80%' }} showsVerticalScrollIndicator={false}>
                <View style={styles.wrapper}>
                    {listFavorite.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={styles.item} onLongPress={() => onLongClickOpenModalHandler(item)}>
                                <View style={styles.image}>
                                    <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={{ uri: IMAGE_URL + item.Image }}></Image>
                                    {item.Discount > 0 ?
                                        <Image style={{ width: 50, height: 50, resizeMode: 'contain', position: 'absolute', top: -12, left: -7 }} source={{ uri: IMAGE_URL + 'sale.png' }}></Image>
                                        :
                                        <View></View>
                                    }
                                    {item.Quantity < 0 ?
                                        <Image style={{ width: 80, height: 80, resizeMode: 'contain', position: 'absolute', top: 0, right: -7 }} source={{ uri: IMAGE_URL + 'soldout.png' }}></Image>
                                        :
                                        <View></View>
                                    }
                                </View>
                                <View style={styles.infor}>
                                    <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'red' }}>{item.ProductName}</Text>
                                    {item.Discount > 0 ?
                                        <View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <Text style={{ fontSize: 13, fontStyle: 'italic', textDecorationLine: 'line-through' }}>{item.Price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} vnđ</Text>
                                                <Text style={{ fontSize: 13, fontStyle: 'italic', marginLeft: 10 }}>-{item.Discount}%</Text>
                                            </View>
                                            <Text style={{ color: 'red', fontWeight: 'bold', fontStyle: 'italic' }}>NOW {((parseInt(item.Price)) - ((parseInt(item.Price) * item.Discount / 100))).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} vnđ</Text>
                                        </View>
                                        :
                                        <Text style={{ fontSize: 14, fontStyle: 'italic' }}>{item.Price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} vnđ</Text>
                                    }
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <AntDesign name="star" size={16} color="orange" />
                                            <AntDesign name="star" size={16} color="orange" />
                                            <AntDesign name="star" size={16} color="orange" />
                                            <AntDesign name="star" size={16} color="orange" />
                                            <AntDesign name="star" size={16} color="gray" />
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <Entypo name="eye" size={24} color="black" style={{ marginRight: 5, fontWeight: 'bold' }} />
                                            <Text style={{ color: 'black', fontStyle: 'italic', fontWeight: 'bold' }}>{item.View}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapper: {
        width: '90%',
        height: '100%',
        marginTop: 20,
        flexDirection: 'row',
        alignSelf: 'center',
        flexWrap: 'wrap'
    },
    item: {
        width: '44%',
        height: 230,
        backgroundColor: '#fff',
        margin: 10,
        elevation: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    image: {
        width: '90%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    infor: {
        height: '30%',
        paddingHorizontal: 5,
        paddingVertical: 5
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.7)'
    },
    modalView: {
        width: '48%',
        height: '20%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 35
    },
    textModal: {
        paddingVertical: 12,
        fontFamily: 'poppins-extralight'
    }
});