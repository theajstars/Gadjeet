import { StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { FontStyles } from "./FontStyles";
import { margin, padding, ScreenHeight, ScreenWidth } from "./StyleProps";

const ConfirmationStyles = StyleSheet.create({
  Container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
  },
  ConfirmationImage: {
    height: 200,
    width: 200,
  },
});

export { ConfirmationStyles };
