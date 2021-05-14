import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Caption } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { getStorage } from '../../model/asyncStorage';
import { TOKEN } from '../../constant';
import Index from '../../components/cart';

export default function CartScreen({ drawerNavigation, onClickRouteLogin, navigation, onClickUpdateIconBadge }) {
  const [token, setToken] = useState('');
  getStorage(TOKEN).then(response=>setToken(response));
  return (
    <View style={styles.container}>
      {token ?
        <Index token={token} drawerNavigation={drawerNavigation} navigation={navigation} onClickUpdateIconBadge={onClickUpdateIconBadge}></Index>
        :
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
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: '#fff'
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-end'
  },
  button: {
    borderRadius: 10,
    margin: 3
  },
  text: {
    padding: 13,
    color: '#fff'
  }
});