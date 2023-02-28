import { StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { margin, padding } from "./StyleProps";

const ProductStyles = StyleSheet.create({
  ProductNav: {
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  ProductNavButton: {
    height: 25,
    width: 25,
    resizeMode: "contain",
  },
  ProductNavRight: {
    alignItems: "center",
  },
  ProductNavButtonRight: {
    height: 23,
    width: 23,
  },
  ProductNavRightButtonLast: {
    marginLeft: 30,
  },

  ProductImageBackground: {
    backgroundColor: Colors.WhiteBlue,
    width: "100%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 380,
    ...margin(30, 0),
  },
  ProductImage: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  ProductName: {
    color: Colors.BlackSecondary,
    fontSize: 26,
    fontFamily: "No",
  },
  ProductDetailsRow: {
    alignItems: "center",
    justifyContent: "space-between",
    ...margin(7, 0),
  },
  ProductRating: {
    alignItems: "center",
  },
  ProductRatingImage: {
    height: 14,
    width: 14,
    resizeMode: "contain",
    marginRight: 5,
  },
  GrayDotIcon: {
    height: 7,
    width: 7,
  },
  ProductRatingText: {
    fontFamily: "NotoSansRegular",
    color: Colors.GrayTertiary,
    fontSize: 17,
  },
  ProductFeature: {
    ...margin(5, 0),
    alignItems: "center",
  },
  ProductFeatureImage: {
    width: 16,
    height: 16,
    resizeMode: "contain",
    marginRight: 10,
  },

  ChooseColourContainer: {
    backgroundColor: Colors.WhiteBlue,
    ...padding(20),
    borderRadius: 20,
    height: 125,
    justifyContent: "space-between",
  },
  Colours: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  Colour: {
    width: 37,
    height: 37,
    borderRadius: 50,
  },
});

export { ProductStyles };
