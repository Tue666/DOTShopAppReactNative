import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HistoryScreen({ isDarkTheme, navigation, listHistory }) {
    return (
        <LinearGradient
            start={[0, 0]}
            end={[1, 1]}
            colors={isDarkTheme ? ['black', '#848383'] : ['#fff', '#fff']}
            style={styles.container}
        >
            <Svg height="1000" width="1000" style={{ position: 'absolute' }}>
                <Circle cx="400" cy="40" r="350" fill={isDarkTheme ? 'rgba(253, 137, 20, 1)' : "rgba(41, 127, 239, 0.8)"} />
            </Svg>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.pop()}>
                <Ionicons name="arrow-back-sharp" size={28} color="white" />
            </TouchableOpacity>
            <View>
                {listHistory.length > 0 ?
                    <Text style={{ fontFamily: 'poppins-extralight', color: '#fff', fontSize: 30 }}>TRANSACTION</Text>
                    :
                    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, color: isDarkTheme ? '#fff' : 'black', fontFamily: 'poppins-extralight' }}>NOTHING 😛 HERE</Text>
                        <Text style={{ fontSize: 18, color: isDarkTheme ? '#fff' : 'black', fontFamily: 'poppins-extralight' }}>Go and buy something 🙆🏻‍♀️</Text>
                    </View>
                }
            </View>
            <View style={styles.wrapper}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {listHistory.map((item, index) => {
                        return (
                            <LinearGradient
                                key={index}
                                start={[0, 0]}
                                end={[1, 1]}
                                colors={isDarkTheme ? ['rgba(253, 137, 20, 0.8)', 'rgba(253, 137, 20, 0.4)'] : ['rgba(41, 127, 239, 1)', 'rgba(41, 127, 239, 0.6)']}
                                style={styles.item}
                            >
                                <View style={styles.infor}>
                                    <View style={styles.row}>
                                        <Text style={styles.text}>Name: </Text>
                                        <Text style={styles.text}>{item.CustomerName}</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.text}>Phone: </Text>
                                        <Text style={styles.text}>{item.CustomerPhone}</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.text}>Email: </Text>
                                        <Text style={styles.text}>{item.CustomerEmail}</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.text}>Address: </Text>
                                        <Text style={[styles.text, { flexShrink: 1 }]}>{item.CustomerAddress}</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.text}>Created Day: </Text>
                                        <Text style={styles.text}>{item.CreatedDay}</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.text}>Status: </Text>
                                        <Text style={[styles.text, { color: item.Status === '1' ? 'rgba(49, 224, 84, 0.9)' : 'rgba(250, 76, 76, 0.9)' }]}>{item.Status === '1' ? 'SUCCESS' : 'PROCESSING'}</Text>
                                    </View>
                                </View>
                                <View style={{ position: 'absolute', bottom: 5, right: 5 }}>
                                    {item.Status === '1' ?
                                        <>
                                            <Text style={{ fontSize: 50, alignSelf: 'center' }}>🎁</Text>
                                            <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 12 }}>Enjoy 😁</Text>
                                            <MaterialCommunityIcons name="check-bold" size={30} color="rgba(49, 224, 84, 0.9)" style={{ alignSelf: 'center', marginBottom: 5 }} />
                                        </>
                                        :
                                        <>
                                            <Text style={{ fontSize: 50, alignSelf: 'center' }}>🚴‍♀️</Text>
                                            <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 12 }}>(5 days left)</Text>
                                            <FontAwesome name="close" size={30} color="rgba(250, 76, 76, 0.9)" style={{ alignSelf: 'center', marginBottom: 5 }} />
                                        </>
                                    }
                                    <TouchableOpacity onPress={() => navigation.navigate('OrderDetailScreen', { orderID: item.ID })} style={[styles.button, { backgroundColor: '#fff' }]}>
                                        <Text style={{ paddingHorizontal: 30, paddingVertical: 8, color: 'rgba(41, 127, 239, 0.8)', fontWeight: 'bold' }}>VIEW</Text>
                                    </TouchableOpacity>
                                </View>
                            </LinearGradient>
                        );
                    })}
                </ScrollView>
            </View>
        </LinearGradient>
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
        height: '80%',
        marginTop: 20
    },
    item: {
        alignSelf: 'center',
        width: '95%',
        height: 200,
        borderRadius: 20,
        elevation: 8,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#fff'
    },
    infor: {
        marginLeft: 10,
        alignItems: 'flex-start',
        maxWidth: 235
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 2
    },
    text: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'poppins-extralight'
    },
    button: {
        borderRadius: 20,
        marginVertical: 3,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 6
    }
});