import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import { ResizeMode, Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";

const PlaysVO = () => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const backgroundColor = "#222222";
  const playbackInstance = useRef(null);
  const videook: any = require("../../../assets/video/vidok.mp4");

  const handleLikePress = () => {
    // Handle like functionality
  };

  const handleCommentPress = () => {
    // Handle comment functionality
  };

  const handleSharePress = () => {
    // Handle share functionality
  };

  return (
    <View style={{ backgroundColor: backgroundColor }}>
      {/* Video Player */}
      <Video
        ref={playbackInstance}
        source={videook}
        style={{ width: width }}
        className="h-48 my-2"
        resizeMode={ResizeMode.CONTAIN}
        shouldPlay
      />
    </View>
  );
};

export default PlaysVO;
