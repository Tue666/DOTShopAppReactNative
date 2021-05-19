import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { IMAGE_URL } from '../../core/config';

export default function HowToCheckOut() {
  return (
    <View>
      <Text style={styles.title}>HOW TO CHECKOUT</Text>
      <Text style={styles.caption}>After you have added the product to the cart, the top left of the screen will have a cart icon with the quantity, just tap it.</Text>
      <Text style={styles.caption}>(Sau khi đã thêm sản phẩm vào giỏ hàng, phía trên cùng bên trái màn hình sẽ có icon giỏ hàng đi kèm số lượng, chỉ cần nhấn vào nó)</Text>
      <Image style={styles.image} source={{ uri: IMAGE_URL + 'check-out-0.png' }}></Image>
      <Text style={styles.caption}>The shopping cart screen will appear, check the added products then click the red area below</Text>
      <Text style={styles.caption}>(Màn hình giỏ hàng sẽ hiện ra, kiểm lại các sản phẩm đã thêm sau đó nhấn vào vùng đỏ phía dưới)</Text>
      <Image style={styles.image} source={{ uri: IMAGE_URL + 'check-out-1.png' }}></Image>
      <Text style={styles.caption}>Fill in the information from 1 to 4, then check again and click the red area below to pay</Text>
      <Text style={styles.caption}>(Điền đầy các thông tin từ số 1 đến 4, sau đó kiểm tra lại và nhấn vào vùng đỏ phía dưới để thanh toán)</Text>
      <Image style={styles.image} source={{ uri: IMAGE_URL + 'check-out-2.png' }}></Image>
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