import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ContactScreen from '../screens/Contact/ContactScreen';
import { HeaderContact } from '../shared/header';
import HistoryScreen from '../screens/Contact/HistoryScreen';
import DetailScreen from '../screens/Contact/DetailScreen';

const Stack = createStackNavigator();

export default function ContactStack({ navigation, token, countUnread, listFeedback, onLoadFeedback }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ContactScreen"
                children={(props) => <ContactScreen token={token} countUnread={countUnread} onLoadFeedback={onLoadFeedback} {...props}></ContactScreen>}
                options={{
                    title: '',
                    headerTitle: () => <HeaderContact drawerNavigation={navigation}></HeaderContact>
                }} />
            <Stack.Screen
                name="HistoryScreen"
                children={(props) => <HistoryScreen listFeedback={listFeedback} {...props}></HistoryScreen>}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen
                name="DetailScreen"
                children={(props) => <DetailScreen listFeedback={listFeedback} onLoadFeedback={onLoadFeedback} {...props}></DetailScreen>}
                options={{
                    headerShown: false
                }} />
        </Stack.Navigator>
    );
}
