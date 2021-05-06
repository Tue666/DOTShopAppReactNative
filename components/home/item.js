import React from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { IMAGE_URL } from '../../core/config';
import { LinearGradient } from 'expo-linear-gradient';
import { Title } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

export default function Item({ listItem, title, navigation }) {
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
                        <TouchableWithoutFeedback onPress={() =>navigation.push('Detail',item)}>
                            <View style={styles.item}>
                                <View style={styles.shadowImage}>
                                    <LinearGradient
                                        start={[0, 0]}
                                        end={[1, 1]}
                                        colors={['black', 'white']}
                                        style={styles.image}>
                                        <Image style={{ width: '90%', height: '90%', resizeMode: 'contain' }} source={{ uri: IMAGE_URL + item.Image }}></Image>
                                    </LinearGradient>
                                </View>
                                <View style={styles.infor}>
                                    <Text style={{ color: '#e23434', fontWeight: 'bold' }}>{item.ProductName}</Text>
                                    <Text>{item.Price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} vnđ</Text>
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
        borderColor: '#eee',
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