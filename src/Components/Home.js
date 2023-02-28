import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Brands, Images, ProductsOne } from "../Assets/Assets";
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
            <Text
              style={[
                FontStyles.NotoSansBold,
                { fontSize: 23, color: Colors.BlackSecondary },
              ]}
            >
              Sony WH-CH700N
            </Text>
            <Text
              style={[
                FontStyles.NotoSansRegular,
                { fontSize: 17, color: Colors.BlackSecondary },
              ]}
            >
              Noise Cancelling Wireless
            </Text>
            <Text
              style={[
                FontStyles.NotoSansRegular,
                { fontSize: 17, color: Colors.BlackSecondary },
              ]}
            >
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

      <View style={[AllStyles.FlexRow, HomeStyles.SectionTitleRow]}>
        <Text
          style={[
            FontStyles.NotoSansSemiBold,
            FontStyles.GraySecondaryText,
            { fontSize: 21 },
          ]}
        >
          Choose Brand
        </Text>
        <Text
          style={[
            FontStyles.NotoSansRegular,
            FontStyles.GrayTertiaryText,
            { fontSize: 18 },
          ]}
        >
          View All
        </Text>
      </View>
      <ScrollView
        style={[HomeStyles.ChooseBrand]}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {Brands.map((brand, index) => {
          return (
            <View style={[HomeStyles.Brand, AllStyles.FlexColumn]} key={index}>
              <Image source={brand.image} style={HomeStyles.BrandImage} />
              <Text
                style={[
                  FontStyles.GraySecondaryText,
                  FontStyles.NotoSansSemiBold,
                  { fontSize: 17 },
                ]}
              >
                {brand.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>

      <Text></Text>
      <Text></Text>
      <View style={[AllStyles.FlexRow, HomeStyles.SectionTitleRow]}>
        <Text
          style={[
            FontStyles.NotoSansSemiBold,
            FontStyles.GraySecondaryText,
            { fontSize: 21 },
          ]}
        >
          Top Products
        </Text>
      </View>
      {ProductsOne.map((product, index) => {
        return (
          <View style={[AllStyles.FlexColumn, HomeStyles.ProductCard]}>
            {/* <Image source={product.image} style={HomeStyles.ProductImage} /> */}
          </View>
        );
      })}
    </ScrollView>
  );
}
