import React, { useState } from "react";
import { StyleSheet, Switch, Text, Image, TouchableOpacity, ScrollView, View, Dimensions } from "react-native";
// import { SelectMultipleGroupButton } from "react-native-selectmultiple-button";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import theme from './../../helper/colorThemes.js';

import Music from './../InterestPages/Music.js'
import Modeling from './../InterestPages/Modeling.js'
import VideoGames from './../InterestPages/VideoGames.js'
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const SCREEN_WIDTH = Dimensions.get("window").width;
const Tab = createMaterialTopTabNavigator();

const myColor= (route) => {
  switch (route.name) {
    case 'Music':
      return "green";
    default:
      break;
  }
}

function TopBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Music} />
      <Tab.Screen name="Settings" component={Modeling} />
    </Tab.Navigator>
  );
};

export default function InterestScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, backgroundColor: theme.black, flexDirection: "row"}}>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, flex: 1, flexDirection: "row"}}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={{ paddingTop: 50, flex: 2, justifyContent: 'center', alignItems: 'center', flexDirection: "column"}}>
          <Text style={[styles.text, {}]}>Interests</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, flex: 1, flexDirection: "row"}}>
          <Image
            source={require('../../assets/french.png')}
            style={{ width: 40, height: 40 }}
          />
        </View>
      </View>

      <Tab.Navigator
        initialRouteName={'Music'}
        screenOptions={({route}) => ({
          tabBarActiveTintColor: theme.grey,
          tabBarInactiveTintColor: theme.black,
          tabBarStyle: {
            backgroundColor: theme.darkBlue,
            marginTop: 0,
            margin: 10,
            borderRadius: 20
          }
        })} style={{ flex: 7, backgroundColor: theme.black}}>
        <Tab.Screen name="Music" component={Music} />
        <Tab.Screen name="Modeling" component={Modeling} />
        <Tab.Screen name="Video Games" component={VideoGames} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: theme.grey,
    fontSize: 20,
    textAlign: 'center',
  }
});
