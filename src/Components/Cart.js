import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { AllProducts, Images } from "../Assets/Assets";
import { AllStyles } from "../Assets/Styles/AllStyles";
import { CartStyles } from "../Assets/Styles/CartStyles";
import { Colors } from "../Assets/Styles/Colors";
import { FontStyles } from "../Assets/Styles/FontStyles";

export default function Cart({ navigation }) {
  return (
    <>
      <View style={[AllStyles.DefaultContainer]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {AllProducts.map((product, index) => {
            return (
              <View style={[AllStyles.FlexColumn, CartStyles.Products]}>
                <TouchableOpacity
                  style={[AllStyles.FlexRow, CartStyles.Product]}
                >
                  <Image
                    source={product.image}
                    style={CartStyles.ProductImage}
                  />
                  <View
                    style={[AllStyles.FlexColumn, CartStyles.ProductDetails]}
                  >
                    <Text
                      style={[
                        CartStyles.ProductName,
                        FontStyles.NotoSansSemiBold,
                      ]}
                    >
                      {product.name}
                    </Text>

                    <View
                      style={[AllStyles.FlexRow, CartStyles.ProductDetailsRow]}
                    >
                      <Text
                        style={[
                          CartStyles.ProductPrice,
                          FontStyles.NotoSansSemiBold,
                        ]}
                      >
                        ${product.price.toLocaleString()}
                      </Text>
                      <TouchableOpacity
                        style={[
                          AllStyles.FlexRow,
                          CartStyles.ProductActionButton,
                        ]}
                      >
                        <Image
                          source={Images.MinusIcon}
                          style={CartStyles.ProductActionImage}
                        />
                      </TouchableOpacity>
                      <Text style={CartStyles.ProductQuantity}>14</Text>
                      <TouchableOpacity style={CartStyles.ProductActionButton}>
                        <Image
                          source={Images.PlusIcon}
                          style={CartStyles.ProductActionImage}
                        />
                      </TouchableOpacity>
                    </View>

                    <View style={[AllStyles.FlexRow, CartStyles.CartActions]}>
                      <TouchableOpacity
                        style={[
                          AllStyles.FlexRow,
                          CartStyles.CartAction,
                          { backgroundColor: Colors.White },
                        ]}
                      >
                        <Text
                          style={[
                            { fontSize: 15, color: Colors.BlackPrimary },
                            FontStyles.NotoSansRegular,
                          ]}
                        >
                          Save{" "}
                          <Image
                            source={Images.SavedItemsIconDark}
                            style={CartStyles.CartActionImage}
                          />
                        </Text>
                      </TouchableOpacity>
                      <Text> </Text>
                      <Text> </Text>
                      <Text> </Text>
                      <Text> </Text>
                      <Text> </Text>
                      <TouchableOpacity
                        style={[
                          AllStyles.FlexRow,
                          CartStyles.CartAction,
                          { backgroundColor: Colors.BlackPrimary },
                        ]}
                      >
                        <Text
                          style={[
                            { fontSize: 15, color: Colors.White },
                            FontStyles.NotoSansRegular,
                          ]}
                        >
                          Delete{" "}
                          <Image
                            source={Images.DeleteIconWhite}
                            style={CartStyles.CartActionImage}
                          />
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
        <TouchableOpacity
          style={[CartStyles.CheckoutNowButton, AllStyles.FlexRow]}
          onPress={() => {
            navigation.navigate("Checkout");
          }}
        >
          <Text
            style={[
              CartStyles.CheckoutNowButtonText,
              FontStyles.NotoSansRegular,
            ]}
          >
            Checkout Now
          </Text>
          <Image
            source={Images.CheckoutIcon}
            style={CartStyles.CheckoutNowImage}
          />
        </TouchableOpacity>
        <Text></Text>
      </View>
    </>
  );
}
