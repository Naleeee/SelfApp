import React, { useState } from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import { useLanguage } from './../../provider/LanguageProvider';

import theme from './../../helper/colorThemes.js';

export default function ContactScreen() {

  const { language, ChangeLanguage, getLanguage } = useLanguage();

  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 3, backgroundColor: theme.white, flexDirection: "row"}}>
        <View style={{ justifyContent: 'center', alignItems: 'flex-start', paddingTop: 40, flex: 1, flexDirection: "row"}}>
        </View>
        <View style={{ paddingTop: 50, flex: 2, justifyContent: 'center', alignItems: 'flex-end', flexDirection: "column"}}>
          <Image
            source={require('../../assets/portrait.png')}
            style={{ width: 200, height: 200, borderRadius: 40, marginBottom: 10 }}
          />
        </View>
        <View style={styles.switchContainer}>
          <TouchableOpacity style={styles.flagImageButton} onPress={() => ChangeLanguage("fr")}>
            <Image source={require('../../assets/french.png')} style={[styles.flagImage, language.id !== "fr" ? { opacity: 0.5 } : {}]} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.flagImageButton} onPress={() => ChangeLanguage("en")}>
            <Image source={require('../../assets/english.png')} style={[styles.flagImage, language.id !== "en" ? { opacity: 0.5 } : {}]} />
          </TouchableOpacity>
        </View>

      </View>
      <View style={{ flex: 7, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.white}}>
        <Text style={[styles.text, {}]}>{ language.intro }</Text>
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
    color: theme.shark,
    fontSize: 20,
    textAlign: 'center',
  },
  translate: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  switchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  flagImageButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  flagImage: {
    resizeMode: 'contain',
    flex: 0.7,
  }
});

