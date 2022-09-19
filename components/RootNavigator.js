import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigator from './TabNavigator';

export default function NavBar() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

