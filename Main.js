import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  useNavigationState,
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from "@react-navigation/native";
import { Motion } from "@legendapp/motion";
import { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Images } from "./src/Assets/Assets";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./src/Components/Auth/Login";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Main() {
  const state = useNavigationState((state) => state);
  const routeName = state?.routeNames[state.index];
  console.log(routeName);
  const navigation = useNavigation();

  const Drawer = createDrawerNavigator();
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        <Drawer.Screen name="Login" component={Login} />
      </Drawer.Navigator>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
