import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { IMAGE_URL } from '../../core/config';
import { TOKEN } from '../../constant';
import { getStorage } from '../../model/asyncStorage';
import { Caption } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { loadPurchased } from '../../model/fetchData';

export default function PurchasedScreen({ navigation, onClickRouteLogin }) {
  const [token, setToken] = useState('');
  const [listPurchased, setListPurchased] = useState([]);
  useEffect(() => {
    getStorage(TOKEN).then(response => {
      setToken(response);
      loadPurchased(response).then(response => response.json()).then(json => setListPurchased(json));
    });
  }, []);
  if (!token) {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Caption>You are not logged in</Caption>
          <Caption>Click below to login</Caption>
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
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          {listPurchased.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={styles.item} onPress={() => navigation.navigate('Detail', item)}>
                <View style={styles.image}>
                  <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={{ uri: IMAGE_URL + item.Image }}></Image>
                </View>
                <View style={styles.infor}>
                  <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'red' }}>{item.ProductName}</Text>
                  <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'black' }}>{item.Price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} vnđ</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
    </View>
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
    borderRadius: 10
  },
  image: {
    width: '90%',
    height: '70%',
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