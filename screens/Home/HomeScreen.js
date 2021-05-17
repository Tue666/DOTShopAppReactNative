import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Main from '../../components/home/main';
import TopCharts from '../../components/home/topcharts';
import Categories from '../../routes/categoriesStack';
import AboutUs from '../../components/home/aboutus';
import Policy from '../../components/home/policy';

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen({ navigation, isDarkTheme }) {
    return (
        <Tab.Navigator
            swipeEnabled={false}
            tabBarOptions={{
                scrollEnabled: true,
                activeTintColor: isDarkTheme ? 'orange' : 'green',
                inactiveTintColor: isDarkTheme ? '#fff' : 'black',
                indicatorStyle: {
                    backgroundColor: isDarkTheme ? 'orange' : 'green'
                },
                labelStyle: {
                    fontWeight: 'bold',
                    fontSize: 14,
                    textTransform: 'none'
                },
                tabStyle: {
                    backgroundColor: isDarkTheme ? 'rgba(0,0,0,0.95)' : 'rgba(255,255,255,0.5)'
                },
            }}
        >
            <Tab.Screen name="All" children={() => <Main isDarkTheme={isDarkTheme} navigation={navigation}></Main>} />
            <Tab.Screen name="Top Charts" children={() => <TopCharts isDarkTheme={isDarkTheme} navigation={navigation}></TopCharts>} />
            <Tab.Screen name="Categories" children={() => <Categories isDarkTheme={isDarkTheme} homeNavigation={navigation}></Categories>} />
            <Tab.Screen name="About Us" children={() => <AboutUs isDarkTheme={isDarkTheme} navigation={navigation}></AboutUs>} />
            <Tab.Screen name="Policy" children={() => <Policy isDarkTheme={isDarkTheme} navigation={navigation}></Policy>} />
        </Tab.Navigator>
    )
}