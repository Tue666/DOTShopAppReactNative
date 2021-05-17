import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert, RefreshControl } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { sendFeedback } from '../../model/fetchData';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function DetailScreen({ isDarkTheme, navigation, route, listFeedback, onLoadFeedback }) {
  const [refreshing, setRefreshing] = useState(false);
  const [feedback, setFeedback] = useState((listFeedback.filter(item => item.ID === route.params.feedbackID))[0]);
  const [content, setContent] = useState('');
  const [contentArray, setContentArray] = useState((listFeedback.filter(item => item.ID === route.params.feedbackID))[0]['Content'].toString().split('^'));
  const onRefresh = useCallback(() => {
    onLoadFeedback();
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const onClickSubmitFeedback = () => {
    sendFeedback(route.params.feedbackID, content)
      .then(response => response.json())
      .then(json => {
        if (json) {
          Alert.alert('📣', 'Send successfully ✅.', [{ text: 'OK' }]);
          onLoadFeedback();
          setContent('');
          navigation.pop();
        }
        else {
          Alert.alert('📣', 'Send failed ❌. Maybe something going wrong 😥. \nCONTACT us for more information and resolve 📞', [{ text: 'OK' }])
        }
      })
  }
  return (
    <LinearGradient
      start={[0, 0]}
      end={[1, 1]}
      colors={isDarkTheme ? ['black', '#5E5D5C'] : ['#eee', '#fff']}
      style={styles.container}
    >
      <Svg height="1000" width="1000" style={{ position: 'absolute' }}>
        <Circle cx="350" cy="200" r="400" fill={isDarkTheme ? 'rgba(248, 167, 91,0.6)' : "rgba(41, 127, 239, 0.6)"} />
      </Svg>
      <Svg height="1000" width="1000" style={{ position: 'absolute' }}>
        <Circle cx="850" cy="300" r="400" fill={isDarkTheme ? 'rgba(248, 167, 91,0.4)' : "rgba(41, 127, 239, 0.4)"} />
      </Svg>
      <Svg height="1000" width="1000" style={{ position: 'absolute' }}>
        <Circle cx="300" cy="800" r="400" fill={isDarkTheme ? 'rgba(248, 167, 91,0.2)' : "rgba(41, 127, 239, 0.2)"} />
      </Svg>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.pop()}>
        <Ionicons name="arrow-back-sharp" size={28} color="white" />
      </TouchableOpacity>
      <View style={styles.wrapper}>
        <View style={styles.message}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              >
              </RefreshControl>
            }
          >
            {contentArray.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <View key={index} style={[styles.MSG, { alignSelf: 'flex-start', backgroundColor: '#fff' }]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Text style={[styles.name, { color: '#aaa' }]}>-- Barron Allen --</Text>
                      <Text style={[styles.name, { color: '#aaa' }]}>2021-16-5</Text>
                    </View>
                    <Text style={styles.text}>{item}</Text>
                  </View>
                )
              }
              return (
                <View key={index} style={[styles.MSG, { alignSelf: 'flex-end', backgroundColor: '#FB7373' }]}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={[styles.name, { color: '#fff' }]}>2021-16-5</Text>
                    <Text style={[styles.name, { color: '#fff', alignSelf: 'flex-end', fontWeight: 'bold' }]}>-- ADMIN --</Text>
                  </View>
                  <Text style={styles.text}>{item}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
        {
          feedback['Status'] === '1' ?
            <View style={styles.comment}>
              <Text style={{ color: 'red', fontStyle: 'italic', fontWeight: 'bold' }}>The ADMIN has turned off this conversation. </Text>
            </View>
            :
            feedback['Response'] === '1' ?
              <View></View>
              :
              <View style={styles.comment}>
                <View style={{ width: '75%', height: '100%' }}>
                  <TextInput
                    style={{ width: '100%', height: '100%', backgroundColor: '#fff', borderRadius: 10, padding: 10, }}
                    placeholder={'...'}
                    multiline
                    scrollEnabled
                    onChangeText={value => setContent(value)}
                    maxLength={200}
                  >
                  </TextInput>
                </View>
                <View style={{ width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                  <TouchableOpacity disabled={content === '' ? true : false} onPress={onClickSubmitFeedback}>
                    <LinearGradient
                      start={[0, 0]}
                      end={[1, 1]}
                      colors={['red', 'orange']}
                      style={{ borderRadius: 20 }}
                    >
                      <Text style={{ color: '#fff', paddingVertical: 10, paddingHorizontal: 20 }}>SEND</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  <Text>({content.length}/200)</Text>
                </View>
              </View>
        }
      </View>

    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  wrapper: {
    width: '100%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  message: {
    width: '100%',
    height: '79%',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  MSG: {
    width: '90%',
    borderRadius: 10,
    paddingHorizontal: 20,
    elevation: 7,
    marginLeft: 5,
    marginVertical: 8
  },
  name: {
    fontSize: 12
  },
  text: {
    fontSize: 16,
    paddingVertical: 8
  },
  comment: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});