import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { IMAGE_URL } from '../../core/config';

export default function HowToRegister() {
    return (
        <View>
            <Text style={styles.title}>HOW TO REGISTER</Text>
            <Text style={styles.caption}>Swipe right from the left side of the screen or tap the red area to open the menu</Text>
            <Text style={styles.caption}>(Vuốt phải từ bên cạnh trái màn hình hoặc nhấn vào vùng màu đỏ để mở menu)</Text>
            <Image style={styles.image} source={{ uri: IMAGE_URL + 'login-1.png' }}></Image>
            <Text style={styles.caption}>Click the red area below</Text>
            <Text style={styles.caption}>(Nhấn vào vùng đỏ bên dưới)</Text>
            <Image style={styles.image} source={{ uri: IMAGE_URL + 'login-2.png' }}></Image>
            <Text style={styles.caption}>To register, press the red area number 4</Text>
            <Text style={styles.caption}>(Để đăng ký nhấn vào vùng đỏ số 4)</Text>
            <Image style={styles.image} source={{ uri: IMAGE_URL + 'login-3.png' }}></Image>
            <Text style={styles.caption}>Enter the required information from number 1 to number 3, then press REGISTER</Text>
            <Text style={styles.caption}>(Nhập các thông tin cần thiết từ số 1 đến số 3, sau đó nhấn REGISTER)</Text>
            <Image style={styles.image} source={{ uri: IMAGE_URL + 'login-4.png' }}></Image>
            <Text style={styles.title}>That's all, good lock</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'bigshoulders-bold',
        color: 'red',
        fontSize: 25,
        marginVertical: 10,
        alignSelf: 'center'
    },
    caption: {
        fontFamily: 'poppins-extralight',
        fontSize: 15,
        alignSelf: 'center'
    },
    image: {
        width: 330,
        height: 500,
        resizeMode: 'stretch',
        alignSelf: 'center',
        marginBottom: 20
    }
});