import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity, Modal, CheckBox, Picker, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { Svg, Polygon } from 'react-native-svg';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Searching } from '../../model/fetchData';
import { IMAGE_URL } from '../../core/config';

export default function Search({ isDarkTheme, navigation }) {
    const [switchModal, setSwitchModal] = useState(false);
    const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);
    const [category, setCategory] = useState(0);
    const [priceFrom, setPriceFrom] = useState('0');
    const [priceTo, setPriceTo] = useState('10.000.000');
    const [listResult, setListResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const onClickSearchHandler = () => {
        Searching(searchValue, isAdvancedSearch, category, priceFrom, priceTo)
            .then(response => response.json())
            .then(json => {
                if (json.length > 0) {
                    setListResult(json);
                }
                else {
                    Alert.alert('📣', 'Nothing found 😯. \nMaybe you should try with another key 😞');
                    setListResult(json);
                }
            });
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
                        <ScrollView style={{ width: '100%' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <CheckBox
                                    value={isAdvancedSearch}
                                    onValueChange={(value) => setIsAdvancedSearch(value)}
                                >
                                </CheckBox>
                                <Text style={{ fontFamily: 'poppins-extralight' }}>Is Advanced Search ?</Text>
                            </View>
                            <View style={{ alignSelf: 'flex-start', width: '100%', marginVertical: 10 }}>
                                <Text style={{ fontFamily: 'poppins-extralight', fontSize: 16 }}>Categories</Text>
                                <Picker
                                    selectedValue={category}
                                    onValueChange={value => setCategory(value)}
                                >
                                    <Picker.Item label="All" value={0}></Picker.Item>
                                    <Picker.Item label="Mobiles" value={1}></Picker.Item>
                                    <Picker.Item label="Tablets" value={2}></Picker.Item>
                                    <Picker.Item label="Cameras" value={3}></Picker.Item>
                                    <Picker.Item label="Laptops" value={4}></Picker.Item>
                                </Picker>
                            </View>
                            <View style={{ alignSelf: 'flex-start', width: '100%', marginVertical: 10 }}>
                                <Text style={{ fontFamily: 'poppins-extralight', fontSize: 16 }}>Price</Text>
                                <View style={{ paddingHorizontal: 35 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5 }}>
                                        <Text style={{ fontFamily: 'poppins-extralight' }}>From</Text>
                                        <TextInput
                                            value={priceFrom}
                                            style={{ paddingVertical: 1, paddingHorizontal: 10, width: 120, backgroundColor: '#eee', borderRadius: 10, elevation: 5, fontFamily: 'poppins-extralight' }}
                                            onChangeText={(value) => setPriceFrom(value)}
                                            keyboardType={'number-pad'}
                                        >
                                        </TextInput>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5 }}>
                                        <Text style={{ fontFamily: 'poppins-extralight' }}>To</Text>
                                        <TextInput
                                            value={priceTo}
                                            style={{ paddingVertical: 1, paddingHorizontal: 10, width: 120, backgroundColor: '#eee', borderRadius: 10, elevation: 5, fontFamily: 'poppins-extralight' }}
                                            onChangeText={(value) => setPriceTo(value)}
                                            keyboardType={'number-pad'}
                                        >
                                        </TextInput>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => setSwitchModal(!switchModal)} style={[styles.buttonModal, { borderColor: '#C5FB9C', backgroundColor: '#ADFB9C' }]}>
                                    <Entypo style={styles.iconModal} name="check" size={24} color="green" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setSwitchModal(!switchModal)} style={[styles.buttonModal, { borderColor: '#F8BBB4', backgroundColor: '#F8ADA4' }]}>
                                    <Ionicons style={styles.iconModal} name="close-sharp" size={24} color="red" />
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
            <View style={styles.search}>
                <TextInput
                    style={styles.input}
                    placeholder={"Type something you wanna find here ... "}
                    value={searchValue}
                    onChangeText={value => setSearchValue(value)}
                    maxLength={35}
                >
                </TextInput>
                <TouchableOpacity onPress={onClickSearchHandler} style={{ width: 40, height: 40, borderRadius: 40 / 2, elevation: 5, borderWidth: 1, borderColor: '#eee' }} >
                    <LinearGradient
                        start={[0, 0]}
                        end={[1, 1]}
                        colors={['red', 'orange']}
                        style={styles.button}
                    >
                        <FontAwesome name="search" size={24} color="white" />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => setSwitchModal(!switchModal)}>
                <LinearGradient
                    start={[0, 0]}
                    end={[1, 1]}
                    colors={isAdvancedSearch ? ['red', 'orange'] : ['#eee', '#eee']}
                    style={{ borderRadius: 30, marginVertical: 10 }}
                >
                    <Text style={{ alignSelf: 'center', paddingVertical: 9, color: isAdvancedSearch ? '#fff' : 'black', fontFamily: 'poppins-extralight' }}>ADVANCED SEARCH</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setListResult([])}>
                <LinearGradient
                    start={[0, 0]}
                    end={[1, 1]}
                    colors={['red', 'orange']}
                    style={{ borderRadius: 30, marginBottom: 12 }}
                >
                    <Text style={{ alignSelf: 'center', paddingVertical: 9, color: '#fff', fontFamily: 'poppins-extralight' }}>CLEAR</Text>
                </LinearGradient>
            </TouchableOpacity>
            {
                listResult.length > 0 ?
                    <>
                        <View>
                            <Text style={{ fontSize: 18, fontFamily: 'poppins-extralight', color: isDarkTheme ? '#fff' : 'black' }}>We got {listResult.length} results</Text>
                        </View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={styles.wrapper}>
                                {listResult.map((item, index) => {
                                    return (
                                        <TouchableOpacity key={index} style={styles.item} onPress={() => navigation.navigate('Detail', item)}>
                                            <LinearGradient
                                                start={[0, 0]}
                                                end={[1, 1]}
                                                colors={['rgba(233,63,237,0.4)', 'rgba(252,149,2,1)']}
                                                style={styles.polygon}>
                                                <Svg style={{ width: '100%', height: '100%', position: 'absolute' }}>
                                                    <Polygon
                                                        points="20,0 200,0 200,150"
                                                        fill="#eee"
                                                    >
                                                    </Polygon>
                                                </Svg>
                                                <View style={styles.image}>
                                                    <Image style={{ width: '97%', height: '97%', resizeMode: 'contain' }} source={{ uri: IMAGE_URL + item.Image }}></Image>
                                                </View>
                                                <View style={styles.infor}>
                                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>{item.ProductName}</Text>
                                                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#fff' }}>{item.Price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} vnđ</Text>
                                                </View>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
                        </ScrollView>
                    </>
                    :
                    <View style={{ justifyContent: 'center', alignItems: 'center', height: 470 }}>
                        <Text style={{ fontSize: 18, color: isDarkTheme ? '#fff' : 'black', fontFamily: 'poppins-extralight' }}>We got nothing here :D</Text>
                    </View>
            }
        </LinearGradient >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    search: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    input: {
        width: '85%',
        height: 40,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
        fontSize: 15,
        elevation: 5
    },
    button: {
        width: '100%',
        height: '100%',
        borderRadius: 40 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        width: '42%',
        height: 230,
        backgroundColor: '#fff',
        margin: 10,
        elevation: 5,
        borderRadius: 10
    },
    polygon: {
        borderRadius: 10,
        height: 230,
        justifyContent: 'center',
        textAlign: 'center',
    },
    image: {
        width: 160,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        right: 0
    },
    infor: {
        width: '90%',
        position: 'absolute',
        bottom: 20,
        marginLeft: 10
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.7)'
    },
    modalView: {
        width: '80%',
        height: '45%',
        backgroundColor: '#fff',
        padding: 30,
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