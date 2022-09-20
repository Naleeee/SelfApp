import React, { useState } from "react";
import { StyleSheet, Switch, Text, Image, TouchableOpacity, View } from "react-native";
import { useLanguage } from './../../provider/LanguageProvider';

import theme from './../../helper/colorThemes.js';

export default function SettingsScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const { language, ChangeLanguage } = useLanguage();

  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, backgroundColor: theme.white, flexDirection: "row"}}>
        <View style={{ paddingTop: 50, flex: 2, justifyContent: 'center', alignItems: 'center', flexDirection: "column"}}>
          <Text style={[styles.text, {}]}>{ language.settings }</Text>
        </View>
      </View>

      {/* Main Page*/}
      <View style={{ flex: 8, backgroundColor: theme.white}}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.flagImageButton} onPress={() => ChangeLanguage("fr")}>
            <Image source={require('./../../assets/french.png')} style={[styles.flagImage, language.id !== "fr" ? { opacity: 1 } : {}]} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.flagImageButton} onPress={() => ChangeLanguage("en")}>
            <Image source={require('./../../assets/english.png')} style={[styles.flagImage, language.id !== "en" ? { opacity: 1 } : {}]} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: "row",
  },
  text: {
    color: theme.yale,
    fontSize: 20,
    textAlign: 'center',
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
