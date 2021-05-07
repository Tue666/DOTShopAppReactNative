import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'

import {Avatar} from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Svg, {  Circle,Rect} from 'react-native-svg'

export default function EditProfile({ navigation }) {
    return (
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         
      
         <View style={styles.container}>
         <Svg height="100%" width="100%" style={{position:'absolute', opacity:0.5}}>
         <Circle cx="400" cy="50" r="250" fill="#bb99ff" />
         </Svg>  
         <Svg height="100%" width="100%" style={{position:'absolute', opacity:0.5}}>
         <Circle cx="00" cy="400" r="200" fill="#bb99ff" />
         </Svg> 
         <Svg height="100%" width="100%" style={{position:'absolute', opacity:0.5}}>
         <Circle cx="400" cy="700" r="250" fill="#bb99ff" />
         </Svg>  
         
         <View style={styles.up}>
                <Avatar.Image 
                source={require('../../assets/user.png')}
                size={80}
                />
         </View>
         
         <View style={styles.down}>
             <View style={styles.textInputContainer}>
                   <Ionicons
                   style={styles.icon}
                   name="person-outline"
                   size={30}
                   color={'rgb(221, 97, 97)'}>
                 </Ionicons>
                  <TextInput
                      style={styles.textInput}
                      placeholder="your name"
                  >
                 </TextInput>
             </View>
             <View style={styles.textInputContainer}>
                   <Ionicons
                   style={styles.icon}
                   name="call-outline"
                   size={30}
                   color={'rgb(221, 97, 97)'}>
                 </Ionicons>
                  <TextInput
                      style={styles.textInput}
                      placeholder="your call"
                  >
                 </TextInput>
             </View>
             <View style={styles.textInputContainer}>
                   <Ionicons
                   style={styles.icon}
                   name="mail-outline"
                   size={30}
                   color={'rgb(221, 97, 97)'}>
                   </Ionicons>
                  <TextInput
                      style={styles.textInput}
                      textContentType='emailAddress'
                      keyboardType='email-address'
                      placeholder="email"
                  >
                 </TextInput>
             </View>
             <View style={styles.textInputContainer}>
                   <Ionicons
                   style={styles.icon}
                   name="location-outline"
                   size={30}
                   color={'rgb(221, 97, 97)'}>
                 </Ionicons>
                  <TextInput
                      style={styles.textInput}
                      placeholder="your address"
                  >
                 </TextInput>
             </View>
             <TouchableOpacity style={styles.SubmitButton}>
                  <Text style={styles.SubmitButtonTitle}>SUBMIT</Text>
              </TouchableOpacity>
                              
              <TouchableOpacity style={styles.GobackButton} onPress={() => navigation.navigate('ProfileScreen')}>
              <Text style={styles.GobackButtonTitle}>Go Back</Text>
              </TouchableOpacity>
              
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
    },
    up: {
      flex: 2,
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
    textInputContainer: {
      paddingLeft:10,
      paddingHorizontal: 50,
      width:380, 
      borderBottomWidth: 3,
      borderBottomColor: '#e0ffff',
      flexDirection: "row",
      flexWrap: "wrap",
      marginBottom:10
    },
    textInput: {
      width: 200,
    },
    SubmitButton: {
      marginTop:50,
      width: 200,
      height: 45,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(221, 97, 97)',
      
    },
    SubmitButtonTitle: {
      fontSize: 18,
      color: 'white'
    },
    GobackButton: {
      marginTop:25,
      width: 200,
      height: 45,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#7fffd4',
      
    },
    GobackButtonTitle: {
      fontSize: 18,
      color: 'rgb(221, 97, 97)'
    },
    
    icon: {
        paddingTop:7,
        paddingBottom:5,
        paddingRight:8,
    }
});
