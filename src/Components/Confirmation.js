import { Text, View, Image, ScrollView } from "react-native";
import { Images } from "../Assets/Assets";
import { AllStyles } from "../Assets/Styles/AllStyles";
import { ConfirmationStyles } from "../Assets/Styles/ConfirmationStyles";
import { FontStyles } from "../Assets/Styles/FontStyles";
import BottomBlackJumbo from "./Misc/BottomBlackJumbo";

export default function Confirmation() {
  return (
    <>
      <ScrollView style={AllStyles.DefaultContainer}>
        <View style={[AllStyles.FlexColumn, ConfirmationStyles.Container]}>
          <Image
            source={Images.CheckIcon}
            style={ConfirmationStyles.ConfirmationImage}
          />
          <Text style={[FontStyles.NotoSansSemiBold, { fontSize: 27 }]}>
            Payment Successful!
          </Text>
          <Text style={[FontStyles.NotoSansRegular, { fontSize: 17 }]}>
            We have work for the beans
          </Text>
        </View>
      </ScrollView>
      <BottomBlackJumbo type="payment_success" />
    </>
  );
}
