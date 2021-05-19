import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { IMAGE_URL } from '../../core/config';

export default function HowToLogin() {
  return (
    <View>
      <Text style={styles.title}>HOW TO LOGIN</Text>
      <Text style={styles.caption}>Swipe right from the left side of the screen or tap the red area to open the menu</Text>
      <Text style={styles.caption}>(Vuốt phải từ bên cạnh trái màn hình hoặc nhấn vào vùng màu đỏ để mở menu)</Text>
      <Image style={styles.image} source={{ uri: IMAGE_URL + 'login-1.png' }}></Image>
      <Text style={styles.caption}>Click the red area below</Text>
      <Text style={styles.caption}>(Nhấn vào vùng đỏ bên dưới)</Text>
      <Image style={styles.image} source={{ uri: IMAGE_URL + 'login-2.png' }}></Image>
      <Text style={styles.caption}>Fill in the correct information number 1 and 2, then press LOGIN</Text>
      <Text style={styles.caption}>(Điền đúng thông tin số 1 và 2, sau đó nhấn LOGIN)</Text>
      <Image style={styles.image} source={{ uri: IMAGE_URL + 'login-3.png' }}></Image>
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