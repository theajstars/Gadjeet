import { StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { FontStyles } from "./FontStyles";
import { margin, padding } from "./StyleProps";

const CheckoutStyles = StyleSheet.create({
  PaymentOptionsCol: {
    justifyContent: "space-between",
  },
  PaymentOption: {
    ...margin(15, 0),
    justifyContent: "space-between",
    alignItems: "center",
  },
  PaymentOptionImageContainer: {
    backgroundColor: Colors.GrayPrimary,
    ...padding(10),
    borderRadius: 13,
    marginRight: 30,
  },
  PaymentOptionImage: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
  RadioButtonContainer: {
    borderColor: Colors.BlackSecondary,
    borderWidth: 1,
    borderRadius: 50,
    width: 27,
    height: 27,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  RadioButtonChecked: {
    backgroundColor: Colors.BlackSecondary,
    borderRadius: 50,
    width: 15,
    height: 15,
  },
  PaymentActionContainer: {
    marginTop: 10,
  },
  PaymentAction: {
    borderWidth: 1,
    borderRadius: 8,
    ...padding(10, 0),
    alignItems: "center",
    justifyContent: "center",
  },
  PaymentActionImage: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    ...margin(0, 10),
  },

  CreditCard: {
    backgroundColor: Colors.BlackSecondary,
    padding: 23,
    borderRadius: 30,
    height: 210,
    justifyContent: "space-between",
  },

  CreditCardImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
});

export { CheckoutStyles };
