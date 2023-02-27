import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Images } from "../Assets/Assets";
import { AllStyles } from "../Assets/Styles/AllStyles";
import { Colors } from "../Assets/Styles/Colors";
import { FontStyles } from "../Assets/Styles/FontStyles";
import { HomeStyles } from "../Assets/Styles/HomeStyles";

export default function Home() {
  return (
    <ScrollView style={AllStyles.DefaultContainer}>
      <View style={[HomeStyles.Jumbo, AllStyles.FlexColumn]}>
        <Text style={[FontStyles.NotoSansBold, HomeStyles.JumboHeader]}>
          Find your next Gadget
        </Text>
        <View style={[AllStyles.FlexRow, HomeStyles.JumboRow]}>
          <View style={[AllStyles.FlexRow, HomeStyles.JumboSearchContainer]}>
            <Image
              source={Images.SearchIcon}
              style={[HomeStyles.JumboSearchImage]}
            />
            <TextInput
              style={[HomeStyles.JumboSearch, FontStyles.NotoSansRegular]}
              placeholder="Search"
            />
          </View>
          <TouchableOpacity style={AllStyles.ActionButtonDefault}>
            <Image
              source={Images.FilterIcon}
              style={AllStyles.ActionButtonDefaultImage}
            />
          </TouchableOpacity>
        </View>
        <View style={[AllStyles.FlexRow, HomeStyles.JumboBanner]}>
          <View style={[AllStyles.FlexColumn, HomeStyles.JumboBannerleft]}>
            <Text style={[FontStyles.NotoSansBold, { fontSize: 23 }]}>
              Sony WH-CH700N
            </Text>
            <Text style={[FontStyles.NotoSansRegular, { fontSize: 17 }]}>
              Noise Cancelling Wireless
            </Text>
            <Text style={[FontStyles.NotoSansRegular, { fontSize: 17 }]}>
              Headphones
            </Text>
            <TouchableOpacity
              style={[AllStyles.FlexRow, HomeStyles.JumboBannerButton]}
            >
              <Text
                style={[FontStyles.NotoSansRegular, { color: Colors.White }]}
              >
                Shop Now
              </Text>
            </TouchableOpacity>
            <Text></Text>
          </View>
          <Image
            source={Images.BlackHeadphonesOne}
            style={[HomeStyles.JumboBannerImage]}
          />
        </View>
        <View style={[AllStyles.FlexRow, HomeStyles.JumboDots]}>
          <View style={[HomeStyles.JumboDot, HomeStyles.JumboDotActive]}></View>
          <View style={[HomeStyles.JumboDot]}></View>
          <View style={[HomeStyles.JumboDot]}></View>
        </View>
      </View>
    </ScrollView>
  );
}
