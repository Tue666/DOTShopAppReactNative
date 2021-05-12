import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, } from 'react-native';
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Svg, { Circle } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { getStorage } from '../../model/asyncStorage';
import { TOKEN } from '../../constant';

export default function ProfileScreen({ navigation, drawerNavigation, onClickRouteLogin }) {
  const [token, setToken] = useState('');
  useEffect(() => {
    getStorage(TOKEN).then(response => setToken(response));
  }, []);
  let wrapperAccount = (
    <View style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}>
      <Caption>You are not logged in</Caption>
      <Caption>Click below to login</Caption>
      <LinearGradient
        start={[0, 0]}
        end={[1, 1]}
        colors={['orange', '#F25C3C']}
        style={{borderRadius:20}}
      >
        <TouchableOpacity onPress={onClickRouteLogin}>
          <Text style={{ paddingHorizontal: 20, paddingVertical: 10, color: '#fff' }}>LOGIN</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
  if (token) {
    wrapperAccount = (
      <>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: 'row', marginTop: 25 }}>
            <Avatar.Image
              source={require('../../assets/user.png')}
              size={80}
            />
            <View style={{ marginLeft: 20 }}>
              <Title style={[styles.title, { marginTop: 15, marginBottom: 5, }]}>The Anh</Title>
              <Caption style={styles.caption}>@the_anh1004</Caption>
            </View>
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Ionicons name="map-outline" color="#777777" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>TP.HCM VIET NAM</Text>
          </View>
          <View style={styles.row}>
            <Ionicons name="call-outline" color="#777777" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>+91-900000009</Text>
          </View>
          <View style={styles.row}>
            <Ionicons name="mail-outline" color="#777777" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>The_Anh1004@gmail.com</Text>
          </View>
        </View>
        <LinearGradient
          start={[0, 0]}
          end={[1, 1]}
          colors={['red', 'orange']}
          style={{ width: '30%', alignSelf: 'center', borderRadius: 20, position: 'absolute', bottom: -20, elevation: 6 }}
        >
          <TouchableOpacity onPress={() => navigation.navigate('EditProfileScreen')}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 8 }}>
              <AntDesign name="edit" size={25} color="white" />
              <Text style={{ color: '#fff', fontSize: 15, fontStyle: 'italic', marginLeft: 10 }}>Edit</Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </>
    );
  }
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
      <LinearGradient
        start={[0.5, 1]}
        end={[0.5, 0]}
        colors={['rgba(251, 210, 156, 0.8)', 'rgba(251, 210, 156, 0.6)']}
      >
        <View style={{ marginTop: 35, marginLeft: 20 }}>
          <Entypo name="menu" size={27} color="black" onPress={() => drawerNavigation.openDrawer()} />
        </View>
        {wrapperAccount}
      </LinearGradient>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => { }}>
          <View style={styles.menuItem}>
            <Ionicons name="heart-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => { }}>
          <View style={styles.menuItem}>
            <Ionicons name="wallet-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => { }}>
          <View style={styles.menuItem}>
            <Ionicons name="share-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => { }}>
          <View style={styles.menuItem}>
            <Ionicons name="help-circle-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => { }}>
          <View style={styles.menuItem}>
            <Ionicons name="settings-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25
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
    marginBottom: 10
  },
  menuWrapper: {
    marginTop: 50,
    paddingHorizontal: 30
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginVertical: 5
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  }
});