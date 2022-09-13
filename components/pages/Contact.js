import React, { useState } from "react";
import { StyleSheet, Switch, Text, Image, TouchableOpacity, View } from "react-native";

import theme from './../../helper/colorThemes.js';

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
          <Text style={[styles.text, {}]}>Contact</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, flex: 1, flexDirection: "row"}}>
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
