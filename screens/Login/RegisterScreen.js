import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { Svg, Polygon } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { Caption } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { checkExistUserName, Register } from '../../model/fetchData';

export default function RegisterScreen({ navigation }) {
  const [userName, setUserName] = useState('');
  const [userNameMSG, setUserNameMSG] = useState('');
  const [passWord, setPassWord] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const onChangeUserNameHandler = (value) => {
    if (value) {
      checkExistUserName(value)
        .then(response => response.json())
        .then(json => {
          if (json) {
            setUserNameMSG('This user name is existed 😛');
          }
          else {
            setUserNameMSG('');
          }
        });
      setUserName(value);
    }
  }
  const onClickRegisterHandler = () => {
    Register(userName, passWord, confirmPass)
      .then(response => response.json())
      .then(json => {
        switch (json) {
          case 1:
            {
              Alert.alert('📣', 'Register successfully ✅', [{ text: 'OK' }]);
              navigation.pop();
            }
            break;
          case 2:
            Alert.alert('📣', 'Oops!. This name is already in use 😩, please choose another name 😉', [{ text: 'OK' }]);
            break;
          case 3:
            Alert.alert('📣', 'The password is in conflict 😮. Check and try again 😁', [{ text: 'OK' }]);
            break;
          case 4:
            Alert.alert('📣', 'Register failed ❌. Maybe something going wrong 😥. \nCONTACT us for more information and resolve 📞', [{ text: 'OK' }])
            break;
        }
      })
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <LinearGradient
          start={[1, 1]}
          end={[0, 0]}
          colors={['#F75710', '#ECB64E']}
          style={styles.polygon}>
          <Svg style={{ width: '100%', height: '100%' }}>
            <Polygon
              points="20,0 350,0 250,200"
              fill="white"
            >
            </Polygon>
          </Svg>
        </LinearGradient>
        <View style={styles.form}>
          <View style={styles.up}>
            <FontAwesome name="user-plus" size={100} color="orange" />
          </View>
          <View style={styles.down}>
            <View style={[styles.textInputContainer, { marginBottom: 0 }]}>
              <Ionicons
                style={styles.icon}
                name="person-circle-outline"
                size={30}
                color={'orange'}>
              </Ionicons>
              <TextInput
                style={styles.textInput}
                placeholder="Enter user name here ... "
                onChangeText={value => onChangeUserNameHandler(value)}
              >
              </TextInput>
            </View>
            <Caption style={userNameMSG ? { marginBottom: 5, fontStyle: 'italic', color: 'red' } : {}}>{userNameMSG}</Caption>
            <View style={styles.textInputContainer}>
              <Ionicons
                style={styles.icon}
                name="lock-closed-outline"
                size={30}
                color={'orange'}>
              </Ionicons>
              <TextInput
                style={styles.textInput}
                placeholder="Enter password here  ... "
                secureTextEntry={true}
                onChangeText={value => setPassWord(value)}
              >
              </TextInput>
            </View>
            <View style={styles.textInputContainer}>
              <Ionicons
                style={styles.icon}
                name="lock-closed-outline"
                size={30}
                color={'orange'}>
              </Ionicons>
              <TextInput
                style={styles.textInput}
                placeholder="Re Enter password here  ... "
                secureTextEntry={true}
                onChangeText={value => setConfirmPass(value)}
              >
              </TextInput>
            </View>
            <TouchableOpacity onPress={onClickRegisterHandler} disabled={userName === '' || passWord === '' || confirmPass === '' ? true : false}>
              <LinearGradient
                start={[0, 0]}
                end={[1, 1]}
                colors={['#F75710', '#ECB64E']}
                style={styles.loginButton}
              >
                <Text style={styles.loginButtonTitle}>REGISTER</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.loginButton, { borderWidth: 1, borderColor: 'orange' }]} onPress={() => navigation.pop()}>
              <Text style={[styles.loginButtonTitle, { color: 'orange' }]}>BACK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  polygon: {
    position: 'absolute',
    width: '100%',
    height: '85%',
    backgroundColor: 'orange',
    bottom: 0,
    borderRadius: 20
  },
  form: {
    width: '90%',
    height: '85%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  up: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  down: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20
  },
  textInputContainer: {
    paddingLeft: 10,
    paddingHorizontal: 50,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    backgroundColor: '#fff',
    flexDirection: "row",
    flexWrap: "wrap",
  },
  textInput: {
    width: 220,
    height: 45
  },
  loginButton: {
    marginTop: 25,
    width: 230,
    height: 45,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButtonTitle: {
    fontSize: 18,
    color: 'white'
  },
  icon: {
    paddingTop: 5,
    paddingRight: 5,
  }
});