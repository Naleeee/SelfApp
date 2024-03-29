import React, { useState } from "react";
import { StyleSheet, Switch, Text, Image, TouchableOpacity, View } from "react-native";
import { useLanguage } from './../../provider/LanguageProvider';

import theme from './../../helper/colorThemes.js';

export default function ContactScreen() {

  const { language, ChangeLanguage } = useLanguage();

  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, backgroundColor: theme.white, flexDirection: "row"}}>
        <View style={{ paddingTop: 50, flex: 2, justifyContent: 'center', alignItems: 'center', flexDirection: "column"}}>
          <Text style={[styles.text, {}]}>{ language.contact }</Text>
        </View>
      </View>

      {/* Main Page*/}
      <View style={{ flex: 7, backgroundColor: theme.white}}>
        <View style={{ flex: 3, alignItems: 'center', justifyContent: 'flex-start' }}>
          <Image
            source={require('../../assets/portrait.png')}
            style={{ alignItems: 'center', width: 200, height: 200, borderRadius: 40, marginBottom: 10 }}
          />
          <Text style={[styles.text, {}]}>Nathan LEMALE</Text>
          <Text style={[styles.text, {}]}>{ language.age }</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.white, flexDirection: "row", marginTop: 10 }}>
          <View style={[styles.column, { flex: 1, flexDirection: "column", justifyContent: 'center'}]}>
            <Text style={[styles.sectionText, {}]}>Email</Text>
            <Text style={[styles.sectionText, {}]}>{ language.phone }</Text>
            <Text style={[styles.sectionText, {}]}>{ language.address}</Text>
          </View>
          <View style={[styles.column, { flex: 1, flexDirection: "column", justifyContent: 'center'}]}>
          <Text style={[styles.dataText, { marginTop: 20, marginBottom: 20 }]}>nthn.lemale@gmail.com</Text>
            <Text style={[styles.dataText, { marginBottom: 20 }]}>06 81 58 57 34</Text>
            <Text style={[styles.dataText, {}]}>12 allée des chênes</Text>
            <Text style={[styles.dataText, {}]}>Ludon Medoc</Text>
          </View>
        </View>
        <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.white, flexDirection: "row" }}>
          <View style={[styles.column, { flex: 1, flexDirection: "column", justifyContent: 'center' }]}>
            <Image
              source={require('../../assets/Logo/LinkedIn.png')}
              style={{ width: null, height: 50, resizeMode: 'contain' }}
            />
          </View>
          <View style={[styles.column, { flex: 1, flexDirection: "column", justifyContent: 'center'}]}>
            <Image
              source={require('../../assets/Logo/GitHubBlack.png')}
              style={{ width: null, height: 50, resizeMode: 'contain' }}
            />
          </View>
          <View style={[styles.column, { flex: 1, flexDirection: "column", justifyContent: 'center'}]}>
            <Image
              source={require('../../assets/Logo/GitLab.png')}
              style={{ width: null, height: 50, resizeMode: 'contain' }}
            />
          </View>
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
  sectionText: {
    color: theme.air,
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop: 20,
  },
  dataText: {
    color: theme.air,
    fontSize: 15,
    textAlign: 'right',
  },
  column: {
    margin: 10,
  }
});
