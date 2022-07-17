import React, { useState } from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";

import theme from './../../helper/colorThemes.js';

export default function InterestScreen() {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 3, backgroundColor: theme.darkBlue, flexDirection: "row"}}>
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 40, flex: 1, flexDirection: "row"}}>
          <Image
            source={require('../../assets/portrait.png')}
            style={{ width: 80, height: 80 }}
          />
        </View>
        <View style={{ paddingTop: 50, flex: 2, justifyContent: 'center', alignItems: 'center', flexDirection: "column"}}>
          <Text style={[styles.text, {}]}>Nathan</Text>
          <Text style={[styles.text, {fontWeight: 'bold'}]}>LEMALE</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'flex-start', paddingTop: 60, flex: 1, flexDirection: "row"}}>
          <Image
            source={require('../../assets/french.png')}
            style={{ width: 40, height: 40 }}
          />
        </View>
      </View>

      {/* Main Page*/}
      <View style={{ flex: 7, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.darkBlue}}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  }
});
