import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { margin, padding } from "./StyleProps";

const AllStyles = StyleSheet.create({
  FlexRow: {
    display: "flex",
    flexDirection: "row",
  },
  FlexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  Drawer: {
    backgroundColor: "#121212",
    width: "100%",
    ...padding(50, 20, 20, 20),
  },
  DrawerItem: {
    ...margin(10, 0),
    ...padding(10, 15),
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
  },
  DrawerItemActive: {
    backgroundColor: Colors.GraySecondary,
  },
  DrawerLabel: {
    color: Colors.WhitePrimary,
    fontFamily: "NotoSansRegular",
    fontSize: 16,
  },
  DrawerIcon: {
    height: 21,
    width: 21,
    resizeMode: "contain",
    marginRight: 20,
  },
  SidebarRow: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  SidebarRowLeft: {
    alignItems: "flex-start",
  },
  SidebarRowImage: {
    height: 60,
    width: 60,
    borderRadius: 100,
    marginBottom: 10,
  },
  WhiteText: {
    color: Colors.White,
  },
  DefaultContainer: {
    ...padding(10, 20, 0, 20),
    backgroundColor: Colors.White,
    height: "100%",
  },
  ActionButtonDefault: {
    width: 45,
    height: 45,
    backgroundColor: Colors.GrayPrimary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  ActionButtonDefaultImage: {
    width: 23,
    height: 23,
  },
  MenuRow: {
    ...padding(10, 20),
    borderWidth: 0,
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: Colors.White,
    justifyContent: "space-between",
    alignItems: "center",
    width: Dimensions.get("screen").width,
  },
  BottomJumbo: {
    backgroundColor: Colors.BlackPrimary,
    height: 200,
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "100%",
  },
});

export { AllStyles };
