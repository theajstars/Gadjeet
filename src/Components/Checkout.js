import { useState } from "react";
import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";

import { Images, PaymentOptions } from "../Assets/Assets";
import { AllStyles } from "../Assets/Styles/AllStyles";
import { CheckoutStyles } from "../Assets/Styles/CheckoutStyles";
import { Colors } from "../Assets/Styles/Colors";
import { FontStyles } from "../Assets/Styles/FontStyles";
import BottomBlackJumbo from "./Misc/BottomBlackJumbo";

function RadioButton() {
  return <View style={CheckoutStyles.RadioButtonContainer}></View>;
}
function RadioButtonChecked() {
  return (
    <View style={CheckoutStyles.RadioButtonContainer}>
      <View style={CheckoutStyles.RadioButtonChecked}></View>
    </View>
  );
}
export default function Checkout({ navigation }) {
  const [currentPaymentMethod, setCurrentPaymentMethod] = useState(null);
  return (
    <>
      <ScrollView style={[AllStyles.DefaultContainer]}>
        <Text style={[FontStyles.NotoSansBold, { fontSize: 23 }]}>
          Payment Method
        </Text>
        <View style={[AllStyles.FlexColumn, CheckoutStyles.PaymentOptionsCol]}>
          {PaymentOptions.map((methodOption, index) => {
            return (
              <TouchableOpacity
                style={[AllStyles.FlexRow, CheckoutStyles.PaymentOption]}
                onPress={() => {
                  setCurrentPaymentMethod(index);
                }}
              >
                <View style={[AllStyles.FlexRow, { alignItems: "center" }]}>
                  <View
                    style={[
                      AllStyles.FlexRow,
                      CheckoutStyles.PaymentOptionImageContainer,
                    ]}
                  >
                    <Image
                      source={methodOption.image}
                      style={CheckoutStyles.PaymentOptionImage}
                    />
                  </View>
                  <Text style={[FontStyles.NotoSansRegular, { fontSize: 18 }]}>
                    {methodOption.title}
                  </Text>
                </View>
                {currentPaymentMethod === index ? (
                  <RadioButtonChecked />
                ) : (
                  <RadioButton />
                )}
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity
            style={[AllStyles.FlexRow, CheckoutStyles.PaymentOption]}
          >
            <View style={[AllStyles.FlexRow, { alignItems: "center" }]}>
              <View
                style={[
                  AllStyles.FlexRow,
                  CheckoutStyles.PaymentOptionImageContainer,
                ]}
              >
                <Image
                  source={Images.MoreIcon}
                  style={CheckoutStyles.PaymentOptionImage}
                />
              </View>
              <Text style={[FontStyles.NotoSansRegular, { fontSize: 18 }]}>
                More Methods
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={CheckoutStyles.PaymentActionContainer}>
          {currentPaymentMethod === 1 ? (
            <TouchableOpacity
              style={[
                AllStyles.FlexRow,
                CheckoutStyles.PaymentAction,
                CheckoutStyles.PaymentActionPaypal,
              ]}
            >
              <Image
                source={Images.PaypalLogo}
                style={CheckoutStyles.PaymentActionImage}
              />
              <Text
                style={[
                  FontStyles.NotoSansRegular,
                  CheckoutStyles.PaymentActionText,
                  CheckoutStyles.PaypalColorText,
                ]}
              >
                Continue with PayPal
              </Text>
            </TouchableOpacity>
          ) : currentPaymentMethod === 2 ? (
            <TouchableOpacity
              style={[
                AllStyles.FlexRow,
                CheckoutStyles.PaymentAction,
                CheckoutStyles.PaymentActionApple,
              ]}
            >
              <Text
                style={[
                  FontStyles.NotoSansRegular,
                  CheckoutStyles.PaymentActionText,
                  CheckoutStyles.PaypalColorText,
                ]}
              >
                Pay with
              </Text>
              <Image
                source={Images.AppleLogo}
                style={CheckoutStyles.PaymentActionImage}
              />
            </TouchableOpacity>
          ) : (
            currentPaymentMethod === 0 && (
              <TouchableOpacity
                style={[AllStyles.FlexColumn, CheckoutStyles.CreditCard]}
              >
                <Text
                  style={[
                    FontStyles.NotoSansRegular,
                    { fontSize: 18, color: Colors.WhiteSecondary },
                  ]}
                >
                  Credit Card
                </Text>
                <View style={[AllStyles.FlexRow, { alignItems: "center" }]}>
                  <Text
                    style={[
                      FontStyles.NotoSansBold,
                      {
                        fontSize: 25,
                        marginRight: 10,
                        color: Colors.WhitePrimary,
                      },
                    ]}
                  >
                    ****
                  </Text>
                  <Text
                    style={[
                      FontStyles.NotoSansBold,
                      {
                        fontSize: 25,
                        marginRight: 10,
                        color: Colors.WhitePrimary,
                      },
                    ]}
                  >
                    ****
                  </Text>
                  <Text
                    style={[
                      FontStyles.NotoSansBold,
                      {
                        fontSize: 25,
                        marginRight: 10,
                        color: Colors.WhitePrimary,
                      },
                    ]}
                  >
                    ****
                  </Text>
                  <Text
                    style={[
                      FontStyles.NotoSansBold,
                      {
                        fontSize: 25,
                        marginRight: 10,
                        color: Colors.WhitePrimary,
                      },
                    ]}
                  >
                    5489
                  </Text>
                </View>
                <View
                  style={[
                    AllStyles.FlexRow,
                    { alignItems: "center", justifyContent: "space-between" },
                  ]}
                >
                  <Text
                    style={[
                      FontStyles.NotoSansSemiBold,
                      { fontSize: 20, color: Colors.White },
                    ]}
                  >
                    Sigma Giga Chad
                  </Text>
                  <Image
                    source={Images.MastercardLogo}
                    style={CheckoutStyles.CreditCardImage}
                  />
                </View>
              </TouchableOpacity>
            )
          )}
        </View>
      </ScrollView>
      <BottomBlackJumbo
        type="checkout"
        title="Total"
        amount={4300}
        showPayNow={currentPaymentMethod === 0}
        jumboAction={() => navigation.navigate("Confirmation")}
      />
    </>
  );
}
