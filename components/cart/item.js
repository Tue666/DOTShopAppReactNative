import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { IMAGE_URL } from '../../core/config';

export default function Item() {
    const [listCart, setListCart] = useState([
        { name: 'ASUS ROG Strix SCAR 17 G733', image: 'iphone732gblikenew.png', price: '74,990,000 vnđ', key: '1' },
        { name: 'ASUS ROG Strix SCAR 17 G733', image: 'iphone732gblikenew.png', price: '74,990,000 vnđ', key: '2' },
        { name: 'ASUS ROG Strix SCAR 17 G733', image: 'iphone732gblikenew.png', price: '74,990,000 vnđ', key: '3' },
        { name: 'ASUS ROG Strix SCAR 17 G733', image: 'iphone732gblikenew.png', price: '74,990,000 vnđ', key: '4' },
        { name: 'ASUS ROG Strix SCAR 17 G733', image: 'iphone732gblikenew.png', price: '74,990,000 vnđ', key: '5' },
        { name: 'ASUS ROG Strix SCAR 17 G733', image: 'iphone732gblikenew.png', price: '74,990,000 vnđ', key: '6' }
    ]);
    const [quantityInput, setQuantityInput] = useState('1');
    const [maxInput, setMaxInput] = useState(19);
    const [totalPrice, setTotalPrice] = useState('74,990,000 vnđ');
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
        //setTotalPrice(((value === '' ? 1 : parseInt(value)) * route.params.Price).toString());
    }
    const onClickIncreaseHandler = () => {
        setQuantityInput((parseInt(quantityInput) + 1).toString());
        //setTotalPrice(((parseInt(quantityInput) + 1) * route.params.Price).toString());
    }
    const onClickDecreaseHandler = () => {
        setQuantityInput((parseInt(quantityInput) - 1).toString());
        //setTotalPrice(((parseInt(quantityInput) - 1) * route.params.Price).toString());
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            {listCart.map((item, index) => {
                return (
                    <View style={styles.item} key={index}>
                        <View style={styles.infor}>
                            <View style={styles.image}>
                                <Image style={{ width: 120, height: 120, resizeMode: 'contain' }} source={{ uri: IMAGE_URL + item.image }}></Image>
                            </View>
                            <View style={{ marginLeft: 10, maxWidth: 200 }}>
                                <View>
                                    <Text style={{ color: 'red', fontSize: 17 }}>{item.name}</Text>
                                    <Text style={{marginBottom:7}}>{item.price}</Text>
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
                                        <Text style={{ marginLeft: 10, fontSize: 12 }}> ( 19 lefts )</Text>
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
                            <TouchableOpacity>
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
    }
});