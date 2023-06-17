import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const handleToggleLike = () => {
    setIsLiked((prevState) => !prevState);
  };

  const handleToggleFollow = () => {
    setIsFollowing((prevState) => !prevState);
  };

  const handleToggleRepeat = () => {
    setIsRepeat((prevState) => !prevState);
  };

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const fixHeight = windowHeight / 3;

  return (
    <View className="flex">
      <View className="w-full h-[25.333333%]">
        <LinearGradient
          colors={["#3CA55C", "#B5AC49"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="absolute"
          style={{ width: windowWidth, height: fixHeight }}
        >
          <View className="flex flex-row items-center px-2">
            <TouchableOpacity>
              <FontAwesome5 name="chevron-left" size={24} color="white" />
            </TouchableOpacity>
            <Text className="text-white text-xs ml-2 items-center justify-center">
              Comrade Anthem (From "Dear Comrade")
            </Text>
          </View>
        </LinearGradient>
      </View>
      <View className="w-full h-[33.333333%]">
        <ImageBackground
          source={require("../../../assets/images/song.jpg")}
          resizeMode="cover"
          style={{ width: "100%", height: fixHeight }}
        />
      </View>
      <View className="w-full h-[33.333333%]">
        <LinearGradient
          colors={["#3CA55C", "#B5AC49"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="absolute flex-row items-center px-4"
          style={{ width: windowWidth, height: fixHeight }}
        >
          <View className="flex-1">
            <View className="flex">
              <Text className="text-white text-lg font-bold">
                Comrade Anthem
              </Text>
            </View>
            <View className="flex flex-row space-x-2 items-center py-2">
              <Text className="text-white text-xs">Rajbha Gadhavi</Text>
              <TouchableOpacity
                onPress={handleToggleFollow}
                className="flex border border-white rounded-3xl"
              >
                <Text className="text-white text-[10px] px-2 font-bold text-center">
                  {isFollowing ? "Following" : "Follow"}
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex flex-row justify-between items-center">
              <View className="flex flex-row space-x-8 items-center">
                <TouchableOpacity onPress={handleToggleLike}>
                  <Ionicons
                    name="md-heart"
                    size={24}
                    color={isLiked ? "red" : "white"}
                  />
                </TouchableOpacity>
                <Octicons name="comment" size={24} color="white" />
                <Ionicons
                  name="ios-share-social-sharp"
                  size={24}
                  color="white"
                />
              </View>
              <View className="flex flex-row space-x-8 items-center">
                <MaterialCommunityIcons
                  name="cloud-download-outline"
                  size={24}
                  color="white"
                />
                <TouchableOpacity onPress={handleToggleRepeat}>
                  {isRepeat ? (
                    <MaterialIcons name="repeat-one" size={24} color="white" />
                  ) : (
                    <MaterialIcons name="repeat" size={24} color="white" />
                  )}
                </TouchableOpacity>
                <Entypo name="dots-three-vertical" size={24} color="white" />
              </View>
            </View>
            <View className="flex flex-row items-center">
              <View>
                <TouchableOpacity onPress={handleTogglePlay}>
                  {isPlaying ? (
                    <FontAwesome5 name="pause" size={24} color="white" />
                  ) : (
                    <FontAwesome5 name="play" size={24} color="white" />
                  )}
                </TouchableOpacity>
              </View>
              <View>
                <Slider
                  style={{
                    width: windowWidth - 40,
                    height: windowHeight * 0.06,
                  }}
                  minimumValue={0}
                  maximumValue={1}
                  minimumTrackTintColor="#fff8dc"
                  maximumTrackTintColor="#f8f8ff"
                />
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default MusicPlayer;
