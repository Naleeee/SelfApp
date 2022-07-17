import React, { useState } from "react";
import { StyleSheet, Text, Image, TouchableOpacity, ScrollView, View, Dimensions } from "react-native";
import { SelectMultipleGroupButton } from "react-native-selectmultiple-button";

import theme from './../../helper/colorThemes.js';

import Music from './../InterestPages/Music.js'
import Modeling from './../InterestPages/Modeling.js'
import VideoGames from './../InterestPages/VideoGames.js'

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function InterestScreen() {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 3, backgroundColor: theme.darkBlue, flexDirection: "row"}}>
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 40, flex: 1, flexDirection: "row"}}>
          <Image
            source={require('../../assets/portrait.png')}
            style={{ width: 80, height: 80 }}
          />
        </View>
        <View style={{ paddingTop: 50, flex: 2, justifyContent: 'center', alignItems: 'center', flexDirection: "column"}}>
          <Text style={[styles.text, {}]}>Nathan</Text>
          <Text style={[styles.text, {fontWeight: 'bold'}]}>LEMALE</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'flex-start', paddingTop: 60, flex: 1, flexDirection: "row"}}>
          <Image
            source={require('../../assets/french.png')}
            style={{ width: 40, height: 40 }}
          />
        </View>
      </View>

      {/* Main Page*/}
      <View style={{ flex: 7, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: theme.darkBlue}}>
        <SelectMultipleGroupButton
            multiple={false}
            group={[
              { value: "MUSIC" },
              { value: "MODELING" },
              { value: "VIDEO GAMES" },
            ]}
            defaultSelectedIndexes={[0]}
            singleTap={valueTap => {
              switch (valueTap) {
                case "MUSIC":
                  this.state.usageScrollView.scrollTo({
                    x: 0 * SCREEN_WIDTH,
                    y: 0,
                    animated: true
                  });
                  break;
                case "MODELING":
                  this.state.usageScrollView.scrollTo({
                    x: 1 * SCREEN_WIDTH,
                    y: 0,
                    animated: true
                  });
                  break;
                case "VIDEO GAMES":
                  // this.state.usageScrollView.scrollTo({
                    // x: 2 * SCREEN_WIDTH,
                    // y: 0,
                    // animated: true
                  // });
                  break;
                default:
                  break;
              }
            }}
          buttonViewStyle={{ flex: 1, marginTop: 0, margin: 10, borderRadius: 20 }}
            highLightStyle={{
              borderColor: theme.darkRed,
              textColor: theme.darkRed,
              backgroundColor: theme.lightRed,
              borderTintColor: theme.darkRed,
              textTintColor: theme.lightRed,
              backgroundTintColor: theme.darkRed
            }}
          />
        <ScrollView
          // ref={ref => (this.state.usageScrollView = ref)}
          pagingEnabled={true}
          scrollEnabled={false}
          horizontal={true}
        >
          <ScrollView
            style={styles.horizontalView}
            contentContainerStyle={styles.contentStyle}
          >
            <Music />
          </ScrollView>
          <ScrollView
            style={styles.horizontalView}
            contentContainerStyle={styles.contentStyle}
          >
            <Modeling />
          </ScrollView>
          <ScrollView style={styles.horizontalView}>
            <VideoGames/>
          </ScrollView>
        </ScrollView>
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
