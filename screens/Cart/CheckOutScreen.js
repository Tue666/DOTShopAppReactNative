import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Title, Caption } from 'react-native-paper';
import { IMAGE_URL } from '../../core/config';
import { Ionicons } from '@expo/vector-icons';
import { checkOut } from '../../model/fetchData';

export default function CheckOutScreen({ navigation, onClickUpdateIconBadge, token, onLoadCartHandler, onLoadListPurchased }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const onClickOrderHandler = () => {
    Alert.alert('📣', 'Click \'OK\' to order 😎', [
      {
        text: 'OK', onPress: () => {
          checkOut(token, name, email, phone, address)
            .then(response => response.json())
            .then(json => {
              if (json) {
                Alert.alert('📣', 'Order successfully ✅. Thanks for your attention 😍.\nCheck your orders in HISTORY 🕛', [
                  { text: 'OK' }
                ]);
                onLoadCartHandler();
                onLoadListPurchased();
                onClickUpdateIconBadge(0);
              }
              else {
                Alert.alert('📣', 'Order failed ❌. Maybe something going wrong 😥. \nCONTACT us for more information and resolve 📞', [
                  { text: 'OK' }
                ]);
              }
            })
          navigation.pop();
        }
      },
      { text: 'CANCEL' }
    ])
  }
  return (
    <ImageBackground
      source={{ uri: IMAGE_URL + 'background_checkout.png' }}
      style={{ width: '100%', height: '100%' }}
    >
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.pop()}>
        <Ionicons name="arrow-back-sharp" size={28} color="black" />
      </TouchableOpacity>
      <View style={styles.container}>
        <Title style={{ color: 'red', fontSize: 25 }}>Order Now 😁</Title>
        <View style={styles.inputContainer}>
          <Caption style={styles.caption}>Name</Caption>
          <TextInput style={styles.input}
            placeholder="Enter Name ... "
            onChangeText={(value) => setName(value)}
            value={name}
            maxLength={20}
          >
          </TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Caption style={styles.caption}>Email</Caption>
          <TextInput style={styles.input}
            placeholder="Enter Email ... "
            onChangeText={(value) => setEmail(value)}
            value={email}
            keyboardType={'email-address'}
          >
          </TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Caption style={styles.caption}>Phone</Caption>
          <TextInput style={styles.input}
            placeholder="Enter Phone ... "
            onChangeText={(value) => setPhone(value)}
            value={phone}
            keyboardType={'number-pad'}
            maxLength={10}
          >
          </TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Caption style={styles.caption}>Address</Caption>
          <TextInput style={styles.input}
            placeholder="Enter Address ... "
            onChangeText={(value) => setAddress(value)}
            value={address}
            keyboardType={'email-address'}
          >
          </TextInput>
        </View>
        <TouchableOpacity onPress={onClickOrderHandler} disabled={name === '' || email === '' || phone === '' || address === '' ? true : false} style={styles.orderButton}>
          <Text style={styles.orderText}>ORDER 🥳</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 40,
    left: 45
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    marginVertical: 10,
    width: '75%'
  },
  caption: {
    alignSelf: 'flex-start'
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 5,
    fontSize: 16
  },
  orderButton: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(245, 109, 94, 0.7)',
    marginTop: 20,
    backgroundColor: 'rgba(245, 109, 94, 1)',
    elevation: 5
  },
  orderText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: '#fff'
  }
});