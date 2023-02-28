import { StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { padding } from "./StyleProps";

const BottomBlackJumboStyles = StyleSheet.create({
  Container: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: Colors.BlackSecondary,
    justifyContent: "space-between",
    alignItems: "flex-end",
    ...padding(20, 40),
  },
  ContainerLeft: {
    justifyContent: "space-between",
  },
  ContainerTitle: {
    color: Colors.YellowSecondary,
    fontSize: 18,
  },
  JumboButton: {
    backgroundColor: Colors.YellowSecondary,
    width: 200,
    height: 40,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  JumboButtonImage: {
    marginRight: 6,
    height: 22,
    width: 22,
    resizeMode: "contain",
  },
  JumboButtonText: {
    color: Colors.BlackSecondary,
    fontSize: 19,
  },
});

export { BottomBlackJumboStyles };
