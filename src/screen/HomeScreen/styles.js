import { StyleSheet, Platform, Dimensions } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  layer1: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center'
  },
  sublayer: {
   height: 40, 
  },
  loadingStateTextStyle: {
    fontSize: 15,
  },
  helloTextStyle: {
      fontSize: 30
  }
};
