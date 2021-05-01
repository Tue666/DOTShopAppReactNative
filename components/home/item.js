import React from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

export default function Item({ listItem, title, navigation }) {
    return (
        <View>
            <TouchableOpacity style={styles.title}>
                <Title style={{fontSize: 17}}>{title}</Title>
                <TouchableOpacity>
                    <AntDesign name="arrowright" size={24} color="black" />
                </TouchableOpacity>
            </TouchableOpacity>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={listItem}
                renderItem={({ item }) => {
                    return (
                        <TouchableWithoutFeedback onPress={() => navigation.push('Detail',item)}>
                            <View style={styles.item}>
                                <LinearGradient
                                    start={[0, 1]}
                                    end={[1, 0]}
                                    colors={['black', 'white']}
                                    style={styles.image}>
                                    <Image style={{ width: '90%', height: '90%', resizeMode: 'contain' }} source={item.image}></Image>
                                </LinearGradient>
                                <View style={styles.infor}>
                                    <Text style={{ color: '#e23434', fontWeight: 'bold' }}>{item.name}</Text>
                                    <Text>{item.price} vnđ</Text>
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
    image: {
        width: 170,
        height: 160,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        elevation: 3,
    },
    infor: {
        maxWidth: 170,
        marginTop: 5
    }
});