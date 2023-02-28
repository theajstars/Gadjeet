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
  useNavigation,
  DrawerActions,
} from "@react-navigation/native";
import { Motion } from "@legendapp/motion";
import { createContext, useContext, useEffect, useState } from "react";

import { Images } from "./src/Assets/Assets";
import {
  createDrawerNavigator,
  useDrawerStatus,
} from "@react-navigation/drawer";
import Login from "./src/Components/Auth/Login";
import { AllStyles } from "./src/Assets/Styles/AllStyles";
import Register from "./src/Components/Auth/Register";
import Product from "./src/Components/Product";
import Checkout from "./src/Components/Misc/Checkout";
import Home from "./src/Components/Home";
import Profile from "./src/Components/Profile";
import Cart from "./src/Components/Cart";
import SavedItems from "./src/Components/SavedItems";
import Orders from "./src/Components/Orders";
import Support from "./src/Components/Support";
import Settings from "./src/Components/Settings";
import { Colors } from "./src/Assets/Styles/Colors";
import { FontStyles } from "./src/Assets/Styles/FontStyles";

function NavigationHeader({ navigationProps }) {
  const UserItems = useContext(UserContext);
  const { Cart, SavedItems, getUserItemsUpdate } = UserItems;
  const navigation = navigationProps;
  const state = useNavigationState((state) => state);
  const routeName = state?.routeNames[state.index];
  console.log(routeName);

  const ShowGoBack = ["Product", "Cart", "Checkout", "SavedItems"];
  const ShowMenu = ["Home", "Login", "Register", "SavedItems", "Product"];
  return (
    <Motion.View initial={false} style={[AllStyles.FlexRow, AllStyles.MenuRow]}>
      {ShowMenu.includes(routeName) && (
        <TouchableOpacity
          style={AllStyles.ActionButtonDefault}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Image
            source={Images.MenuIcon}
            style={AllStyles.ActionButtonDefaultImage}
          />
        </TouchableOpacity>
      )}
      {ShowGoBack.includes(routeName) && (
        <TouchableOpacity
          style={AllStyles.ActionButtonDefault}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={Images.BackArrowIcon}
            style={AllStyles.ActionButtonDefaultImage}
          />
        </TouchableOpacity>
      )}
      {routeName === "Home" && (
        <View style={[AllStyles.FlexRow]}>
          <TouchableOpacity
            style={AllStyles.ActionButtonDefault}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          >
            <Image
              source={Images.CameraIcon}
              style={AllStyles.ActionButtonDefaultImage}
            />
          </TouchableOpacity>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <TouchableOpacity
            style={AllStyles.ActionButtonDefault}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          >
            <Image
              source={Images.BagIcon}
              style={AllStyles.ActionButtonDefaultImage}
            />
          </TouchableOpacity>
        </View>
      )}
    </Motion.View>
  );
}

