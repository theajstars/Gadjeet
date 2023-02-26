import { StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { margin, padding } from "./StyleProps";

const AllStyles = StyleSheet.create({
  DefaultContainer: {
    marginTop: 50,
    ...padding(30),
  },
  ActionButtonDefault: {
    width: 50,
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
