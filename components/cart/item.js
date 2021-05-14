import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, Modal } from 'react-native';
import { IMAGE_URL } from '../../core/config';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Item({ listCart, onClickRemoveHandler, onClickEditQuantityHandler }) {
    const [switchModal, setSwitchModal] = useState(false);
    const [maxQuantity, setMaxQuantity] = useState(0);
    const [currentQuantity, setCurrentQuantity] = useState('0');
    const [productID, setProductID] = useState(0);
    const onChangeTextHandler = (value) => {
        if (parseInt(value) < 1 || value === '') {
            setCurrentQuantity('1');
        }
        else if (parseInt(value) > maxQuantity) {
            setCurrentQuantity(maxQuantity.toString());
        }
        else {
            setCurrentQuantity(value);
        }
    }
    const onClickIncreaseHandler = () => {
        setCurrentQuantity((parseInt(currentQuantity) + 1).toString());
    }
    const onClickDecreaseHandler = () => {
        setCurrentQuantity((parseInt(currentQuantity) - 1).toString());
    }
    const onClickOpenModalHander = (max, current, productID) => {
        setMaxQuantity(max);
        setCurrentQuantity(current.toString());
        setProductID(productID);
        setSwitchModal(!switchModal);
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={switchModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <View style={styles.quantity}>
                            <TouchableOpacity onPress={onClickDecreaseHandler} disabled={parseInt(currentQuantity) <= 1 ? true : false} style={styles.quantityButton}>
                                <Text style={styles.quantityText}>-</Text>
                            </TouchableOpacity>
                            <View style={styles.quantityInput}>
                                <TextInput
                                    keyboardType="number-pad"
                                    onChangeText={value => onChangeTextHandler(value)}
                                    value={currentQuantity}
                                ></TextInput>
                            </View>
                            <TouchableOpacity onPress={onClickIncreaseHandler} disabled={parseInt(currentQuantity) >= maxQuantity ? true : false} style={styles.quantityButton}>
                                <Text style={styles.quantityText}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, marginBottom: 15 }}>( {maxQuantity} left )</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={()=>{onClickEditQuantityHandler(parseInt(currentQuantity),productID);setSwitchModal(!switchModal)}} style={[styles.buttonModal, { borderColor: '#C5FB9C', backgroundColor: '#ADFB9C' }]}>
                                <Entypo style={styles.iconModal} name="check" size={24} color="green" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setSwitchModal(!switchModal)} style={[styles.buttonModal, { borderColor: '#F8BBB4', backgroundColor: '#F8ADA4' }]}>
                                <Ionicons style={styles.iconModal} name="close-sharp" size={24} color="red" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            {listCart.map((item, index) => {
                return (
                    <View style={styles.item} key={index}>
                        <View style={styles.infor}>
                            <View style={styles.image}>
                                <Image style={{ width: 120, height: 120, resizeMode: 'contain' }} source={{ uri: IMAGE_URL + item.ProductImage }}></Image>
                            </View>
                            <View style={{ marginLeft: 10, maxWidth: 200 }}>
                                <View>
                                    <Text style={{ color: 'red', fontSize: 17 }}>{item.ProductName}</Text>
                                    <Text style={{ marginVertical: 5 }}>{item.Price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} vnđ</Text>
                                    <View style={[styles.quantity, { justifyContent: 'flex-start' }]}>
                                        <Text>Quantity: {item.Quantity}</Text>
                                        <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => onClickOpenModalHander(item.MaxQuantity, item.Quantity, item.ProductID)}>
                                            <MaterialIcons name="autorenew" size={24} color="black" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <LinearGradient
                            start={[0, 0]}
                            end={[1, 1]}
                            colors={['red', 'orange']}
                            style={styles.removeButton}
                        >
                            <TouchableOpacity onPress={() => onClickRemoveHandler(item.ProductID)}>
                                <Text style={{ padding: 8, color: '#fff', fontSize: 14 }}>Remove</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        height: 200,
        backgroundColor: '#eee',
        borderRadius: 20,
        elevation: 5,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    infor: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    removeButton: {
        width: '50%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.7)'
    },
    modalView: {
        width: '48%',
        height: '25%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonModal: {
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        elevation: 5
    },
    iconModal: {
        paddingHorizontal: 20,
        paddingVertical: 5
    }
});