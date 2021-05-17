import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Item from '../home/item';
import Ads from '../home/ads';
import { FetchTopProducts } from '../../model/fetchData';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function Main({ isDarkTheme, navigation }) {
    const [refreshing, setRefreshing] = useState(false);
    const [listTopView, setListTopView] = useState([]);
    const [listTopHot, setListTopHot] = useState([]);
    const [listTopNew, setListTopNew] = useState([]);
    const [listAds, setListAds] = useState([
        { image: require('../../assets/images/1.png'), key: '1' },
        { image: require('../../assets/images/2.png'), key: '2' },
        { image: require('../../assets/images/3.png'), key: '3' },
    ]);
    const loadHome = () => {
        Promise.all([
            FetchTopProducts('TopView', 6).then(response => response.json()).then(json => setListTopView(json)),
            FetchTopProducts('TopHot', 6).then(response => response.json()).then(json => setListTopHot(json)),
            FetchTopProducts('TopNew', 6).then(response => response.json()).then(json => setListTopNew(json))
        ])
    };
    useEffect(() => {
        loadHome();
    }, [])
    const onRefresh = useCallback(() => {
        loadHome();
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    return (
        <LinearGradient
            start={[0,0]}
            end={[1,1]}
            colors={isDarkTheme ? ['black', '#848383'] : ['#fff', '#fff']}
            style={styles.container}
        >
            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    >
                    </RefreshControl>
                }
            >
                {/* Ads */}
                <Ads listAds={listAds}></Ads>
                {/* Top View */}
                <Item listItem={listTopView} isDarkTheme={isDarkTheme} type={"TopView"} title="Top View" navigation={navigation}></Item>
                {/* Ads */}
                <Ads listAds={listAds}></Ads>
                {/* Top Hot */}
                <Item listItem={listTopHot} isDarkTheme={isDarkTheme} type={"TopHot"} title="Top Hot" navigation={navigation}></Item>
                {/* Ads */}
                <Ads listAds={listAds}></Ads>
                {/* Top New */}
                <Item listItem={listTopNew} isDarkTheme={isDarkTheme} type={"TopNew"} title="Top New" navigation={navigation}></Item>
            </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        paddingHorizontal: 15,
        width: '100%'
    }
});