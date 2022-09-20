import React, { useState } from "react";
import { StyleSheet, Switch, Text, Image, TouchableOpacity, View } from "react-native";
import { useLanguage } from './../../provider/LanguageProvider';

import theme from './../../helper/colorThemes.js';

export default function SettingsScreen() {

  const { language, ChangeLanguage } = useLanguage();

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ flex: 1, backgroundColor: theme.white, flexDirection: "row"}}>
        <View style={{ paddingTop: 50, flex: 2, justifyContent: 'center', alignItems: 'center', flexDirection: "column"}}>
          <Text style={[styles.text, {}]}>{ language.settings }</Text>
        </View>
      </View>

      {/* Main Page*/}
      <View style={{ flex: 8, backgroundColor: theme.white}}>
        <View style={styles.container}>
          <View style={[styles.sectionText, {}]}>
            <Text style={[styles.header, {}]}>{ language.language }</Text>
          </View>
          <View style={[styles.sectionContent, {}]}>
            <TouchableOpacity style={styles.flagImageButton} onPress={() => ChangeLanguage("fr")}>
              <Image source={require('./../../assets/french.png')} style={[styles.flagImage, language.id !== "fr" ? { opacity: 1 } : {}]} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.flagImageButton} onPress={() => ChangeLanguage("en")}>
              <Image source={require('./../../assets/english.png')} style={[styles.flagImage, language.id !== "en" ? { opacity: 1 } : {}]} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <View style={[styles.sectionText, {}]}>
            <Text style={[styles.header, {}]}>{ language.theme }</Text>
          </View>
          <View style={[styles.sectionContent, {}]}>
            <TouchableOpacity style={styles.flagImageButton}>
              <Image source={require('./../../assets/light.png')} style={[styles.flagImage, {}]} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.flagImageButton}>
              <Image source={require('./../../assets/dark.png')} style={[styles.flagImage, {}]} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    elevation: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    margin: 20,
  },
  text: {
    color: theme.yale,
    fontSize: 20,
    textAlign: 'center',
  },
  sectionText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "column",
    backgroundColor: theme.uranian,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionContent: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row",
    backgroundColor: theme.white,
  },
  flagImageButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    resizeMode: 'Contain',
  },
  flagImage: {
    resizeMode: 'contain',
    flex: 0.7,
  }
});
