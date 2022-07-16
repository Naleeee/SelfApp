import React, { useState } from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import theme from './../../helper/colorThemes.js';

export default function ContactScreen() {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 3, backgroundColor: theme.darkBlue, flexDirection: "row"}}>
        <View style={{ justifyContent: 'center', alignItems: 'flex-start', paddingTop: 40, flex: 1, flexDirection: "row"}}>
        </View>
        <View style={{ paddingTop: 50, flex: 2, justifyContent: 'center', alignItems: 'flex-end', flexDirection: "column"}}>
          <Image
            source={require('../../assets/portrait.png')}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'flex-start', paddingTop: 60, flex: 1, flexDirection: "row"}}>
          <Image
            source={require('../../assets/french.png')}
            style={{ width: 40, height: 40 }}
          />
        </View>
      </View>
      <View style={{ flex: 7, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.darkBlue}}>
        <Text style={[styles.text, {}]}>Hello There !</Text>
        <Text style={[styles.text, {}]}></Text>
        <Text style={[styles.text, {}]}>My name is <Text style={{fontWeight: 'bold'}}>Nathan</Text>, i'm a french 19yo developer !</Text>
        <Text style={[styles.text, {}]}></Text>
        <Text style={[styles.text, {}]}>On this app you will find a lot of informations about me on the <Text style={{fontWeight: 'bold'}}>profile</Text> page for exemple.</Text>
        <Text style={[styles.text, {}]}></Text>
        <Text style={[styles.text, {}]}>You can also discover some of the <Text style={{fontWeight: 'bold'}}>projects</Text> I did.</Text>
        <Text style={[styles.text, {}]}></Text>
        <Text style={[styles.text, {}]}>All my socials can be found on the <Text style={{fontWeight: 'bold'}}>contact</Text> page !</Text>
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

