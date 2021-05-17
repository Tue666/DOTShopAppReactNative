import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function HistoryScreen({ isDarkTheme, navigation, listFeedback }) {
    return (
        <LinearGradient
            start={[0, 0]}
            end={[1, 1]}
            colors={isDarkTheme ? ['#171719', '#717171'] : ['#eee', '#fff']}
            style={styles.container}
        >
            <Svg height="1000" width="1000" style={{ position: 'absolute' }}>
                <Circle cx="400" cy="40" r="350" fill={isDarkTheme ? 'orange' : "rgba(41, 127, 239, 0.8)"} />
            </Svg>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.pop()}>
                <Ionicons name="arrow-back-sharp" size={28} color="white" />
            </TouchableOpacity>
            <View style={styles.wrapper}>
                <View style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={[styles.text, { color: '#fff' }]}>In Waiting</Text>
                    <Text style={[styles.text, { color: '#FB7373' }]}>Admin Responsed</Text>
                    <Text style={[styles.text, { color: '#64E15E' }]}>Success (Admin Locked)</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {listFeedback.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={[styles.item, { backgroundColor: item.Status === '1' ? '#64E15E' : item.Response === '0' ? '#FB7373' : '#fff' }]} onPress={() => navigation.navigate('DetailScreen', { feedbackID: item.ID })}>
                                <Text style={styles.title}>{item.Title}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingHorizontal: 10 }}>
                                    <Text style={[styles.caption, { color: item.Status === '1' ? 'black' : item.Response === '0' ? '#fff' : 'black' }]}>{item.Name}</Text>
                                    <Text style={[styles.caption, { color: item.Status === '1' ? 'black' : item.Response === '0' ? '#fff' : 'black' }]}>{item.CreatedDay}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
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
        height: 70,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        elevation: 5,
        marginVertical: 10
    },
    title: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 8,
        paddingLeft: 10
    },
    caption: {
        fontSize: 12
    }
});