import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { IMAGE_URL } from '../../core/config';

export default function HowToAddProductToCart() {
  return (
    <View>
      <Text style={styles.title}>HOW TO ADD PRODUCT TO CART</Text>
      <Text style={styles.caption}>On the HOME screen or anywhere with product information, tap the product</Text>
      <Text style={styles.caption}>(Ở màn hình HOME hoặc bất cứ đâu có thông tin sản phẩm, nhấn vào sản phẩm)</Text>
      <Image style={styles.image} source={{ uri: IMAGE_URL + 'add-cart-1.png' }}></Image>
      <Text style={styles.caption}>The product information page will appear, then click the red area below</Text>
      <Text style={styles.caption}>(Trang thông tin sản phẩm sẽ hiện ra, sau đó nhấn vào vùng đỏ phía dưới)</Text>
      <Image style={styles.image} source={{ uri: IMAGE_URL + 'add-cart-2.png' }}></Image>
      <Text style={styles.caption}>Select the quantity you want, then tap the red area below</Text>
      <Text style={styles.caption}>(Chọn số lượng bạn muốn, sau đó nhấn vào vùng đỏ phía dưới)</Text>
      <Image style={styles.image} source={{ uri: IMAGE_URL + 'add-cart-3.png' }}></Image>
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