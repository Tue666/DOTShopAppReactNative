import React from 'react';
import { View, Text } from 'react-native';

export default function HistoryScreen({ navigation, route }) {
    return (
        <View>
            <Text>{route.params.token}</Text>
        </View>
    )
}
