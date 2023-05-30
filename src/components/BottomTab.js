import React from 'react';
import {Platform, Text, View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/Home";

const Tab = createBottomTabNavigator();
const BottomTab = ()=>{
    return (
        <Tab.Navigator tabBarOptions={{
            showLabel: false,
            style: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#ffffff',
                borderRadius: 15,
                height: 90,
            }
        }}
        >
            <Tab.Screen name="Home" component={HomeScreen}/>
        </Tab.Navigator>
    )
}


export default BottomTab;
    