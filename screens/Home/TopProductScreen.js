import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, RefreshControl } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Svg, Polygon } from 'react-native-svg';
import { IMAGE_URL } from '../../core/config';
import { FetchTopProducts } from '../../model/fetchData';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function ListCateScreen({ isDarkTheme, navigation, route }) {
    const [refresing, setRefreshing] = useState(false);
    const [listTopProduct, setListTopProduct] = useState([]);
    const loadTopProduct = () => {
        FetchTopProducts(route.params.title === 'Top View' ? 'TopView' : route.params.title === 'Top Hot' ? 'TopHot' : 'TopNew', 10)
            .then(response => response.json())
            .then(json => setListTopProduct(json));
    }
    useEffect(() => {
        loadTopProduct();
    }, []);
    const onRefresh = useCallback(() => {
        loadTopProduct();
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    return (
        <LinearGradient
            start={[0, 0]}
            end={[1, 1]}
            colors={isDarkTheme ? ['black', '#848383'] : ['#fff', '#fff']}
            style={styles.container}
        >
            <View style={{ alignSelf: 'center' }}>
                <Text style={{ padding: 10, fontFamily: 'bigshoulders-bold', fontSize: 30, color: isDarkTheme ? '#fff' : 'black' }}>{route.params.title.toUpperCase()}</Text>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refresing}
                        onRefresh={onRefresh}
                    >
                    </RefreshControl>
                }
            >
                <View style={styles.wrapper}>
                    {listTopProduct.map((item, index) => {
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
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10
    },
    wrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        width: '44%',
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
    }
});