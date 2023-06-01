import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screen/Home';
import Settings from '../screen/Settings';
import Details from '../screen/Details';

const homeName='Home';
const detailsName='Details';
const settingsName='Settings';

const Tab = createBottomTabNavigator();

const BottomTab=()=>{
    return(
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName={homeName} 
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) =>{
                        let iconName;
                        let rn = route.name;
                        if (rn===homeName){
                            iconName=focused ? 'home' : 'home-outline';
                        } else if (rn===detailsName){
                            iconName=focused ? 'list' : 'list-outline';
                        } else if(rn===settingsName){
                            iconName=focused ? 'settings' : 'settings-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'grey',
                labelStyle: {paddingBottom: 10, fontSize: 10},
                style: {padding: 10, height: 70}
            }}>
            <Tab.Screen name={homeName} component={Home}/>
            <Tab.Screen name={detailsName} component={Details}/>
            <Tab.Screen name={settingsName} component={Settings}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default BottomTab;