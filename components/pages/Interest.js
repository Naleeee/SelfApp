import React, { useState } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useLanguage } from './../../provider/LanguageProvider';

import theme from './../../helper/colorThemes.js';

import Music from './../InterestPages/Music.js'
import Modeling from './../InterestPages/Modeling.js'
import VideoGames from './../InterestPages/VideoGames.js'

const Tab = createMaterialTopTabNavigator();

export default function InterestScreen() {

  const { language, ChangeLanguage } = useLanguage();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, backgroundColor: theme.white, flexDirection: "row"}}>
        <View style={{ paddingTop: 50, flex: 2, justifyContent: 'center', alignItems: 'center', flexDirection: "column"}}>
          <Text style={[styles.text, {}]}>{ language.interest }</Text>
        </View>
      </View>

      <Tab.Navigator
        initialRouteName={ language.music }
        screenOptions={({route}) => ({
          tabBarActiveTintColor: theme.yale,
          tabBarInactiveTintColor: theme.air,
          tabBarStyle: {
            backgroundColor: theme.uranian,
            marginTop: 0,
            margin: 10,
            borderRadius: 20
          }
        })} style={{ flex: 7, backgroundColor: theme.white}}>
        <Tab.Screen name={ language.music } component={Music} />
        <Tab.Screen name={ language.modeling } component={Modeling} />
        <Tab.Screen name={ language.games } component={VideoGames} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: theme.yale,
    fontSize: 20,
    textAlign: 'center',
  }
});
