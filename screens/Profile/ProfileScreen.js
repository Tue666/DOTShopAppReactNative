import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert, } from 'react-native';
import { Avatar, Caption, Text, TouchableRipple } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Svg, { Circle } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

export default function ProfileScreen({ token, user, navigation, drawerNavigation, onClickRouteLogin }) {
  const onClickNavigateHandler = (navigateName) => {
    if (token) {
      switch (navigateName) {
        case 'favorites':
          Alert.alert('📣', 'Maintenance, come back later 💩', [{ text: 'OK' }]);
          break;
        case 'history':
          navigation.navigate('HistoryScreen');
          break;
        case 'support':
          Alert.alert('📣', 'Maintenance, come back later 💩', [{ text: 'OK' }]);
          break;
        case 'settings':
          Alert.alert('📣', 'Maintenance, come back later 💩', [{ text: 'OK' }]);
          break;
      }
    }
    else {
      Alert.alert('📣', 'You are not logged in, do it and try again!. 💩', [{ text: 'OK' }]);
    }
  }
  let wrapperAccount = (
    <View style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}>
      <Caption>You are not logged in</Caption>
      <Caption>Click below to login</Caption>
      <LinearGradient
        start={[0, 0]}
        end={[1, 1]}
        colors={['orange', '#F25C3C']}
        style={{ borderRadius: 20 }}
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
              size={90}
            />
            <View style={{ marginLeft: 20 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 5 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{user.UserName}</Text>
                <Text style={{ marginLeft: 7, fontStyle: 'italic' }}>({user.Name ? user.Name : 'Shop Customer'})</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <LinearGradient
                  start={[0, 0]}
                  end={[1, 1]}
                  colors={['red', 'orange']}
                  style={{ borderRadius: 30, marginHorizontal: 2 }}
                >
                  <Text style={{ paddingHorizontal: 10, fontSize: 12, color: '#fff', fontStyle: 'italic' }}>VIP</Text>
                </LinearGradient>
                <LinearGradient
                  start={[0, 0]}
                  end={[1, 1]}
                  colors={['red', 'orange']}
                  style={{ borderRadius: 30, marginHorizontal: 2 }}
                >
                  <Text style={{ paddingHorizontal: 10, fontSize: 12, color: '#fff', fontStyle: 'italic' }}>{user.Type === '1' ? 'ADMIN' : 'USER'}</Text>
                </LinearGradient>
                <LinearGradient
                  start={[0, 0]}
                  end={[1, 1]}
                  colors={['red', 'orange']}
                  style={{ borderRadius: 30, marginHorizontal: 2 }}
                >
                  <Text style={{ paddingHorizontal: 10, fontSize: 12, color: '#fff', fontStyle: 'italic' }}>New Customer</Text>
                </LinearGradient>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Ionicons name="map-outline" color="#777777" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>{user.Address ? user.Address : 'No information'}</Text>
          </View>
          <View style={styles.row}>
            <Ionicons name="call-outline" color="#777777" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>{user.Phone ? user.Phone : 'No information'}</Text>
          </View>
          <View style={styles.row}>
            <Ionicons name="mail-outline" color="#777777" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>{user.Email ? user.Email : 'No information'}</Text>
          </View>
        </View>
        <LinearGradient
          start={[0, 0]}
          end={[1, 1]}
          colors={['red', 'orange']}
          style={{ width: '30%', alignSelf: 'center', borderRadius: 20, position: 'absolute', bottom: -20, elevation: 6 }}
        >
          <TouchableOpacity onPress={() => navigation.navigate('EditProfileScreen', { token: token, user: user })}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <AntDesign name="edit" size={25} color="white" />
              <Text style={{ color: '#fff', fontSize: 15, fontStyle: 'italic', marginLeft: 10, paddingVertical: 8 }}>Edit</Text>
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
      colors={['#fff', '#fff']}
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
        style={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
      >
        <View style={{ marginTop: 35, marginLeft: 20 }}>
          <Entypo name="menu" size={27} color="black" onPress={() => drawerNavigation.openDrawer()} />
        </View>
        {wrapperAccount}
      </LinearGradient>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => onClickNavigateHandler('favorites')}>
          <View style={styles.menuItem}>
            <Ionicons name="heart-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => onClickNavigateHandler('history')}>
          <View style={styles.menuItem}>
            <Ionicons name="wallet-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Transaction History</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => onClickNavigateHandler('support')}>
          <View style={styles.menuItem}>
            <Ionicons name="help-circle-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => onClickNavigateHandler('settings')}>
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
    marginVertical: 5
  },
  menuItemText: {
    color: 'black',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  }
});