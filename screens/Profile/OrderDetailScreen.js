import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { IMAGE_URL } from '../../core/config';
import { getListOrderDetail } from '../../model/fetchData';

export default function OrderDetail({ isDarkTheme, navigation, route }) {
  const [listOrderDetail, setListOrderDetail] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    getListOrderDetail(route.params.orderID)
      .then(response => response.json())
      .then(json => {
        setListOrderDetail(JSON.parse(json['ListDetail']));
        setTotalPrice(JSON.parse(json['TotalPrice']));
      });
  }, []);
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
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
        <Text style={{ color: '#fff', fontSize: 30, fontFamily: 'poppins-extralight' }}>TOTAL PRICE</Text>
        <Text style={{ color: '#fff', fontSize: 30, fontFamily: 'poppins-extralight' }}>{totalPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} vnđ</Text>
      </View>
      <View style={styles.wrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {listOrderDetail.map((item, index) => {
            return (
              <LinearGradient
                key={index}
                start={[0, 0]}
                end={[1, 1]}
                colors={['#fff', '#fff']}
                style={styles.item}
              >
                <View style={styles.image}>
                  <Image style={{ width: '100%', height: '75%', resizeMode: 'contain' }} source={{ uri: IMAGE_URL + item.Image }}></Image>
                </View>
                <View style={styles.infor}>
                  <View style={styles.row}>
                    <Text style={[styles.text, { color: 'red', fontWeight: 'bold' }]}>{item.ProductName}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.text}>Quantity: </Text>
                    <Text style={styles.text}>{item.Quantity}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.text}>Price: </Text>
                    <Text style={styles.text}>{item.Price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} vnđ</Text>
                  </View>
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
    height: 180,
    borderRadius: 20,
    elevation: 8,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10
  },
  image: {
    width: '42%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  infor: {
    width: '55%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 15,
    fontFamily: 'poppins-extralight'
  }
});