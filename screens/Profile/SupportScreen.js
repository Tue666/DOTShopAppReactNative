import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { EvilIcons } from '@expo/vector-icons';
import HowToRegister from '../../components/support/register';
import HowToLogin from '../../components/support/login';
import HowToAddProductToCart from '../../components/support/addCart';
import HowToCheckOut from '../../components/support/checkOut';

export default function SupportScreen({ isDarkTheme, navigation }) {
    const [switchModal, setSwitchModal] = useState(false);
    const [content, setContent] = useState(null);
    const onClickOpenModal = (key) => {
        switch (key) {
            case 'HT-Register':
                setContent(<HowToRegister></HowToRegister>);
                break;
            case 'HT-Login':
                setContent(<HowToLogin></HowToLogin>);
                break;
            case 'HT-AddCart':
                setContent(<HowToAddProductToCart></HowToAddProductToCart>);
                break;
            case 'HT-CheckOut':
                setContent(<HowToCheckOut></HowToCheckOut>);
                break;
        }
        setSwitchModal(!switchModal);
    }
    return (
        <LinearGradient
            start={[0, 0]}
            end={[1, 1]}
            colors={isDarkTheme ? ['#171719', '#717171'] : ['#eee', '#fff']}
            style={styles.container}
        >
            <Modal
                animationType="slide"
                transparent={true}
                visible={switchModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <ScrollView style={{ width: '100%', height: '90%' }}>
                            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                {content}
                            </View>
                        </ScrollView>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '10%' }}>
                            <TouchableOpacity onPress={() => setSwitchModal(!switchModal)} style={styles.submitButton}>
                                <Text style={styles.submitText}>GOT IT 🥳</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <Svg height="1000" width="1000" style={{ position: 'absolute' }}>
                <Circle cx="400" cy="40" r="350" fill={isDarkTheme ? 'orange' : "rgba(41, 127, 239, 0.8)"} />
            </Svg>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.pop()}>
                <Ionicons name="arrow-back-sharp" size={28} color="white" />
            </TouchableOpacity>
            <View style={styles.wrapper}>
                <View style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontFamily: 'poppins-extralight', fontSize: 20 }}>We will always be by your side</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity onPress={() => onClickOpenModal('HT-Register')} style={[styles.item, { backgroundColor: '#fff' }]}>
                        <Text style={styles.title}>How to Regitser</Text>
                        <EvilIcons name="arrow-right" size={27} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onClickOpenModal('HT-Login')} style={[styles.item, { backgroundColor: '#fff' }]}>
                        <Text style={styles.title}>How to Login</Text>
                        <EvilIcons name="arrow-right" size={27} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onClickOpenModal('HT-AddCart')} style={[styles.item, { backgroundColor: '#fff' }]}>
                        <Text style={styles.title}>How to Add Product To Your Cart</Text>
                        <EvilIcons name="arrow-right" size={27} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onClickOpenModal('HT-CheckOut')} style={[styles.item, { backgroundColor: '#fff' }]}>
                        <Text style={styles.title}>How to Check Out</Text>
                        <EvilIcons name="arrow-right" size={27} color="black" />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </LinearGradient >
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
        height: '80%'
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 3
    },
    item: {
        width: '90%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignSelf: 'center',
        paddingHorizontal: 10,
        elevation: 5,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 17,
        paddingLeft: 10
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.7)'
    },
    modalView: {
        width: '90%',
        height: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitButton: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(41, 127, 239, 0.7)',
        marginTop: 20,
        backgroundColor: 'rgba(41, 127, 239, 1)',
        elevation: 5,
        marginHorizontal: 5
    },
    submitText: {
        paddingVertical: 10,
        paddingHorizontal: 40,
        color: '#fff'
    }
});