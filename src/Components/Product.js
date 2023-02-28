import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Images } from "../Assets/Assets";
import { AllStyles } from "../Assets/Styles/AllStyles";
import { FontStyles } from "../Assets/Styles/FontStyles";
import { HomeStyles } from "../Assets/Styles/HomeStyles";
import { ProductStyles } from "../Assets/Styles/ProductStyles";
import BottomBlackJumbo from "./Misc/BottomBlackJumbo";

export default function Product() {
  const ProductFeatures = [
    "NORAD satellite connectivity",
    "Open portals to Ohio",
    "Built-in Ubuntu OS",
    "Customizable experience",
    "Inactive Noise Cancelling",
  ];
  const ProductColours = [
    "#105E8A",
    "#EA5050",
    "#C79A29",
    "#000000",
    "#64DB2C",
    "#6328C4",
  ];
  return (
    <>
      <ScrollView style={[AllStyles.DefaultContainer]}>
        <View style={[ProductStyles.ProductNav, AllStyles.FlexRow]}>
          <TouchableOpacity>
            <Image
              source={Images.CustomerSupportIcon}
              style={[ProductStyles.ProductNavButton]}
            />
          </TouchableOpacity>
          <View style={[AllStyles.FlexRow, ProductStyles.ProductNavRight]}>
            <TouchableOpacity>
              <Image
                source={Images.SavedItemsIconDark}
                style={[
                  ProductStyles.ProductNavButton,
                  ProductStyles.ProductNavButtonRight,
                ]}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={Images.ShareIconBlack}
                style={[
                  ProductStyles.ProductNavButton,
                  ProductStyles.ProductNavButtonRight,
                  ProductStyles.ProductNavRightButtonLast,
                ]}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={[ProductStyles.ProductImageBackground, AllStyles.FlexRow]}>
          <Image
            source={Images.BlueHeadPhones}
            style={[ProductStyles.ProductImage]}
          />
        </View>

        <Text style={[ProductStyles.ProductName, FontStyles.NotoSansBold]}>
          JBL Phelps 300NC{" "}
        </Text>
        <View style={[AllStyles.FlexRow, ProductStyles.ProductDetailsRow]}>
          <View style={[AllStyles.FlexRow, ProductStyles.ProductRating]}>
            <Image
              source={Images.StarOrangeIcon}
              style={[ProductStyles.ProductRatingImage]}
            />
            <Text style={[ProductStyles.ProductRatingText]}>4.9 Rated</Text>
          </View>
          <Image
            source={Images.GrayDotIcon}
            style={[ProductStyles.GrayDotIcon]}
          />
          <Text style={[ProductStyles.ProductRatingText]}>2.3k+ Reviews</Text>
          <Image
            source={Images.GrayDotIcon}
            style={[ProductStyles.GrayDotIcon]}
          />
          <Text style={[ProductStyles.ProductRatingText]}>241k+ Sold</Text>
        </View>
        <Text
          style={[
            FontStyles.NotoSansSemiBold,
            FontStyles.GraySecondaryText,
            { fontSize: 21, marginTop: 30 },
          ]}
        >
          Product Features
        </Text>
        {ProductFeatures.map((feature, index) => {
          return (
            <View
              style={[AllStyles.FlexRow, ProductStyles.ProductFeature]}
              key={index}
            >
              <Image
                style={ProductStyles.ProductFeatureImage}
                source={Images.GrayBorderDotIcon}
              />
              <Text
                style={[
                  FontStyles.GraySecondaryText,
                  FontStyles.NotoSansRegular,
                  { fontSize: 16 },
                ]}
              >
                {feature}
              </Text>
            </View>
          );
        })}
        <Text></Text>
        <Text></Text>

        <View
          style={[AllStyles.FlexColumn, ProductStyles.ChooseColourContainer]}
        >
          <Text
            style={[
              FontStyles.NotoSansSemiBold,
              FontStyles.GraySecondaryText,
              { fontSize: 21 },
            ]}
          >
            Choose Colour
          </Text>
          <View style={[AllStyles.FlexRow, ProductStyles.Colours]}>
            {ProductColours.map((colour) => {
              return (
                <TouchableOpacity
                  style={[
                    AllStyles.FlexRow,
                    ProductStyles.Colour,
                    {
                      backgroundColor: colour,
                    },
                  ]}
                  key={colour}
                ></TouchableOpacity>
              );
            })}
          </View>
        </View>

        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </ScrollView>
      <BottomBlackJumbo type={"product"} title="Price" amount={725} />
    </>
  );
}
