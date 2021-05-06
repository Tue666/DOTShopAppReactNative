import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Svg, Polygon } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function RegisterScreen({ navigation }) {
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
            <Ionicons
              name="person-circle-outline"
              size={100}
              color={'orange'}>
            </Ionicons>
          </View>
          <View style={styles.down}>
            <View style={styles.textInputContainer}>
              <Ionicons
                style={styles.icon}
                name="person-circle-outline"
                size={30}
                color={'orange'}>
              </Ionicons>
              <TextInput
                style={styles.textInput}
                placeholder="Enter user name here ... "
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
                placeholder="Enter password here  ... "
                secureTextEntry={true}
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
              >
              </TextInput>
            </View>
            <TouchableOpacity>
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