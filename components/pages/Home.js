import React, { useState } from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import theme from './../../helper/colorThemes.js';
import Colors from './../../helper/colorThemes.js';

export default function ContactScreen() {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 3, backgroundColor: theme.darkGrey, flexDirection: "row"}}>
        <View style={{ justifyContent: 'center', alignItems: 'flex-start', paddingTop: 40, flex: 1, flexDirection: "row"}}>
        </View>
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-end', flexDirection: "column"}}>
          <Image
            source={require('../../assets/portrait.png')}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'flex-start', paddingTop: 40, flex: 1, flexDirection: "row"}}>
          <Image
            source={require('../../assets/french.png')}
            style={{ width: 40, height: 40 }}
          />
        </View>
      </View>
      <View style={{ flex: 7, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.lightGrey}}>
        <Text style={{}}>Hello There!</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

