import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Main from "./Main";

export default function App() {
  const [fontsLoaded] = useFonts({
    NotoSansBlack: require("./src/Assets/Fonts/NotoSans/NotoSans-Black.ttf"),
    NotoSansBold: require("./src/Assets/Fonts/NotoSans/NotoSans-Bold.ttf"),
    NotoSansMedium: require("./src/Assets/Fonts/NotoSans/NotoSans-Medium.ttf"),
    NotoSansRegular: require("./src/Assets/Fonts/NotoSans/NotoSans-Regular.ttf"),
    NotoSansSemiBold: require("./src/Assets/Fonts/NotoSans/NotoSans-SemiBold.ttf"),
    NotoSansLight: require("./src/Assets/Fonts/NotoSans/NotoSans-Light.ttf"),

    PoppinsBlack: require("./src/Assets/Fonts/Poppins/Poppins-Black.ttf"),
    PoppinsBold: require("./src/Assets/Fonts/Poppins/Poppins-Bold.ttf"),
    PoppinsExtraBold: require("./src/Assets/Fonts/Poppins/Poppins-ExtraBold.ttf"),
    PoppinsLight: require("./src/Assets/Fonts/Poppins/Poppins-Light.ttf"),
    PoppinsMedium: require("./src/Assets/Fonts/Poppins/Poppins-Medium.ttf"),
    PoppinsRegular: require("./src/Assets/Fonts/Poppins/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("./src/Assets/Fonts/Poppins/Poppins-SemiBold.ttf"),
    PoppinsThin: require("./src/Assets/Fonts/Poppins/Poppins-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}
