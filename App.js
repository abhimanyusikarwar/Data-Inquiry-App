import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { RFValue } from "react-native-responsive-fontsize";
import DrawerNavigator from "./Navigation/DrawerNavigation";
import { NavigationContainer } from "@react-navigation/native";


export default function App() {
  return (
     <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

