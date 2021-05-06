import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TopCharts() {
    return (
        <View style={styles.container}>
            <Text>Top Charts</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    }
});