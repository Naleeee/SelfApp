import React, { useState } from "react";
import { Switch, StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";

import theme from './../../helper/colorThemes.js';

export default function ContactScreen() {
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
          <Text style={[styles.text, {}]}>Profile</Text>
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
        <View style={[styles.section, { flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
          <Text style={[styles.textSection, {}]}>French student at Epitech Bordeaux, skillfull, social and hardworker</Text>
        </View>
        <View style={[styles.section, { flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
          <Text style={[styles.textSection, {}]}>Baccalaureate Scientific
          First Cambridge of English (FCE)</Text>
        </View>
        <View style={[styles.section, { flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
          <Text style={[styles.textSection, {}]}>Third Year Student at Epitech
            GPA: 3.26/4
          </Text>
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
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  section: {
    backgroundColor: theme.lightBlue,
    margin: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderRadius: 15, 
  },
  textSection: {
    color: theme.black,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 20,
    textAlign: 'center',
  }
});

