import { Text, Image, View, Dimensions } from "react-native";

import theme from './../../helper/colorThemes.js';

// var Sound = require('react-native-sound');

// Sound.setCategory('Playback');

// var chlorine = new Sound('../../sound/Chlorine.mp3', Sound.MAIN_BUNDLE, (error) => {
  // if (error) {
    // console.log('failed to load sound', error);
    // return;
  // }

  // whoosh.play((success) => {
  // });
// });

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default function Music() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.darkBlue, alignItems: 'center', justifyContent: 'center'}}>
         <Image
            source={require('../../assets/Logo/TwentyOnePilots.png')}
           style={{ flex: 1, width: SCREEN_WIDTH / 20 * 18 }}
          />
         <Image
            source={require('../../assets/Logo/DaftPunk.png')}
           style={{ flex: 1, width: SCREEN_WIDTH / 20 * 18 }}
          />
         <Image
            source={require('../../assets/Logo/PanicAtTheDisco.png')}
           style={{ flex: 1, width: SCREEN_WIDTH / 20 * 18 }}
          />
    </View>
  );
}
