import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Caption } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Svg, { Circle } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { editUser } from '../../model/fetchData';

export default function EditProfile({ isDarkTheme, onEditUserHandler, navigation, route }) {
  const [name, setName] = useState(route.params.user.Name);
  const [phone, setPhone] = useState(route.params.user.Phone);
  const [email, setEmail] = useState(route.params.user.Email);
  const [address, setAddress] = useState(route.params.user.Address);
  const onClickEditUserHandler = () => {
    editUser(route.params.token, name, phone, email, address)
      .then(response => response.json())
      .then(json => {
        if (json) {
          Alert.alert('📣', 'Edit information successfully ✅', [{ text: 'OK' }]);
          onEditUserHandler();
          navigation.pop();
        }
        else {
          Alert.alert('📣', 'Edit information failed ❌. Maybe something going wrong 😥. \nCONTACT us for more information and resolve 📞', [{ text: 'OK' }])
        }
      })
  }
  return (
    <LinearGradient
      start={[0, 0]}
      end={[1, 1]}
      colors={isDarkTheme ? ['black', '#848383'] : ['#fff', '#fff']}
      style={styles.container}
    >
      <Svg height="100%" width="100%" style={{ position: 'absolute', opacity: 0.5 }}>
        <Circle cx="400" cy="50" r="150" fill="rgba(251, 210, 156, 1)" />
      </Svg>
      <Svg height="100%" width="100%" style={{ position: 'absolute', opacity: 0.5 }}>
        <Circle cx="300" cy="800" r="200" fill="rgba(251, 210, 156, 0.6)" />
      </Svg>
      <Svg height="100%" width="100%" style={{ position: 'absolute', opacity: 0.5 }}>
        <Circle cx="00" cy="400" r="280" fill="rgba(251, 210, 156, 1)" />
      </Svg>
      <Svg height="100%" width="100%" style={{ position: 'absolute', opacity: 0.5 }}>
        <Circle cx="380" cy="380" r="150" fill="rgba(251, 210, 156, 0.8)" />
      </Svg>
      <TouchableOpacity style={{ position: 'absolute', top: 40, left: 10 }}>
        <Ionicons name="chevron-back" size={30} color={isDarkTheme ? '#fff' : 'black'} onPress={() => navigation.pop()} style={{ paddingHorizontal: 10 }} />
      </TouchableOpacity>
      <View>
        <FontAwesome5 name="user-edit" size={80} color="orange" />
      </View>
      <View style={styles.down}>
        <Caption style={{ alignSelf: 'flex-start', color: isDarkTheme ? '#fff' : 'gray' }}>Name</Caption>
        <View style={styles.textInputContainer}>
          <Ionicons
            style={styles.icon}
            name={isDarkTheme ? "person" : "person-outline"}
            size={25}
            color="#FF6347"
          >
          </Ionicons>
          <TextInput
            style={[styles.textInput, { color: isDarkTheme ? '#fff' : 'black' }]}
            placeholder="No information"
            value={name}
            onChangeText={value => setName(value)}
            maxLength={20}
          >
          </TextInput>
        </View>
        <Caption style={{ alignSelf: 'flex-start', color: isDarkTheme ? '#fff' : 'gray' }}>Phone</Caption>
        <View style={styles.textInputContainer}>
          <Ionicons
            style={styles.icon}
            name={isDarkTheme ? "call" : "call-outline"}
            size={25}
            color="#FF6347"
          >
          </Ionicons>
          <TextInput
            style={[styles.textInput, { color: isDarkTheme ? '#fff' : 'black' }]}
            placeholder="No information"
            value={phone}
            onChangeText={value => setPhone(value)}
            keyboardType={'number-pad'}
            maxLength={10}
          >
          </TextInput>
        </View>
        <Caption style={{ alignSelf: 'flex-start', color: isDarkTheme ? '#fff' : 'gray' }}>Email</Caption>
        <View style={styles.textInputContainer}>
          <Ionicons
            style={styles.icon}
            name={isDarkTheme ? "mail" : "mail-outline"}
            size={25}
            color="#FF6347"
          >
          </Ionicons>
          <TextInput
            style={[styles.textInput, { color: isDarkTheme ? '#fff' : 'black' }]}
            textContentType='emailAddress'
            keyboardType='email-address'
            placeholder="No information"
            value={email}
            onChangeText={value => setEmail(value)}
            keyboardType={'email-address'}
          >
          </TextInput>
        </View>
        <Caption style={{ alignSelf: 'flex-start', color: isDarkTheme ? '#fff' : 'gray' }}>Address</Caption>
        <View style={styles.textInputContainer}>
          <Ionicons
            style={styles.icon}
            name={isDarkTheme ? "location" : "location-outline"}
            size={25}
            color="#FF6347"
          >
          </Ionicons>
          <TextInput
            style={[styles.textInput, { color: isDarkTheme ? '#fff' : 'black' }]}
            placeholder="No information"
            value={address}
            onChangeText={value => setAddress(value)}
            keyboardType={'email-address'}
          >
          </TextInput>
        </View>
        <LinearGradient
          start={[0, 0]}
          end={[1, 1]}
          colors={['red', 'orange']}
          style={styles.button}
        >
          <TouchableOpacity onPress={onClickEditUserHandler}>
            <Text style={[styles.text, { elevation: 6 }]}>SAVE</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </LinearGradient >
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  down: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30
  },
  textInputContainer: {
    width: 320,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20
  },
  textInput: {
    width: 200,
    paddingLeft: 10
  },
  button: {
    marginVertical: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'orange',
    borderWidth: 1
  },
  text: {
    fontSize: 15,
    color: '#fff',
    paddingHorizontal: 40,
    paddingVertical: 10
  },
  icon: {
    paddingTop: 7,
    paddingBottom: 5,
    paddingRight: 8,
  }
});
