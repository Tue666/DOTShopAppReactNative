import React, { useCallback, useState } from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Modal, TextInput, ScrollView, RefreshControl } from 'react-native';
import { Caption } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { submitFeedback } from '../../model/fetchData';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function ContactScreen({ isDarkTheme, token, navigation, countUnread, onLoadFeedback }) {
    const [refreshing, setRefreshing] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [switchModal, setSwitchModal] = useState(false);
    const onRefresh = useCallback(() => {
        onLoadFeedback();
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    const onClickDoContact = (routeName) => {
        if (token) {
            switch (routeName) {
                case 'report':
                    setSwitchModal(!switchModal);
                    break;
                case 'history':
                    navigation.navigate('HistoryScreen');
                    break;
            }
        }
        else {
            Alert.alert('📣', 'Oops! You are not logged in, do it and try again!. 💩', [{ text: 'OK' }])
        }
    }
    const onClickSubmitFeedback = () => {
        submitFeedback(token, name, email, phone, title, content)
            .then(response => response.json())
            .then(json => {
                if (json) {
                    Alert.alert('📣', 'Submit successfully ✅. \nThanks for your report, we will receive and respond ASAP ✍🏻. \nDon\'t forget to check the history 🤙🏻', [{ text: 'OK' }]);
                    onLoadFeedback();
                }
                else {
                    Alert.alert('📣', 'Submit failed ❌. Maybe something going wrong 😥. \nCONTACT us for more information and resolve 📞', [{ text: 'OK' }])
                }
            })
        setSwitchModal(!switchModal);
    }
    return (
        <LinearGradient
            start={[0, 0]}
            end={[1, 1]}
            colors={isDarkTheme ? ['#171719', '#fff'] : ['#eee', '#fff']}
            style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={switchModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <ScrollView style={{ width: '100%', height: '100%' }} showsVerticalScrollIndicator={false}>
                            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', color: 'rgba(41, 127, 239, 1)', fontStyle: 'italic', fontSize: 20 }}>GIVE ME YOUR OPINION</Text>
                                <View style={styles.inputContainer}>
                                    <Caption style={styles.caption}>Name</Caption>
                                    <TextInput style={styles.input}
                                        placeholder=" ... "
                                        onChangeText={value => setName(value)}
                                        value={name}
                                        maxLength={30}
                                    >
                                    </TextInput>
                                </View>
                                <View style={styles.inputContainer}>
                                    <Caption style={styles.caption}>Email</Caption>
                                    <TextInput style={styles.input}
                                        placeholder=" ... "
                                        keyboardType={'email-address'}
                                        onChangeText={value => setEmail(value)}
                                        value={email}
                                        maxLength={30}
                                    >
                                    </TextInput>
                                </View>
                                <View style={styles.inputContainer}>
                                    <Caption style={styles.caption}>Phone</Caption>
                                    <TextInput style={styles.input}
                                        placeholder=" ... "
                                        keyboardType={'number-pad'}
                                        onChangeText={value => setPhone(value)}
                                        value={phone}
                                        maxLength={10}
                                    >
                                    </TextInput>
                                </View>
                                <View style={styles.inputContainer}>
                                    <Caption style={styles.caption}>Title</Caption>
                                    <TextInput style={styles.input}
                                        placeholder=" ... "
                                        onChangeText={value => setTitle(value)}
                                        value={title}
                                        maxLength={30}
                                    >
                                    </TextInput>
                                </View>
                                <View style={styles.inputContainer}>
                                    <Caption style={styles.caption}>Content</Caption>
                                    <TextInput style={styles.input}
                                        placeholder=" ... "
                                        multiline={true}
                                        onChangeText={value => setContent(value)}
                                        value={content}
                                    >
                                    </TextInput>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={onClickSubmitFeedback} disabled={name === '' || email === '' || phone === '' || title === '' || content === '' ? true : false} style={styles.submitButton}>
                                        <Text style={styles.submitText}>SUBMIT 🥳</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => setSwitchModal(!switchModal)} style={[styles.submitButton, { backgroundColor: 'rgba(250, 76, 76, 1)', borderColor: 'rgba(250, 76, 76, 0.8)' }]}>
                                        <Text style={styles.submitText}>CANCEL</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
            <ScrollView
                style={{ width: '100%' }}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    >
                    </RefreshControl>
                }
            >
                <View style={styles.contact}>
                    <View style={{ marginVertical: 10, paddingLeft: 10 }}>
                        <Text style={{ fontFamily: 'poppins-bold', color: 'rgba(41, 127, 239, 1)', fontSize: 20, marginLeft: 10 }}>Contact us: </Text>
                    </View>
                    <View style={styles.row}>
                        <Entypo name="location" size={24} color="rgba(41, 127, 239, 1)" />
                        <Text style={styles.text}>280 An Dương Vương, p.4, q.5, TP.HCM</Text>
                    </View>
                    <View style={styles.row}>
                        <Entypo name="phone" size={24} color="rgba(41, 127, 239, 1)" />
                        <Text style={styles.text}>069696969</Text>
                    </View>
                    <View style={styles.row}>
                        <MaterialIcons name="mark-email-read" size={24} color="rgba(41, 127, 239, 1)" />
                        <Text style={styles.text}>Abc123@gmail.com</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                        <TouchableOpacity onPress={() => onClickDoContact('report')}>
                            <LinearGradient
                                start={[0, 0]}
                                end={[1, 1]}
                                colors={['red', 'orange']}
                                style={styles.button}
                            >
                                <Text style={styles.textButton}>REPORT</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onClickDoContact('history')}>
                            <LinearGradient
                                start={[0, 0]}
                                end={[1, 1]}
                                colors={['rgba(41, 127, 239, 1)', 'rgba(41, 127, 239, 0.6)']}
                                style={styles.button}
                            >
                                <Text style={styles.textButton}>HISTORY</Text>
                                {countUnread > 0 ?
                                    <View style={{ position: 'absolute', top: -5, right: -5, width: 25, height: 25, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', borderRadius: 25 / 2 }}>
                                        <Text style={{ color: '#fff' }}>{countUnread}</Text>
                                    </View>
                                    :
                                    <View></View>
                                }
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.map}>
                <MapView
                    style={{ width: '100%', height: '100%' }}
                    initialRegion={{
                        latitude: 10.761267415194775,
                        longitude: 106.68295912553545,
                        latitudeDelta: 0.0025,
                        longitudeDelta: 0.0015,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: 10.761267415194775,
                            longitude: 106.68295912553545
                        }}
                    >
                    </Marker>
                </MapView>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contact: {
        width: '100%',
        height: '45%'
    },
    row: {
        borderRadius: 40,
        backgroundColor: '#fff',
        elevation: 6,
        alignSelf: 'center',
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '90%',
        height: 45,
        paddingHorizontal: 15
    },
    text: {
        paddingLeft: 10,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    button: {
        borderRadius: 20,
        backgroundColor: '#fff',
        elevation: 7,
        marginHorizontal: 10
    },
    textButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: '#fff',
        fontWeight: 'bold'
    },
    map: {
        padding: 20,
        width: '100%',
        height: '55%'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.7)'
    },
    modalView: {
        width: '90%',
        height: '70%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        marginVertical: 10,
        width: '95%'
    },
    caption: {
        alignSelf: 'flex-start'
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 5,
        fontSize: 16
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