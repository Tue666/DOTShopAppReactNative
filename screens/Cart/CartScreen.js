import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Caption } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Index from '../../components/cart';

export default function CartScreen({ isDarkTheme, drawerNavigation, onClickRouteLogin, navigation, onClickUpdateIconBadge, listCart, onLoadCartHandler, token, totalPrice }) {
  return (
    <LinearGradient
      start={[0, 0]}
      end={[1, 1]}
      colors={isDarkTheme ? ['#54514F', '#171719'] : ['#eee', '#fff']}
      style={styles.container}>
      {token ?
        <Index token={token} isDarkTheme={isDarkTheme} listCart={listCart} totalPrice={totalPrice} onLoadCartHandler={onLoadCartHandler} drawerNavigation={drawerNavigation} navigation={navigation} onClickUpdateIconBadge={onClickUpdateIconBadge}></Index>
        :
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
      }
    </LinearGradient>
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