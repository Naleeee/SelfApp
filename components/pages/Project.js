import React, { useState } from "react";
import { StyleSheet, ImageBackground, Switch, Text, Image, TouchableOpacity, View } from "react-native";
import { useLanguage } from './../../provider/LanguageProvider';

import theme from './../../helper/colorThemes.js';

export default function ProjectScreen() {

  const { language, ChangeLanguage } = useLanguage();

  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, backgroundColor: theme.white, flexDirection: "row"}}>
        <View style={{ paddingTop: 50, flex: 2, justifyContent: 'center', alignItems: 'center', flexDirection: "column"}}>
          <Text style={[styles.text, {}]}>{ language.projects }</Text>
        </View>
      </View>

      {/* Main Page*/}
      <View style={{ flex: 7, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.white, flexDirection: "row"}}>
        <View style={[styles.column, { flex: 1, flexDirection: "column"}]}>
          <TouchableOpacity
            style={styles.backImg}>
            <ImageBackground source={require('../../assets/Projects/Bomberman.png')} resizeMode="contain" style={styles.btnImg}>
            </ImageBackground>
            <Text style={styles.textImg}>{ language.bomberman }</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.backImg}>
            <ImageBackground source={require('../../assets/Projects/Arcade.png')} resizeMode="contain" style={styles.btnImg}>
            </ImageBackground>
            <Text style={styles.textImg}>{ language.arcade }</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.backImg}>
            <ImageBackground source={require('../../assets/Projects/Defender.png')} resizeMode="contain" style={styles.btnImg}>
            </ImageBackground>
            <Text style={styles.textImg}>{ language.defender }</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.column, { flex: 1, flexDirection: "column"}]}>
          <TouchableOpacity
            style={styles.backImg}>
            <ImageBackground source={require('../../assets/Projects/Plazza.png')} resizeMode="contain" style={styles.btnImg}>
            </ImageBackground>
            <Text style={styles.textImg}>{ language.plazza }</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.backImg}>
            <ImageBackground source={require('../../assets/Projects/RPG.png')} resizeMode="contain" style={styles.btnImg}>
            </ImageBackground>
            <Text style={styles.textImg}>{ language.rpg }</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  },
  column: {
    margin: 10,
  },
  backImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  btnImg: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    opacity: 0.5,
    backgroundColor: theme.white,
    elevation: 5,
  },
  textImg: {
    color: theme.shark,
    fontSize: 20,
    textAlign: 'center',
  }
});
