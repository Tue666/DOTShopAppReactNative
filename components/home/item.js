import React from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { IMAGE_URL } from '../../core/config';
import { LinearGradient } from 'expo-linear-gradient';
import { Title } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Item({ listItem, title, navigation, type }) {
    return (
        <View>
            <TouchableOpacity style={styles.title}>
                <Title style={{ fontSize: 17 }}>{title}</Title>
                <TouchableOpacity>
                    <AntDesign name="arrowright" size={24} color="black" />
                </TouchableOpacity>
            </TouchableOpacity>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.ID}
                data={listItem}
                renderItem={({ item }) => {
                    return (
                        <TouchableWithoutFeedback onPress={() => navigation.push('Detail', item)}>
                            <View style={styles.item}>
                                <View style={styles.shadowImage}>
                                    <LinearGradient
                                        start={[0, 0]}
                                        end={[1, 1]}
                                        colors={['black', 'white']}
                                        style={styles.image}>
                                        <Image style={{ width: '90%', height: '90%', resizeMode: 'contain' }} source={{ uri: IMAGE_URL + item.Image }}></Image>
                                    </LinearGradient>
                                    {
                                        type === "TopView" ?
                                            <View style={{ position: 'absolute', top: 1, right: 5 }}>
                                                {item.Quantity > 0 ?
                                                    <Text style={{ fontSize: 20 }}>🔖</Text>
                                                    :
                                                    <Image style={{ width: 100, height: 100, resizeMode: 'contain' }} source={{ uri: IMAGE_URL + 'soldout.png' }}></Image>
                                                }
                                            </View>
                                            :
                                            type === "TopHot" ?
                                                <View style={{ position: 'absolute', top: 3, right: 10 }}>
                                                    {item.Quantity > 0 ?
                                                        <FontAwesome5 name="hotjar" size={24} color="rgba(255,0,0,0.7)" />
                                                        :
                                                        <Image style={{ width: 100, height: 100, resizeMode: 'contain' }} source={{ uri: IMAGE_URL + 'soldout.png' }}></Image>
                                                    }
                                                </View> :
                                                <View style={{ position: 'absolute', top: 1, right: 10 }}>
                                                    {item.Quantity > 0 ?
                                                        <MaterialIcons name="fiber-new" size={30} color="red" />
                                                        :
                                                        <Image style={{ width: 100, height: 100, resizeMode: 'contain' }} source={{ uri: IMAGE_URL + 'soldout.png' }}></Image>
                                                    }
                                                </View>
                                    }
                                    {item.Discount > 0 ?
                                        <Image style={{ width: 50, height: 50, resizeMode: 'contain', position: 'absolute', top: -11, left: 6 }} source={{ uri: IMAGE_URL + 'sale.png' }}></Image>
                                        :
                                        <View></View>
                                    }
                                </View>
                                <View style={styles.infor}>
                                    <Text style={{ color: '#e23434', fontWeight: 'bold' }}>{item.ProductName}</Text>
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
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingHorizontal: 5 }}>
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
                            </View>
                        </TouchableWithoutFeedback>
                    )
                }}
            >
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    item: {
        padding: 10
    },
    shadowImage: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        elevation: 5
    },
    image: {
        width: 170,
        height: 160,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    infor: {
        maxWidth: 170,
        marginTop: 5
    }
});