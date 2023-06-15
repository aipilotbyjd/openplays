import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Video } from "expo-av";

const PlaysVO = () => {
  const videook: any =
    "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4";
  return (
    <View className="flex flex-1 items-center">
      <Video source={videook} />
    </View>
  );
};

export default PlaysVO;
