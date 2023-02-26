import "react-native-gesture-handler";
import { Button, StyleSheet, Text, View } from "react-native";
import { Motion } from "@legendapp/motion";
import { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useNavigationState,
  NavigationContainer,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Main from "./Main";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Image source={Images.MenuIcon} />
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
}
function ContactsScreen() {
  return (
    <View style={styles.container}>
      <Text>Contacts Screen</Text>
    </View>
  );
}
function DownloadsScreen() {
  return (
    <View style={styles.container}>
      <Text>Downloads Screen</Text>
    </View>
  );
}
export default function App({ navigation }) {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Downloads" component={DownloadsScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Contacts" component={ContactsScreen} />
      </Drawer.Navigator> */}
      <Main />
    </NavigationContainer>
  );
}
