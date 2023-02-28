import { StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { margin, padding } from "./StyleProps";

const HomeStyles = StyleSheet.create({
  Jumbo: {
    justifyContent: "space-between",
    marginTop: 15,
  },
  JumboHeader: {
    fontSize: 28,
  },
  JumboRow: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  JumboSearchContainer: {
    borderWidth: 1,
    borderColor: Colors.BlackPrimary,
    borderRadius: 10,
    ...padding(7, 20),
    alignItems: "center",
    justifyContent: "space-between",
    width: "83%",
    ...margin(10, 0),
  },
  JumboSearchImage: {
    height: 18,
    width: 18,
    resizeMode: "contain",
    marginRight: 10,
  },
  JumboSearch: {
    width: "90%",
  },

  JumboBanner: {
    backgroundColor: Colors.YellowSecondary,
    borderRadius: 20,
    height: 140,
    ...padding(5, 20),
    ...margin(10, 0),
    marginTop: 30,
  },
  JumboBannerleft: {
    justifyContent: "space-between",
    height: "100%",
  },
  JumboBannerButton: {
    backgroundColor: Colors.BlackSecondary,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    borderRadius: 50,
  },
  JumboBannerImage: {
    height: 200,
    marginTop: -50,
    ...padding(0),
    width: 200,
    resizeMode: "contain",
  },
  JumboDots: {
    alignItems: "center",
    justifyContent: "center",
  },
  JumboDot: {
    borderWidth: 1,
    borderColor: Colors.BlackPrimary,
    width: 18,
    height: 18,
    borderRadius: 20,
    ...margin(10, 4),
  },
  JumboDotActive: {
    backgroundColor: Colors.BlackPrimary,
  },
  SectionTitleRow: {
    alignItems: "center",
    justifyContent: "space-between",
    ...margin(30, 0),
  },
  // ChooseBrand: {
  //   marginTop: 20,
  // },
  Brand: {
    backgroundColor: Colors.WhiteBlue,
    alignItems: "center",
    justifyContent: "space-between",
    width: 120,
    height: 120,
    padding: 20,
    borderRadius: 20,
    ...margin(0, 15),
  },
  BrandImage: {
    height: 60,
    width: 60,
    resizeMode: "contain",
  },

  ProductRow: {
    alignItems: "center",
    justifyContent: "space-between",
    ...margin(20, 0),
    marginTop: 0,
  },
  ProductCard: {
    width: 170,
    // height: 200,
    backgroundColor: Colors.WhiteBlue,
    borderRadius: 20,
    ...margin(0, 10),
    alignItems: "center",
    ...padding(10, 10, 15, 15),
  },
  ProductImage: {
    resizeMode: "contain",
    height: 100,
    width: 100,
  },
  ProductDetails: {
    alignItems: "flex-start",
    width: "100%",
    marginTop: 5,
  },
  ProductName: {
    fontSize: 16,
    marginTop: 5,
  },
  ProductPrice: {
    fontSize: 22,
    marginTop: 5,
  },
  ProductActions: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 5,
  },
  ProductAction: {
    height: 26,
    width: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ProductActionAdd: {
    backgroundColor: Colors.BlackPrimary,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  ProductActionSave: {
    backgroundColor: Colors.White,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export { HomeStyles };
