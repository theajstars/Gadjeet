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
    backgroundColor: Colors.BlackPrimary,
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
});

export { HomeStyles };
