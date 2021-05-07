import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function CartScreen({ navigation }) {
    return (
      <View>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Text>ábckabcsjc</Text>
        </TouchableOpacity>
      </View>
    )
}
