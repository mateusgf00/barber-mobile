import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar'

import Home from '../screens/Home/Index';
import Search from '../screens/Search/Index';
import Appointments from '../screens/Appointments/Index';
import Favorites from '../screens/Favorites/Index';
import Profile from '../screens/Profile/Index';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props}/>}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Search" component={Search}/>
        <Tab.Screen name="Appointments" component={Appointments}/>
        <Tab.Screen name="Favorites" component={Favorites}/>
        <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
);