import { Image, ScrollView, Text, View } from "react-native";
import { Images } from "../../Assets/Assets";
import { AllStyles } from "../../Assets/Styles/AllStyles";

export default function Register() {
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
            Register Page
          </Text>
        </ScrollView>
      </View>
    </>
  );
}
