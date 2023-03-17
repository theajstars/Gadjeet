import { StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { FontStyles } from "./FontStyles";
import { padding } from "./StyleProps";

const CartStyles = StyleSheet.create({
  Products: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  Product: {
    backgroundColor: Colors.WhiteBlue,
    borderRadius: 20,
    height: 150,
    marginBottom: 20,
    ...padding(20),
    justifyContent: "space-between",
    alignItems: "center",
  },
  ProductImage: {
    height: 95,
    width: 95,
    marginRight: 10,
    resizeMode: "contain",
  },
  ProductName: {
    fontSize: 18,
    color: Colors.BlackPrimary,
  },
  ProductDetails: {
    height: 110,
    justifyContent: "space-between",
  },
  ProductDetailsRow: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  ProductPrice: {
    color: Colors.BluePaypal,
    fontSize: 19,
  },
  ProductActionButton: {
    backgroundColor: Colors.White,
    height: 30,
    width: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
  ProductActionImage: {
    width: 11,
    height: 11,
    resizeMode: "contain",
  },
  ProductQuantity: {
    fontFamily: "NotoSansRegular",
  },
  CartActions: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  CartAction: {
    borderRadius: 5,
    width: 95,
    alignItems: "center",
    justifyContent: "center",
    height: 35,
  },
  CartActionImage: {
    width: 14,
    height: 14,
    resizeMode: "contain",
  },
  CheckoutNowButton: {
    backgroundColor: Colors.BluePrimary,
    height: 45,
    borderRadius: 8,
    ...padding(0, 20),
    alignItems: "center",
    justifyContent: "center",
  },
  CheckoutNowButtonText: {
    color: Colors.White,
    fontSize: 19,
    marginRight: 4,
  },
  CheckoutNowImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginLeft: 4,
  },
});

export { CartStyles };
