import React from 'react';
import { View, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';

export default function CustomTab({ state, descriptors, navigation, position }) {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;
                    const isFocused = state.index === index;
                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };
                    return (
                        <TouchableWithoutFeedback
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                        >
                            <View style={styles.item}>
                                <Animated.Text style={[opacity, isFocused ? { color: 'green' } : { color: 'black' }]}>{label}</Animated.Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginBottom: 10,
        paddingHorizontal: 20
    },
    item: {
        paddingVertical: 15,
        paddingHorizontal: 35
    }
});