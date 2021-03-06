import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

import InterestScreen from './components/pages/Interest'
import ProfileScreen from './components/pages/Profile'
import HomeScreen from './components/pages/Home'
import ProjectScreen from './components/pages/Project'
import ContactScreen from './components/pages/Contact'

import theme from './helper/colorThemes.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
          screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Interest') {
              iconName = focused ?  'ios-musical-notes' : 'ios-musical-notes-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ?  'ios-person' : 'ios-person-outline';
            } else if (route.name === 'Home') {
              iconName = focused ?  'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Project') {
              iconName = focused ?  'ios-code-slash' : 'ios-code-outline';
            } else if (route.name === 'Contact') {
              iconName = focused ?  'ios-call' : 'ios-call-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: theme.darkRed,
          tabBarInactiveTintColor: theme.black,
              tabBarStyle: {backgroundColor: theme.lightBlue},
          headerShown: false,
        })}
      >
        <Tab.Screen name="Interest" component={InterestScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Project" component={ProjectScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
