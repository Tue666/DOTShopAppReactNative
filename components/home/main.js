import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import Item from '../home/item';
import Ads from '../home/ads';
import { FetchTopProducts } from '../../model/fetchData';

export default function Main({ navigation }) {
    const [listTopView, setListTopView] = useState([]);
    const [listTopHot, setListTopHot] = useState([]);
    const [listTopNew, setListTopNew] = useState([]);
    const [listAds, setListAds] = useState([
        { image: require('../../assets/images/1.png'), key: '1' },
        { image: require('../../assets/images/2.png'), key: '2' },
        { image: require('../../assets/images/3.png'), key: '3' },
    ]);
    useEffect(() => {
        FetchTopProducts('TopView',6).then(response=>response.json()).then(json=>setListTopView(json));
        FetchTopProducts('TopHot',6).then(response=>response.json()).then(json=>setListTopHot(json));
        FetchTopProducts('TopNew',6).then(response=>response.json()).then(json=>setListTopNew(json));
    },[])
    return (
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            {/* Ads */}
            <Ads listAds={listAds}></Ads>
            {/* Top View */}
            <Item listItem={listTopView} title="Top View" navigation={navigation}></Item>
            {/* Ads */}
            <Ads listAds={listAds}></Ads>
            {/* Top Hot */}
            <Item listItem={listTopHot} title="Top Hot" navigation={navigation}></Item>
            {/* Ads */}
            <Ads listAds={listAds}></Ads>
            {/* Top New */}
            <Item listItem={listTopNew} title="Top New" navigation={navigation}></Item>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingHorizontal: 20
    }
});