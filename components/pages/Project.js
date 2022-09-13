import React, { useState } from "react";
import { StyleSheet, ImageBackground, Switch, Text, Image, TouchableOpacity, View } from "react-native";

import theme from './../../helper/colorThemes.js';
const image = { uri: "https://reactjs.org/logo-og.png" };

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
          <Text style={[styles.text, {}]}>Projetcs</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, flex: 1, flexDirection: "row"}}>
          <Image
            source={require('../../assets/french.png')}
            style={{ width: 40, height: 40 }}
          />
        </View>
      </View>

      {/* Main Page*/}
      <View style={{ flex: 7, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.black, flexDirection: "row"}}>
        <View style={[styles.column, { flex: 1, flexDirection: "column"}]}>
          <ImageBackground source={require('../../assets/Projects/Bomberman.png')} resizeMode="cover" style={styles.backImg}>
            <TouchableOpacity
              style={styles.btnImg}>
              <Text style={styles.textImg}>Bomberman</Text>
            </TouchableOpacity>
          </ImageBackground>
          <ImageBackground source={require('../../assets/Projects/Arcade.png')} resizeMode="cover" style={styles.backImg}>
            <TouchableOpacity
              style={styles.btnImg}>
              <Text style={styles.textImg}>Arcade</Text>
            </TouchableOpacity>
          </ImageBackground>
          <ImageBackground source={require('../../assets/Projects/RPG.png')} resizeMode="cover" style={styles.backImg}>
            <TouchableOpacity
              style={styles.btnImg}>
              <Text style={styles.textImg}>RPG</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={[styles.column, { flex: 1, flexDirection: "column"}]}>
          <ImageBackground source={require('../../assets/Projects/Plazza.png')} resizeMode="cover" style={styles.backImg}>
            <TouchableOpacity
              style={styles.btnImg}>
              <Text style={styles.textImg}>Plazza</Text>
            </TouchableOpacity>
          </ImageBackground>
          <ImageBackground source={require('../../assets/Projects/Defender.png')} resizeMode="cover" style={styles.backImg}>
            <TouchableOpacity
              style={styles.btnImg}>
              <Text style={styles.textImg}>Defender</Text>
            </TouchableOpacity>
          </ImageBackground>
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
    color: theme.grey,
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
    backgroundColor: 'grey',
  },
  textImg: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  }
});
