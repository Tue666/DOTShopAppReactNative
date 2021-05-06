import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Main from '../../components/home/main';
import TopCharts from '../../components/home/topcharts';
import Categories from '../../routes/categoriesStack';
import AboutUs from '../../components/home/aboutus';
import Policy from '../../components/home/policy';

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen({ navigation }) {
    return (
        <Tab.Navigator
            swipeEnabled={false}
            tabBarOptions={{
                scrollEnabled: true,
                activeTintColor: 'green',
                inactiveTintColor: 'black',
                indicatorStyle: {
                    backgroundColor: 'green'
                },
                labelStyle: {
                    fontWeight: 'bold',
                    fontSize: 14,
                    textTransform: 'none'
                },
            }}
        >
            <Tab.Screen name="All" children={()=><Main navigation={navigation}></Main>} />
            <Tab.Screen name="Top Charts" children={()=><TopCharts navigation={navigation}></TopCharts>} />
            <Tab.Screen name="Categories" children={()=><Categories homeNavigation={navigation}></Categories>} />
            <Tab.Screen name="About Us" children={()=><AboutUs navigation={navigation}></AboutUs>} />
            <Tab.Screen name="Policy" children={()=><Policy navigation={navigation}></Policy>} />
        </Tab.Navigator>
    )
}