import React from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity, } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'

import Svg, { Circle, Rect } from 'react-native-svg'

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      

      <Svg height="100%" width="100%" style={{position:'absolute', opacity:0.5}}>
      <Circle cx="400" cy="50" r="200" fill="#bb99ff" />
      </Svg>  
      <Svg height="100%" width="100%" style={{position:'absolute', opacity:0.5}}>
      <Circle cx="00" cy="400" r="150" fill="#bb99ff" />
      </Svg> 
      <Svg height="100%" width="100%" style={{position:'absolute', opacity:0.5}}>
      <Circle cx="400" cy="700" r="250" fill="#bb99ff" />
      </Svg>  


      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15, paddingTop:50}}>
          <Avatar.Image 
            source={require('../../assets/user.png')}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>The Anh</Title>
            <Caption style={styles.caption}>@the_anh1004</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Ionicons name="map-outline" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>TpHcm, VietNam</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="call-outline" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>+91-900000009</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="mail-outline" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>The_Anh1004@gmail.com</Text>
        </View>
      </View>
      <View style={styles.viewButton}>
      <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('EditProfileScreen')}>
            <Text style={styles.ButtonTitle}>Edit Profile</Text>
      </TouchableOpacity>
      </View>
      

      
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Ionicons name="heart-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Ionicons name="wallet-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Ionicons name="share-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Ionicons name="help-circle-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Ionicons name="settings-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  down: {
    flex: 8,
    flexDirection: 'column',
  },

  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 25,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  viewButton: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 10,
  },
  Button: {
    marginTop: 5,
    width: 350,
    height: 35,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7fffd4',
  },
  ButtonTitle: {
    fontSize: 18,
    color: "#777777",
  },
});