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
    <View style={{ backgroundColor: backgroundColor, height, width }}>
      {/* Video Player */}
      <Video
        ref={playbackInstance}
        source={videook}
        style={{ width: width }}
        className="h-48 my-2"
        resizeMode={ResizeMode.CONTAIN}
        shouldPlay
      />
      <View className="absolute bottom-20 left-20">
        {/* Like Icon */}
        <TouchableOpacity onPress={handleLikePress}>
          <Ionicons name="heart-outline" size={24} color="white" />
        </TouchableOpacity>
        {/* Comment Icon */}
        <TouchableOpacity onPress={handleCommentPress}>
          <Ionicons name="chatbubble-outline" size={24} color="white" />
        </TouchableOpacity>

        {/* Share Icon */}
        <TouchableOpacity onPress={handleSharePress}>
          <Ionicons name="share-social-outline" size={24} color="white" />
        </TouchableOpacity>

        {/* User Information */}
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Image
            source={require("../../../assets/images/favicon.png")}
            style={{ width: 30, height: 30, borderRadius: 15, marginRight: 10 }}
          />
          <Text style={{ color: "white", fontWeight: "bold" }}>Username</Text>
        </View>
        {/* Music and Description */}
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "white" }}>Song Name - Artist</Text>
          <Text style={{ color: "white" }}>Description</Text>
        </View>
        {/* Additional UI Elements */}
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          {/* Followers Count */}
          <Ionicons name="people-outline" size={18} color="white" />
          <Text style={{ color: "white", marginLeft: 5 }}>1.2M Followers</Text>

          {/* Views Count */}
          <Ionicons
            name="eye-outline"
            size={18}
            color="white"
            style={{ marginLeft: 20 }}
          />
          <Text style={{ color: "white", marginLeft: 5 }}>1.5M Views</Text>
          {/* Actions */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            {/* Follow Button */}
            <TouchableOpacity
              style={{
                backgroundColor: "#FF0000",
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "white" }}>Follow</Text>
            </TouchableOpacity>

            {/* More Options */}
            <TouchableOpacity style={{ marginLeft: 10 }}>
              <Ionicons
                name="ellipsis-horizontal-outline"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlaysVO;
