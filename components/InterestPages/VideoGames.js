import { Text, Image, View, Dimensions } from "react-native";

import theme from './../../helper/colorThemes.js';

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default function Music() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.darkBlue, alignItems: 'center', justifyContent: 'center'}}>
         <Image
            source={require('../../assets/Logo/Overwatch.png')}
           style={{ flex: 1, width: SCREEN_WIDTH / 20 * 18 }}
          />
         <Image
            source={require('../../assets/Logo/DeadByDaylight.png')}
           style={{ flex: 1, width: SCREEN_WIDTH / 20 * 18 }}
          />
         <Image
            source={require('../../assets/Logo/SeaOfThieves.png')}
           style={{ flex: 1, width: SCREEN_WIDTH / 20 * 18 }}
          />
    </View>
  );
}
