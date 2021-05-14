import { Alert } from 'react-native';

export const onClickSuccessHandler = () => {
    Alert.alert('Notice', "Successfully", [
        { text: 'OK' }
    ])
}
export const onClickFailHandler = () => {
    Alert.alert('Oops!', "Failed", [
        { text: 'OK' }
    ])
}