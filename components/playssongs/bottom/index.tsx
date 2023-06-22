import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fixHeight = windowHeight / 3;

const Bottom = () => {
  return (
    <View style={styles.main1}>
      <ImageBackground
        source={require("../../../assets/images/song.jpg")}
        resizeMode="contain"
        style={{
          width: "100%",
          height: fixHeight + 40,
        }}
      />
    </View>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  main1: {
    height: fixHeight + 45,
  },
});
