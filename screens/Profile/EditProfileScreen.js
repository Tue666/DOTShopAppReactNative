import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Circle } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

export default function EditProfile({ navigation }) {
  return (
    <LinearGradient
      start={[0, 0]}
      end={[1, 1]}
      colors={['#fff', 'rgba(251, 210, 156, 0.5)']}
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
      <TouchableOpacity style={{ position:'absolute',top:40,left:10 }}>
        <Ionicons name="chevron-back" size={30} color="black" onPress={() => navigation.pop()} style={{paddingHorizontal:10}} />
      </TouchableOpacity>
      <View>
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
            size={25}
            color="#FF6347"
          >
          </Ionicons>
          <TextInput
            style={styles.textInput}
            placeholder="No information"
          >
          </TextInput>
        </View>
        <View style={styles.textInputContainer}>
          <Ionicons
            style={styles.icon}
            name="call-outline"
            size={25}
            color="#FF6347"
          >
          </Ionicons>
          <TextInput
            style={styles.textInput}
            placeholder="No information"
          >
          </TextInput>
        </View>
        <View style={styles.textInputContainer}>
          <Ionicons
            style={styles.icon}
            name="mail-outline"
            size={25}
            color="#FF6347"
          >
          </Ionicons>
          <TextInput
            style={styles.textInput}
            textContentType='emailAddress'
            keyboardType='email-address'
            placeholder="No information"
          >
          </TextInput>
        </View>
        <View style={styles.textInputContainer}>
          <Ionicons
            style={styles.icon}
            name="location-outline"
            size={25}
            color="#FF6347"
          >
          </Ionicons>
          <TextInput
            style={styles.textInput}
            placeholder="No information"
          >
          </TextInput>
        </View>
        <LinearGradient
          start={[0, 0]}
          end={[1, 1]}
          colors={['red', 'orange']}
          style={styles.button}
        >
          <TouchableOpacity>
            <Text style={[styles.text, { elevation: 6 }]}>SAVE</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </LinearGradient>
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
    marginVertical: 10,
    paddingVertical: 5
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
