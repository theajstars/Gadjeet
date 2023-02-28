const Images = {
  AppleLogo: require("./IMG/AppleLogo.png"),
  AvatarOne: require("./IMG/Avatar1.png"),
  BackArrowIcon: require("./IMG/BackArrowIcon.png"),
  BagIcon: require("./IMG/BagIcon.png"),
  BeatsLogo: require("./IMG/BeatsLogo.png"),
  BlackHeadphonesOne: require("./IMG/BlackHeadphonesOne.png"),
  BlueHeadPhones: require("./IMG/BlueHeadPhones.png"),
  BoseLogo: require("./IMG/BoseLogo.png"),
  CameraIcon: require("./IMG/CameraIcon.png"),
  CartIcon: require("./IMG/CartIcon.png"),
  CheckIcon: require("./IMG/CheckIcon.png"),
  CheckoutIcon: require("./IMG/CheckoutIcon.png"),
  CustomerSupportIcon: require("./IMG/CustomerSupportIcon.png"),
  DeleteIconWhite: require("./IMG/DeleteIconWhite.png"),
  DollarIcon: require("./IMG/DollarIcon.png"),
  FilterIcon: require("./IMG/FilterIcon.png"),
  GrayBorderDotIcon: require("./IMG/GrayBorderDotIcon.png"),
  GrayDotIcon: require("./IMG/GrayDotIcon.png"),
  HomeIcon: require("./IMG/HomeIcon.png"),
  JblLogo: require("./IMG/JblLogo.png"),
  Logo: require("./IMG/Logo.png"),
  LogoutIcon: require("./IMG/LogoutIcon.png"),
  MastercardLogo: require("./IMG/MastercardLogo.png"),
  MenuIcon: require("./IMG/MenuIcon.png"),
  MinusIcon: require("./IMG/MinusIcon.png"),
  MoreIcon: require("./IMG/MoreIcon.png"),
  NextIcon: require("./IMG/NextIcon.png"),
  OrdersIcon: require("./IMG/OrdersIcon.png"),
  PaypalLogo: require("./IMG/PaypalLogo.png"),
  PaypalLogoWhite: require("./IMG/PaypalLogoWhite.png"),
  PlusIcon: require("./IMG/PlusIcon.png"),
  ProfileIcon: require("./IMG/ProfileIcon.png"),
  RedHeadphonesOne: require("./IMG/RedHeadphonesOne.png"),
  RedHeadPhonesThree: require("./IMG/RedHeadPhonesThree.png"),
  RedHeadphonesTwo: require("./IMG/RedHeadphonesTwo.png"),
  SavedItemsIconDark: require("./IMG/SavedItemsIconDark.png"),
  SavedItemsIconWhite: require("./IMG/SavedItemsIconWhite.png"),
  SearchIcon: require("./IMG/SearchIcon.png"),
  SettingsIcon: require("./IMG/SettingsIcon.png"),
  ShareIconBlack: require("./IMG/ShareIconBlack.png"),
  ShoppingBagIcon: require("./IMG/ShoppingBagIcon.png"),
  SonyLogo: require("./IMG/SonyLogo.png"),
  StarOrangeIcon: require("./IMG/StarOrangeIcon.png"),
  SupportIcon: require("./IMG/SupportIcon.png"),
};
const Brands = [
  { name: "JBL", image: Images.JblLogo },
  { name: "Beats", image: Images.BeatsLogo },
  { name: "Sony", image: Images.SonyLogo },
  { name: "Bose", image: Images.BoseLogo },
];

const ProductsOne = [
  {
    image: Images.BlackHeadphonesOne,
    name: "Sony WH Taiwosaurus-40",
    price: 3450,
  },
  { image: Images.RedHeadphonesOne, name: "Beats by Nevo", price: 3450 },
];
const ProductsTwo = [
  { image: Images.RedHeadphonesTwo, name: "JBL Tune Giddy 410", price: 2220 },
  { image: Images.BlueHeadPhones, name: "JBL AMD Giga Chad 3.1", price: 160 },
];
export { Images, Brands, ProductsOne, ProductsTwo };
