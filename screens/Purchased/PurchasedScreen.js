import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { IMAGE_URL } from '../../core/config';
import { Caption } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function PurchasedScreen({ isDarkTheme, token, navigation, onClickRouteLogin, listPurchased }) {
  if (!token) {
    return (
      <LinearGradient
        start={[0, 0]}
        end={[1, 1]}
        colors={isDarkTheme ? ['black', '#848383'] : ['#fff', '#fff']}
        style={styles.container}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Caption style={{ color: isDarkTheme ? '#fff' : 'black' }}>You are not logged in</Caption>
          <Caption style={{ color: isDarkTheme ? '#fff' : 'black' }}>Click below to login</Caption>
          <LinearGradient
            start={[0, 0]}
            end={[1, 1]}
            colors={['orange', '#F25C3C']}
            style={{ borderRadius: 20 }}
          >
            <TouchableOpacity onPress={onClickRouteLogin}>
              <Text style={{ paddingHorizontal: 20, paddingVertical: 10, color: '#fff' }}>LOGIN</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </LinearGradient>
    )
  }
  return (
    <LinearGradient
      start={[0, 0]}
      end={[1, 1]}
      colors={isDarkTheme ? ['#171719', '#171719', '#7E7E7D'] : ['#eee', '#fff']}
      style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          {listPurchased.length > 0 ?
            listPurchased.map((item, index) => {
              return (
                <TouchableOpacity key={index} style={styles.item} onPress={() => navigation.navigate('Detail', item)}>
                  <View style={styles.image}>
                    <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={{ uri: IMAGE_URL + item.Image }}></Image>
                    {item.Discount > 0 ?
                      <Image style={{ width: 50, height: 50, resizeMode: 'contain', position: 'absolute', top: -12, left: -7 }} source={{ uri: IMAGE_URL + 'sale.png' }}></Image>
                      :
                      <View></View>
                    }
                    {item.Quantity < 0 ?
                      <Image style={{ width: 80, height: 80, resizeMode: 'contain', position: 'absolute', top: 0, right: -7 }} source={{ uri: IMAGE_URL + 'soldout.png' }}></Image>
                      :
                      <View></View>
                    }
                  </View>
                  <View style={styles.infor}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'red' }}>{item.ProductName}</Text>
                    {item.Discount > 0 ?
                      <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                          <Text style={{ fontSize: 13, fontStyle: 'italic', textDecorationLine: 'line-through' }}>{item.Price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} vnđ</Text>
                          <Text style={{ fontSize: 13, fontStyle: 'italic', marginLeft: 10 }}>-{item.Discount}%</Text>
                        </View>
                        <Text style={{ color: 'red', fontWeight: 'bold', fontStyle: 'italic' }}>NOW {((parseInt(item.Price)) - ((parseInt(item.Price) * item.Discount / 100))).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} vnđ</Text>
                      </View>
                      :
                      <Text style={{ fontSize: 14, fontStyle: 'italic' }}>{item.Price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} vnđ</Text>
                    }
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <AntDesign name="star" size={16} color="orange" />
                        <AntDesign name="star" size={16} color="orange" />
                        <AntDesign name="star" size={16} color="orange" />
                        <AntDesign name="star" size={16} color="orange" />
                        <AntDesign name="star" size={16} color="gray" />
                      </View>
                      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Entypo name="eye" size={24} color="black" style={{ marginRight: 5, fontWeight: 'bold' }} />
                        <Text style={{ color: 'black', fontStyle: 'italic', fontWeight: 'bold' }}>{item.View}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            })
            :
            <View style={{ alignItems: 'center', marginTop: '50%' }}>
              <Text style={{ color: isDarkTheme ? '#fff' : 'black', fontFamily: 'poppins-extralight', fontSize: 18 }}>Nothing here 👌🏻</Text>
              <Text style={{ color: isDarkTheme ? '#fff' : 'black', fontFamily: 'poppins-extralight', fontSize: 18 }}>Go and buy something 💁🏻‍♀️</Text>
            </View>
          }
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10
  },
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    width: '44%',
    height: 230,
    backgroundColor: '#fff',
    margin: 10,
    elevation: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  image: {
    width: '90%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  infor: {
    height: '30%',
    paddingHorizontal: 5,
    paddingVertical: 5
  }
});