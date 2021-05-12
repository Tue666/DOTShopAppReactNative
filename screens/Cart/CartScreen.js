import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Item from '../../components/cart/item';
import { getStorage } from '../../model/asyncStorage';
import { TOKEN } from '../../constant';

export default function CartScreen({ navigation }) {
  const [token, setToken] = useState('');
  useEffect(() => {
    getStorage(TOKEN).then(response => setToken(response));
  }, []);
  const onClickCheckOutHandler = () => {
    if (!token) {
      Alert.alert('Hey!', 'You are not logged in. Click \'Login\' below to login then try again.', [
        { text: 'Login' },
        { text: 'Cancel' }
      ]);
    }
  }
  const onClickClearHandler = () => {
    Alert.alert('Hey!', 'Are you sure you wanna clear all?.', [
      { text: 'Clear' },
      { text: 'Cancel' }
    ]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.action}>
        <LinearGradient
          start={[0, 0]}
          end={[1, 1]}
          colors={['#2B56AB', '#7ABCDA']}
          style={styles.button}
        >
          <TouchableOpacity onPress={onClickCheckOutHandler}>
            <Text style={styles.text}>Check Out</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          start={[0, 0]}
          end={[1, 1]}
          colors={['red', '#F4B3B3']}
          style={styles.button}
        >
          <TouchableOpacity onPress={onClickClearHandler}>
            <Text style={styles.text}>Clear</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <Item></Item>
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
    alignSelf: 'flex-end',
    marginBottom: 10
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