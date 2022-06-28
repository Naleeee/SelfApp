import React, { useState } from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";

export default function ContactScreen() {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', backgroundColor: "yellow", flexDirection: "row"}}>
        <Image
          source={require('../../assets/portrait.png')}
          style={{ flex: 3, justifyContent: 'center', alignItems: 'center', width: 200, height: 200 }}
        />
        <Image
          source={require('../../assets/french.png')}
          style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-end', width: 40, height: 40 }}
        />
      </View>
    <View style={{ flex: 7, backgroundColor: "green" }}>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

