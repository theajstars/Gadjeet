import { Image, ScrollView, Text, View } from "react-native";
import { Images } from "../../Assets/Assets";
import { AllStyles } from "../../Assets/Styles/AllStyles";

export default function Login() {
  return (
    <>
      <View style={AllStyles.DefaultContainer}>
        <ScrollView>
          <Text
            style={{
              fontFamily: "PoppinsSemiBold",
              fontSize: 40,
              textAlign: "center",
            }}
          >
            Login Page
          </Text>
        </ScrollView>
      </View>
    </>
  );
}
