import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigation from './Navigations/Navigator';
export default function App() {
  return (
    <GestureHandlerRootView>
      <Navigation/>
    </GestureHandlerRootView>
  );
};