const UserContext = createContext();
export default function Main() {
  const getUserItemsUpdate = (type, value) => {
    console.log(type, value);
    if (type === "cart") {
      //Update Cart
      console.log("Cart Update", value);
    } else if (type === "saved") {
      //Update Saved Items
      console.log("Saved Items Update", value);
    }
  };
  const [UserItems, SetUserItems] = useState({
    Cart: [],
    SavedItems: [],
    getUserItemsUpdate,
  });

  const navigation = useNavigation();
  const state = useNavigationState((state) => state);
  const routeName = state?.routeNames[state.index];
  console.log(routeName);
  const Drawer = createDrawerNavigator();
  const HideDrawerItem = { drawerItemStyle: { display: "none" } };
  const getDrawerIcon = (route) => {
    let DrawerImage = "";
    switch (route) {
      case "Home":
        DrawerImage = Images.HomeIcon;
        break;
      case "Profile":
        DrawerImage = Images.ProfileIcon;
        break;
      case "Cart":
        DrawerImage = Images.CartIcon;
        break;
      case "SavedItems":
        DrawerImage = Images.SavedItemsIconWhite;
        break;
      case "Orders":
        DrawerImage = Images.OrdersIcon;
        break;
      case "Support":
        DrawerImage = Images.SupportIcon;
        break;
      case "Settings":
        DrawerImage = Images.SettingsIcon;
        break;
    }
    return DrawerImage;
  };
  return (
    <>
      <UserContext.Provider value={UserItems}>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={() => ({
            headerTitle: "",
            headerShadowVisible: false,
            headerLeft: () => <NavigationHeader navigationProps={navigation} />,
            drawerStyle: AllStyles.Drawer,
            drawerItemStyle: AllStyles.DrawerItem,
            drawerLabelStyle: AllStyles.DrawerLabel,
            drawerActiveBackgroundColor: Colors.GraySecondary,
          })}
          drawerContent={() => (
            <>
              <View style={[AllStyles.FlexRow, AllStyles.SidebarRow]}>
                <View style={[AllStyles.SidebarRowLeft, AllStyles.FlexColumn]}>
                  <Image
                    source={Images.AvatarOne}
                    style={AllStyles.SidebarRowImage}
                  />
                  <Text
                    style={[
                      AllStyles.WhiteText,
                      FontStyles.NotoSansSemiBold,
                      { fontSize: 18 },
                    ]}
                  >
                    Hey,
                  </Text>
                  <Text
                    style={[
                      AllStyles.WhiteText,
                      FontStyles.NotoSansSemiBold,
                      { fontSize: 18 },
                    ]}
                  >
                    Theajstars
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={[
                  AllStyles.FlexRow,
                  AllStyles.DrawerItem,
                  routeName === "Home" ? AllStyles.DrawerItemActive : "",
                ]}
                onPress={() => navigation.navigate("Home")}
              >
                <Image
                  style={AllStyles.DrawerIcon}
                  source={getDrawerIcon("Home")}
                />
                <Text style={[AllStyles.DrawerLabel]}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  AllStyles.FlexRow,
                  AllStyles.DrawerItem,
                  routeName === "Profile" ? AllStyles.DrawerItemActive : "",
                ]}
                onPress={() => navigation.navigate("Profile")}
              >
                <Image
                  style={AllStyles.DrawerIcon}
                  source={getDrawerIcon("Profile")}
                />
                <Text style={[AllStyles.DrawerLabel]}>Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  AllStyles.FlexRow,
                  AllStyles.DrawerItem,
                  routeName === "Cart" ? AllStyles.DrawerItemActive : "",
                ]}
                onPress={() => navigation.navigate("Cart")}
              >
                <Image
                  style={AllStyles.DrawerIcon}
                  source={getDrawerIcon("Cart")}
                />
                <Text style={[AllStyles.DrawerLabel]}>My Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  AllStyles.FlexRow,
                  AllStyles.DrawerItem,
                  routeName === "SavedItems" ? AllStyles.DrawerItemActive : "",
                ]}
                onPress={() => navigation.navigate("SavedItems")}
              >
                <Image
                  style={AllStyles.DrawerIcon}
                  source={getDrawerIcon("SavedItems")}
                />
                <Text style={[AllStyles.DrawerLabel]}>Saved Items</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  AllStyles.FlexRow,
                  AllStyles.DrawerItem,
                  routeName === "Orders" ? AllStyles.DrawerItemActive : "",
                ]}
                onPress={() => navigation.navigate("Orders")}
              >
                <Image
                  style={AllStyles.DrawerIcon}
                  source={getDrawerIcon("Orders")}
                />
                <Text style={[AllStyles.DrawerLabel]}>Orders</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  AllStyles.FlexRow,
                  AllStyles.DrawerItem,
                  routeName === "Support" ? AllStyles.DrawerItemActive : "",
                ]}
                onPress={() => navigation.navigate("Support")}
              >
                <Image
                  style={AllStyles.DrawerIcon}
                  source={getDrawerIcon("Support")}
                />
                <Text style={[AllStyles.DrawerLabel]}>Support</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  AllStyles.FlexRow,
                  AllStyles.DrawerItem,
                  routeName === "Settings" ? AllStyles.DrawerItemActive : "",
                ]}
                onPress={() => navigation.navigate("Settings")}
              >
                <Image
                  style={AllStyles.DrawerIcon}
                  source={getDrawerIcon("Settings")}
                />
                <Text style={[AllStyles.DrawerLabel]}>Settings</Text>
              </TouchableOpacity>
            </>
          )}
        >
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{
              drawerIcon: getDrawerIcon("Home"),
            }}
          />
          <Drawer.Screen
            name="Login"
            component={Login}
            options={HideDrawerItem}
          />
          <Drawer.Screen
            name="Register"
            component={Register}
            options={HideDrawerItem}
          />
          <Drawer.Screen
            name="Product"
            component={Product}
            options={HideDrawerItem}
          />
          <Drawer.Screen
            name="Checkout"
            component={Checkout}
            options={HideDrawerItem}
          />
          <Drawer.Screen
            name="Profile"
            component={Profile}
            options={{
              drawerIcon: getDrawerIcon("Profile"),
            }}
          />

          <Drawer.Screen
            name="Cart"
            component={Cart}
            options={{
              drawerIcon: getDrawerIcon("Cart"),
            }}
          />
          <Drawer.Screen
            name="SavedItems"
            component={SavedItems}
            options={{
              drawerIcon: getDrawerIcon("SavedItems"),
            }}
          />
          <Drawer.Screen
            name="Orders"
            component={Orders}
            options={{
              drawerIcon: getDrawerIcon("Orders"),
            }}
          />
          <Drawer.Screen
            name="Support"
            component={Support}
            options={{
              drawerIcon: getDrawerIcon("Support"),
            }}
          />
          <Drawer.Screen
            name="Settings"
            component={Settings}
            options={{
              drawerIcon: getDrawerIcon("Settings"),
            }}
          />
        </Drawer.Navigator>
      </UserContext.Provider>
    </>
  );
}
export { UserContext };
