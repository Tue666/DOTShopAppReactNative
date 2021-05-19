import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Caption } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { IMAGE_URL } from '../../core/config';
import { clearCart, editQuantityCart, removeItem } from '../../model/fetchData';
import { FontAwesome5 } from '@expo/vector-icons';
import Item from './item';

export default function Index({ isDarkTheme, drawerNavigation, token, navigation, onClickUpdateIconBadge, listCart, onLoadCartHandler, totalPrice }) {
    const onClickEditQuantityHandler = (newQuantity, productID) => {
        editQuantityCart(token, productID, newQuantity)
            .then(response => response.json())
            .then(json => {
                if (json) {
                    Alert.alert('📣', 'Edit quantity successfully ✅', [{ text: 'OK' }]);
                }
                else {
                    Alert.alert('📣', 'Edit quantity failed ❌. Maybe something going wrong 😥. \nCONTACT us for more information and resolve 📞', [{ text: 'OK' }]);
                }
                onLoadCartHandler();
            });
    }
    const onClickClearHandler = () => {
        Alert.alert('Hey!', 'Are you sure you wanna clear all item?', [
            {
                text: 'CLEAR', onPress: () => {
                    clearCart(token)
                        .then(response => response.json())
                        .then(json => {
                            if (json) {
                                Alert.alert('📣', 'Clear successfully ✅', [{ text: 'OK' }]);
                            }
                            else {
                                Alert.alert('📣', 'Clear failed ❌. Maybe something going wrong 😥. \nCONTACT us for more information and resolve 📞', [{ text: 'OK' }]);
                            }
                            onLoadCartHandler();
                            onClickUpdateIconBadge(0);
                        });
                }
            },
            { text: 'CANCEL' }
        ])
    }
    const onClickRemoveHandler = (productID) => {
        Alert.alert('Hey!', 'Are you sure you wanna remove this item?', [
            {
                text: 'REMOVE', onPress: () => {
                    removeItem(token, productID)
                        .then(response => response.json())
                        .then(json => {
                            if (json['Result']) {
                                Alert.alert('📣', 'Remove item successfully ✅', [{ text: 'OK' }]);
                            }
                            else {
                                Alert.alert('📣', 'Remove failed ❌. Maybe something going wrong 😥. \nCONTACT us for more information and resolve 📞', [{ text: 'OK' }]);
                            }
                            onLoadCartHandler();
                            onClickUpdateIconBadge(json['CountItem']);
                        });
                }
            },
            { text: 'CANCEL' }
        ])
    }
    if (listCart.length === 0) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 300, height: 300, resizeMode: 'contain' }} source={{ uri: IMAGE_URL + 'shop.png' }}></Image>
                <Caption style={{ color: isDarkTheme ? '#fff' : 'black' }}>Nothing here :D Go and buy something :D</Caption>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <LinearGradient
                        start={[0, 0]}
                        end={[1, 1]}
                        colors={['orange', '#F25C3C']}
                        style={{ borderRadius: 20, marginTop: 20, marginHorizontal: 10 }}
                    >
                        <TouchableOpacity onPress={() => drawerNavigation.jumpTo('HomeStack')}>
                            <Text style={{ paddingHorizontal: 20, paddingVertical: 10, color: '#fff' }}>BUY MORE 💻</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient
                        start={[0, 0]}
                        end={[1, 1]}
                        colors={['green', '#5EF56D']}
                        style={{ borderRadius: 20, marginTop: 20, marginHorizontal: 10 }}
                    >
                        <TouchableOpacity onPress={() => drawerNavigation.jumpTo('ProfileStack')}>
                            <Text style={{ paddingHorizontal: 20, paddingVertical: 10, color: '#fff' }}>HISTORY ⏱</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
        );
    }
    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5, }}>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <FontAwesome5 name="money-bill-alt" size={24} color={isDarkTheme ? '#fff' : 'black'} />
                        <Text style={{ color: isDarkTheme ? '#fff' : 'gray' }}>  Total</Text>
                    </View>
                    <Text style={{ fontStyle: 'italic', color: isDarkTheme ? '#fff' : 'black' }}>{totalPrice ? totalPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : 0} vnđ</Text>
                </View>
                <View style={styles.action}>
                    <LinearGradient
                        start={[0, 0]}
                        end={[1, 1]}
                        colors={['#2B56AB', '#7ABCDA']}
                        style={styles.button}
                    >
                        <TouchableOpacity onPress={() => navigation.navigate('CheckOut')}>
                            <Text style={styles.text}>Check Out</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient
                        start={[0, 0]}
                        end={[1, 1]}
                        colors={['red', '#F4B3B3']}
                        style={styles.button}
                    >
                        <TouchableOpacity onPress={onClickClearHandler}>
                            <Text style={styles.text}>Clear</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
            <Item isDarkTheme={isDarkTheme} onClickEditQuantityHandler={onClickEditQuantityHandler} onClickRemoveHandler={onClickRemoveHandler} listCart={listCart}></Item>
        </>
    )
}

const styles = StyleSheet.create({
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'flex-end'
    },
    button: {
        borderRadius: 10,
        margin: 3
    },
    text: {
        padding: 13,
        color: '#fff'
    }
});
