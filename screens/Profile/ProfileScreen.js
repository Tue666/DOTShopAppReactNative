import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert, Modal, ScrollView, TextInput } from 'react-native';
import { Avatar, Caption, Text, TouchableRipple } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Svg, { Circle } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { changePassword } from '../../model/fetchData';
import { removeStorage } from '../../model/asyncStorage';
import { TOKEN } from '../../constant';

export default function ProfileScreen({ isDarkTheme, token, user, navigation, drawerNavigation, onClickRouteLogin }) {
  const [switchModal, setSwitchModal] = useState(false);
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmNewPass, setConfirmNewPass] = useState('');
  const [isEnableOne, setIsEnableOne] = useState(true);
  const [isEnableTwo, setIsEnableTwo] = useState(true);
  const [isEnableThree, setIsEnableThree] = useState(true);
  const onClickChangePassHandler = () => {
    Alert.alert('📣', 'You HAVE TO relogin if you update password. \nPress \'OK\' to continue 😇', [
      {
        text: 'OK',
        onPress: () => {
          changePassword(token, oldPass, newPass, confirmNewPass)
            .then(response => response.json())
            .then(json => {
              if (JSON.parse(json['Type'])) {
                removeStorage(TOKEN);
                onClickRouteLogin();
              }
              else {
                Alert.alert('📣', JSON.parse(json['Message']), [{ text: 'OK' }]);
              }
            })
        }
      },
      { text: 'CANCEL' }
    ])
  }
  const onClickNavigateHandler = (navigateName) => {
    if (navigateName === 'support') {
      navigation.navigate('SupportScreen');
    }
    else {
      if (token) {
        switch (navigateName) {
          case 'favorites':
            navigation.navigate('FavoriteScreen');
            break;
          case 'history':
            navigation.navigate('HistoryScreen');
            break;
          case 'change-password':
            setSwitchModal(!switchModal);
            break;
        }
      }
      else {
        Alert.alert('📣', 'You are not logged in, do it and try again!. 💩', [{ text: 'OK' }]);
      }
    }
  }
  let wrapperAccount = (
    <View style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}>
      <Caption style={{ color: isDarkTheme ? '#fff' : 'black' }}>You are not logged in</Caption>
      <Caption style={{ color: isDarkTheme ? '#fff' : 'black' }}>Click below to login</Caption>
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
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: isDarkTheme ? '#fff' : 'black' }}>{user.Name ? user.Name : user.UserName}</Text>
                <Text style={{ marginLeft: 7, fontStyle: 'italic', color: isDarkTheme ? '#fff' : 'black' }}>({user.UserName})</Text>
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
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                <FontAwesome name="credit-card-alt" size={24} color="=rgba(96, 157, 237, 1)" />
                <Caption style={{ fontStyle: 'italic', color: isDarkTheme ? '#fff' : 'gray' }}>999,999,999,999 vnđ</Caption>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Ionicons name="map-outline" color={isDarkTheme ? '#fff' : "#777777"} size={20} />
            <Text style={{ marginLeft: 20, color: isDarkTheme ? '#fff' : 'gray' }}>{user.Address ? user.Address : 'No information'}</Text>
          </View>
          <View style={styles.row}>
            <Ionicons name="call-outline" color={isDarkTheme ? '#fff' : "#777777"} size={20} />
            <Text style={{ marginLeft: 20, color: isDarkTheme ? '#fff' : 'gray' }}>{user.Phone ? user.Phone : 'No information'}</Text>
          </View>
          <View style={styles.row}>
            <Ionicons name="mail-outline" color={isDarkTheme ? '#fff' : "#777777"} size={20} />
            <Text style={{ marginLeft: 20, color: isDarkTheme ? '#fff' : 'gray' }}>{user.Email ? user.Email : 'No information'}</Text>
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
      colors={isDarkTheme ? ['black', '#848383'] : ['#fff', '#fff']}
      style={styles.container}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={switchModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <ScrollView style={{ width: '100%' }}>
              <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', color: 'rgba(41, 127, 239, 1)', fontStyle: 'italic', fontSize: 20 }}>CHANGE YOUR PASS</Text>
                <View style={styles.inputContainer}>
                  <Caption style={styles.caption}>Old Password</Caption>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TextInput style={styles.input}
                      placeholder=" ... "
                      onChangeText={value => setOldPass(value)}
                      value={oldPass}
                      maxLength={20}
                      secureTextEntry={isEnableOne}
                    >
                    </TextInput>
                    <TouchableOpacity onPress={() => setIsEnableOne(!isEnableOne)}>
                      <Entypo name={isEnableOne ? "eye" : "eye-with-line"} size={26} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.inputContainer}>
                  <Caption style={styles.caption}>New Password</Caption>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TextInput style={styles.input}
                      placeholder=" ... "
                      onChangeText={value => setNewPass(value)}
                      value={newPass}
                      maxLength={20}
                      secureTextEntry={isEnableTwo}
                    >
                    </TextInput>
                    <TouchableOpacity onPress={() => setIsEnableTwo(!isEnableTwo)}>
                      <Entypo name={isEnableTwo ? "eye" : "eye-with-line"} size={26} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.inputContainer}>
                  <Caption style={styles.caption}>Confirm New Password</Caption>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TextInput style={styles.input}
                      placeholder=" ... "
                      onChangeText={value => setConfirmNewPass(value)}
                      value={confirmNewPass}
                      maxLength={20}
                      secureTextEntry={isEnableThree}
                    >
                    </TextInput>
                    <TouchableOpacity onPress={() => setIsEnableThree(!isEnableThree)}>
                      <Entypo name={isEnableThree ? "eye" : "eye-with-line"} size={26} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <TouchableOpacity onPress={onClickChangePassHandler} disabled={oldPass === '' || newPass === '' || confirmNewPass === '' ? true : false} style={styles.submitButton}>
                    <Text style={styles.submitText}>SAVE 🥳</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setSwitchModal(!switchModal)} style={[styles.submitButton, { backgroundColor: 'rgba(250, 76, 76, 1)', borderColor: 'rgba(250, 76, 76, 0.8)' }]}>
                    <Text style={styles.submitText}>CANCEL</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
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
        colors={isDarkTheme ? ['#848383', 'black'] : ['rgba(251, 210, 156, 0.8)', 'rgba(251, 210, 156, 0.6)']}
        style={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
      >
        <View style={{ marginTop: 35, marginLeft: 20 }}>
          <Entypo name="menu" size={27} color={isDarkTheme ? '#fff' : 'black'} onPress={() => drawerNavigation.openDrawer()} />
        </View>
        {wrapperAccount}
      </LinearGradient>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => onClickNavigateHandler('favorites')}>
          <View style={styles.menuItem}>
            <Ionicons name={isDarkTheme ? "heart" : "heart-outline"} color="#FF6347" size={25} />
            <Text style={[styles.menuItemText, { color: isDarkTheme ? '#fff' : 'black' }]}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => onClickNavigateHandler('history')}>
          <View style={styles.menuItem}>
            <Ionicons name={isDarkTheme ? "wallet" : "wallet-outline"} color="#FF6347" size={25} />
            <Text style={[styles.menuItemText, { color: isDarkTheme ? '#fff' : 'black' }]}>Transaction History</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => onClickNavigateHandler('support')}>
          <View style={styles.menuItem}>
            <Ionicons name={isDarkTheme ? "help-circle" : "help-circle-outline"} color="#FF6347" size={25} />
            <Text style={[styles.menuItemText, { color: isDarkTheme ? '#fff' : 'black' }]}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => onClickNavigateHandler('change-password')}>
          <View style={styles.menuItem}>
            <Ionicons name={isDarkTheme ? "key" : "key-outline"} color="#FF6347" size={25} />
            <Text style={[styles.menuItemText, { color: isDarkTheme ? '#fff' : 'black' }]}>Change Password</Text>
          </View>
        </TouchableRipple>
      </View>
    </LinearGradient >
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
    paddingHorizontal: 15
  },
  menuItem: {
    flexDirection: 'row',
    padding: 15,
    marginVertical: 5
  },
  menuItemText: {
    color: 'black',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.7)'
  },
  modalView: {
    width: '90%',
    height: '50%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    marginVertical: 10,
    width: '95%'
  },
  caption: {
    alignSelf: 'flex-start'
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 5,
    fontSize: 16,
    width: '85%'
  },
  submitButton: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(41, 127, 239, 0.7)',
    marginTop: 20,
    backgroundColor: 'rgba(41, 127, 239, 1)',
    elevation: 5,
    marginHorizontal: 5
  },
  submitText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: '#fff'
  }
});