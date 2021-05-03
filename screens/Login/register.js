import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Register({ navigation }) {
    
    return (
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                <View style={styles.up}>
                <Ionicons
                    name="person-circle-outline"
                    size={100}
                    color={'rgb(221, 97, 97)'}>
               </Ionicons>
               
                <Text style={styles.title}>Register</Text>
                </View>
                <View style={styles.down}>
                    <View style={styles.textInputContainer}>
                    <Ionicons
                    style={styles.icon}
                    name="person-circle-outline"
                    size={30}
                    color={'rgb(221, 97, 97)'}>
                   </Ionicons>
                         <TextInput
                             style={styles.textInput}
                             textContentType='emailAddress'
                             keyboardType='email-address'
                             placeholder="Enter your email"
                         >
                        </TextInput>
                    </View>
                    <View style={styles.textInputContainer}>
                    <Ionicons
                    style={styles.icon}
                    name="lock-closed-outline"
                    size={30}
                    color={'rgb(221, 97, 97)'}>
                   </Ionicons>
                         <TextInput
                             style={styles.textInput}
                             placeholder="Enter your password"
                             secureTextEntry={true}
                         >
                        </TextInput>
                    </View>
                    <View style={styles.textInputContainer}>
                    <Ionicons
                    style={styles.icon}
                    name="lock-closed-outline"
                    size={30}
                    color={'rgb(221, 97, 97)'}>
                   </Ionicons>
                         <TextInput
                             style={styles.textInput}
                             placeholder="Enter your password"
                             secureTextEntry={true}
                         >
                        </TextInput>
                    </View>
                    <TouchableOpacity style={styles.loginButton}>
                         <Text style={styles.loginButtonTitle}>REGISTER</Text>
                     </TouchableOpacity>
                     
                     
                     <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                     <Text style={{color:'#663399',marginTop: 50,fontSize:17}}>
                      <Ionicons
                      style={styles.icon}
                      name="return-up-back-outline"
                      size={30}
                      color={'#663399'}>
                      </Ionicons>  Go Back</Text></TouchableOpacity>
                     
                </View>
                </View>
          </TouchableWithoutFeedback>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: '#fff5ee'
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
      paddingTop:20
     
    },
    title: {
      color: 'white',
      color: 'rgb(221, 97, 97)',
      textAlign: 'center',
      width: 400,
      fontSize: 30
    },
    textInputContainer: {
      paddingLeft:10,
      paddingHorizontal: 50,
      borderRadius: 6,
      marginBottom: 20,
      backgroundColor: '#f5deb3',
      flexDirection: "row",
      flexWrap: "wrap",
    },
    textInput: {
      width: 200,
      height: 45
    },
    loginButton: {
      marginTop:25,
      width: 300,
      height: 45,
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(221, 97, 97)',
      
    },
    loginButtonTitle: {
      fontSize: 18,
      color: 'white'
    },
    facebookButton: {
      width: 300,
      height: 45,
      borderRadius: 6,
      justifyContent: 'center',
    },
    line: {
      height: 1,
      flex: 2,
      backgroundColor: 'black'
    },
    textOR: {
      flex: 1,
      textAlign: 'center',
      
    },
    divider: {
      flexDirection: 'row',
      height: 40,
      width: 298,
      justifyContent: 'center',
      alignItems: 'center'
    },
    signup: {
        paddingTop:50,
        fontSize:17
    },
    icon: {
        paddingTop:7,
        paddingRight:5,
    }
});
