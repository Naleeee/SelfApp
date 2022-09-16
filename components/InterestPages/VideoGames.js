import { Text, Image, View, Dimensions } from "react-native";

import theme from './../../helper/colorThemes.js';

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default function Music() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.white, alignItems: 'center', justifyContent: 'center'}}>
         <Image
            source={require('../../assets/Logo/OverwatchBlack.png')}
            style={{ flex: 1, width: SCREEN_WIDTH / 20 * 18, resizeMode: 'contain' }}
          />
         <Image
            source={require('../../assets/Logo/DeadByDaylightBlack.png')}
            style={{ flex: 1, width: SCREEN_WIDTH / 20 * 18, resizeMode: 'contain' }}
          />
         <Image
            source={require('../../assets/Logo/SeaOfThieves.png')}
            style={{ flex: 1, width: SCREEN_WIDTH / 20 * 18, resizeMode: 'contain' }}
          />
    </View>
  );
}
