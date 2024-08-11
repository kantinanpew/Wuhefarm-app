import React from 'react';

import {View, Text} from 'react-native';
import {Colors} from './../components/style';
const {primary,tertiary} = Colors;
import {AntDesign,Entypo,Feather} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Welcome from './../screens/welcome';
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Home from './../screens/Home';
import Profile from './../screens/Profile';
import Calendar from './../screens/Calendar';
import Weather from './../screens/Weather';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Homescreen = () =>{
    return(
        
        <Tab.Navigator initialRouteName='Home'
            tabBarOptions = {{
                showlabel: false,
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
            screenOptions={{
                headerStyle:{
                    backgroundColor: 'transparent'
                },
                hearderTintColor:tertiary,
                headerTransparent: true,
                headerTitle: '',
                hearderLeftContainerStyle:{
                    paddingleft:20 
                }
            }}
       

        >
        
           
            <Tab.Screen 
            name = "Home " 
            component = {Home}
            options={{
                tabBarIcon:({focused}) =>{
                    return(
                        <View style = {{alignItems: "center", justifyContent: "center"}}>
                            <AntDesign name = "home" size = {24}  />
                        </View>
                    )
                }
            }}
            
            />
            <Tab.Screen
             name = "Calendar " 
             component = {Calendar}
             options={{
                tabBarIcon:({focused}) =>{
                    return(
                        <View style = {{alignItems: "center", justifyContent: "center"}}>
                            <AntDesign name = "calendar" size = {24}  />
                        </View>
                    )
                }
            }}
            
            />
            <Tab.Screen 
            name = "Map"
            component = {Weather}
            options={{
                tabBarIcon:({focused}) =>{
                    return(
                        <View style = {{alignItems: "center", justifyContent: "center"}}>
                            < Feather name = "map" size = {24}  />
                        </View>
                    )
                }
            }}
            
             />
            <Tab.Screen 
            name = "Setting" 
            component = {Profile}
            options={{
                tabBarIcon:({focused}) =>{
                    return(
                        <View style = {{alignItems: "center", justifyContent: "center"}}>
                            <AntDesign name = "setting" size = {24}  />
                        </View>
                    )
                }
            }}
            />
            
        </Tab.Navigator>
    )

}

const Rootstack = () => {
  return (
    <NavigationContainer>
       
        <Stack.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor: 'transparent'
                },
                hearderTintColor:tertiary,
                headerTransparent: true,
                headerTitle: '',
                hearderLeftContainerStyle:{
                    paddingleft:20 
                }
            }}
            initialRouteName="Welcome"
        >
            <Stack.Screen name = "Welcome" component = {Welcome}/>
            <Stack.Screen name = "Login" component = {Login}/>
            <Stack.Screen name = "Signup" component = {Signup}/>
            <Stack.Screen name = "Homescreen" component = {Homescreen}/>
            
            
        </Stack.Navigator>
        
    </NavigationContainer>
    
  )
}

export default Rootstack;
