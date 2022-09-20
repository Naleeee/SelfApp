import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

import InterestScreen from '../components/pages/Interest'
import ProjectScreen from '../components/pages/Project'
import HomeScreen from '../components/pages/Home'
import ContactScreen from '../components/pages/Contact'
import SettingsScreen from '../components/pages/Settings'

import theme from '../helper/colorThemes.js';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Interest') {
            iconName = focused ?  'ios-musical-notes' : 'ios-musical-notes-outline';
          } else if (route.name === 'Project') {
            iconName = focused ?  'ios-code-slash' : 'ios-code-outline';
          } else if (route.name === 'Home') {
            iconName = focused ?  'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Contact') {
            iconName = focused ?  'ios-call' : 'ios-call-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ?  'ios-settings' : 'ios-settings-outline';
          }
          return <Icon name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: theme.yale,
        tabBarInactiveTintColor: theme.air,
        tabBarStyle: {backgroundColor: theme.uranian},
        headerShown: false,
      })}
    >
      <Tab.Screen name="Interest" component={InterestScreen} />
      <Tab.Screen name="Project" component={ProjectScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
