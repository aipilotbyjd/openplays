import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const PlaysVO = () => {
  return (
    <View>
      <ImageBackground
        source={require("../../../assets/images/song.jpg")}
        resizeMode="cover"
        className="flex justify-center h-96 bg-slate-400 opacity-20"
      >
        <Text>PlaysVO</Text>
      </ImageBackground>
    </View>
  );
};

export default PlaysVO;
