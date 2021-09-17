import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FetchListCate } from '../../model/fetchData';

export default function CategoriesScreen({ navigation, isDarkTheme }) {
  const [listCate, setListCate] = useState([]);
  const onClickRouteHandler = (cateID) => {
    navigation.push('ListCategories', { cateID: cateID });
  }
  useEffect(() => {
    FetchListCate().then(response => response.json()).then(json => setListCate(json));
  }, []);
  return (
    <LinearGradient
      start={[0, 0]}
      end={[1, 1]}
      colors={isDarkTheme ? ['black', '#5C5B5A'] : ['#fff', '#fff']}
      style={styles.container}
    >
      <ScrollView style={styles.content}>
        <View style={styles.wrapper}>
          {listCate.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={[styles.item, { backgroundColor: isDarkTheme ? '#eee' : '#fff' }]} onPress={() => { onClickRouteHandler(item.ID) }}>
                <LinearGradient
                  start={[0, 0]}
                  end={[1, 1]}
                  colors={['rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')', 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')']}
                  style={styles.image}>
                  {item.ID == 1 ?
                    <AntDesign name="mobile1" size={30} color="white" />
                    : item.ID == 2 ?
                      <FontAwesome5 name="tablet-alt" size={30} color="white" />
                      : item.ID == 3 ?
                        <FontAwesome name="camera" size={30} color="white" />
                        :
                        <FontAwesome5 name="laptop" size={30} color="white" />
                  }
                </LinearGradient>
                <View>
                  <Text style={styles.text}>{item.CateName}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 30,
    width: '100%'
  },
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    width: '38%',
    height: 200,
    backgroundColor: '#fff',
    margin: 10,
    elevation: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    marginBottom: 10,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 7
  },
  text: {
    color: 'gray'
  }
});