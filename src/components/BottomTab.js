import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screen/Home';
import Cargar from '../screen/Cargar';
import Details from '../screen/Details';
import Notificaciones from '../screen/Notificaciones';
import Perfil from '../screen/Perfil';

const homeName='Home';
const detailsName='Details';
const cargarName='Cargar';
const notificacionesName='Notificaciones';
const perfilName='Perfil';

const Tab = createBottomTabNavigator();

const BottomTab = ({ route }) => {
    const { nickname, mail } = route.params ?? {};

    return(
        <Tab.Navigator 
            initialRouteName={homeName} 
            screenOptions={({route}) => ({
                tabBarStyle: { backgroundColor: '#fff0b7', paddingTop: 10 },
                tabBarIcon: ({focused, color, size}) =>{
                    let iconName;
                    let rn = route.name;
                    if (rn===homeName){
                        iconName=focused ? 'home-sharp' : 'home-outline';
                    } else if (rn===detailsName){
                        iconName=focused ? 'bookmark' : 'bookmark-outline';
                    } else if(rn===cargarName){
                        iconName=focused ? 'add-circle' : 'add-circle-outline';
                    }else if(rn===notificacionesName){
                        iconName=focused ? 'notifications' : 'notifications-outline';
                    }else if(rn===perfilName){
                        iconName=focused ? 'person-circle' : 'person-circle-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#703701',
                inactiveTintColor: '#bd732d',
                labelStyle: {paddingBottom: 5, fontSize: 10},
                style: {padding: 10, height: 70}
            }}>
            <Tab.Screen name={homeName} component={Home} initialParams={{ nickname, mail }} />
            <Tab.Screen name={detailsName} component={Details}/>
            <Tab.Screen name={cargarName} component={Cargar} />
            <Tab.Screen name={notificacionesName} component={Notificaciones}/>
            <Tab.Screen name={perfilName} component={Perfil} initialParams={{ nickname, mail }} />

        </Tab.Navigator>
        
    );
};
export default BottomTab;