import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home.js';
import About from './screens/About.js';


const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: '#FF6247'
        },
        headerTintColor: 'white'
}

const MainStackNavigator = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
        </Stack.Navigator>
    );
}

const AboutStackNavigator = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="About" component={About}></Stack.Screen>
        </Stack.Navigator>
    )
}

export {MainStackNavigator, AboutStackNavigator};