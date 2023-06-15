import { Text, View, Image, Dimensions } from "react-native";
import React, { useRef } from "react";
import { Video } from "expo-av";

const PlaysVO = () => {
  const width = Dimensions.get("window").width;
  const playbackInstance = useRef(null);
  const videook: any = require("../../../assets/video/vidok.mp4");
  return (
    <View className="flex flex-1 items-center">
      <Video
        ref={playbackInstance}
        source={videook}
        isLooping
        className="h-48"
        style={{ width: width - 15 }}
        shouldPlay
      />
    </View>
  );
};

export default PlaysVO;
