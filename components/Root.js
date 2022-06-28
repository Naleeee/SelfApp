import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// import { useTheme } from '../contexts/ThemeProvider';
// import { useLanguage } from '../contexts/LanguageProvider';
import RootNavigator from './RootNavigator';

export default function Root() {
  // const { theme, themeIsLoaded } = useTheme();
  const styles = StyleSheet.create({
    loadingIndicator: {
      flex: 1,
      backgroundColor: 'black',
    },
  })

  // const { languageIsLoaded } = useLanguage();

  // if (themeIsLoaded && languageIsLoaded) {
    // return (
      // <>
        // <StatusBar style={theme.colors.statusBar} />
        // <RootNavigator />
      // </>
    // );
  // } else {
    return (
      <>
        <StatusBar style="dark" />
        <ActivityIndicator size="large" style={styles.loadingIndicator} />
      </>
    )
  // }
};
