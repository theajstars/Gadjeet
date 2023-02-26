import { Image, ScrollView, Text, View } from "react-native";
import { Images } from "../../Assets/Assets";
import { AllStyles } from "../../Assets/Styles/AllStyles";

export default function Login() {
  return (
    <>
      <View style={AllStyles.DefaultContainer}>
        <Image
          source={Images.MenuIcon}
          style={{
            resizeMode: "contain",
            height: 40,
            width: 40,
          }}
        />
        <Text
          style={{
            fontFamily: "Noto Sans",
          }}
        >
          Auth Container
        </Text>
      </View>
    </>
  );
}
