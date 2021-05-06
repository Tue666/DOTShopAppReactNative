import AsyncStorage from '@react-native-async-storage/async-storage';

export const setStorage = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.warn(error);
    }
}

export const getStorage = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null){
            return value;
        }
    } catch (error) {
        console.warn(error);
    }
}

export const removeStorage = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.warn(error);
    }
}
