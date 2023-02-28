import { Image, Text, TouchableOpacity, View } from "react-native";
import { Images } from "../../Assets/Assets";
import { AllStyles } from "../../Assets/Styles/AllStyles";
import { BottomBlackJumboStyles } from "../../Assets/Styles/BottomBlackJumboStyles";
import { FontStyles } from "../../Assets/Styles/FontStyles";

const BottomBlackJumbo = ({ type, title, amount }) => {
  const Types = ["product", "payment_success", "checkout"];

  const getJumboContent = () => {
    switch (type) {
      case "product":
        return {
          image: Images.BagIcon,
          text: "Add to Cart",
        };
        break;
      case "payment_success":
        return {
          image: Images.ShoppingBagIcon,
          text: "Continue Shopping",
        };
        break;
      case "checkout":
        return {
          image: Images.DollarIcon,
          text: "Pay Now",
        };
    }
  };
  return (
    <>
      <View style={[AllStyles.FlexRow, BottomBlackJumboStyles.Container]}>
        {type !== "paymen_success" && (
          <View
            style={[AllStyles.FlexColumn, BottomBlackJumboStyles.ContainerLeft]}
          >
            <Text
              style={[
                FontStyles.NotoSansRegular,
                BottomBlackJumboStyles.ContainerTitle,
              ]}
            >
              {title}
            </Text>
            <Text
              style={[
                FontStyles.NotoSansBold,
                FontStyles.WhiteText,
                // BottomBlackJumboStyles.ContainerTitle,
                { fontSize: 30 },
              ]}
            >
              ${parseInt(amount).toLocaleString()}
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={[AllStyles.FlexRow, BottomBlackJumboStyles.JumboButton]}
        >
          <Image
            source={getJumboContent().image}
            style={[BottomBlackJumboStyles.JumboButtonImage]}
          />
          <Text
            style={[
              BottomBlackJumboStyles.JumboButtonText,
              FontStyles.NotoSansSemiBold,
            ]}
          >
            {getJumboContent().text}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default BottomBlackJumbo;
