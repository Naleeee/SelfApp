import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import { useLanguage } from './../../provider/LanguageProvider';

import theme from './../../helper/colorThemes.js';

export default function HomeScreen() {

  const { language, ChangeLanguage } = useLanguage();

  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 3, backgroundColor: theme.white, flexDirection: "row"}}>
        <View style={{ paddingTop: 50, flex: 2, justifyContent: 'center', alignItems: 'center', flexDirection: "column"}}>
          <Image
            source={require('../../assets/portrait.png')}
            style={{ width: 200, height: 200, borderRadius: 40, marginBottom: 10 }}
          />
        </View>
      </View>
      <View style={{ flex: 7, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.white}}>
        <Text style={[styles.text, {}]}>{ language.intro }</Text>
        <Text style={[styles.text, {}]}></Text>
        <Text style={[styles.text, {}]}>{ language.me}</Text>
        <Text style={[styles.text, {}]}></Text>
        <Text style={[styles.text, {}]}>{ language.epitech }</Text>
        <Text style={[styles.text, {}]}></Text>
        <Text style={[styles.text, {}]}>{ language.myProjects }</Text>
        <Text style={[styles.text, {}]}></Text>
        <Text style={[styles.text, {}]}>{ language.myInterests}</Text>
        <Text style={[styles.text, {}]}></Text>
        <Text style={[styles.text, {}]}>{ language.myContacts}</Text>
      </View>
    </View>

  );
}

// const Blink = (props) => {
  // const [isShowingText, setIsShowingText] = useState(true);

   // useEffect(() => {
     // const toggle = setInterval(() => {
       // setIsShowingText(!isShowingText);
     // }, 1000);

     // return () => clearInterval(toggle);
  // })

  // if (!isShowingText) {
    // return null;
  // }

  // return <Text>{props.text}</Text>;
// }


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

