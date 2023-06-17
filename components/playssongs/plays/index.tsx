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

const MusicPlayer = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

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
    <View className="flex flex-col">
      <View className="w-full h-[33.333333%]">
        <LinearGradient
          colors={["#3CA55C", "#B5AC49"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="absolute flex-row items-center px-4"
          style={{ width: windowWidth, height: fixHeight }}
        >
          <TouchableOpacity>
            <FontAwesome5 name="chevron-left" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-xs ml-2">
            Comrade Anthem (From "Dear Comrade")
          </Text>
        </LinearGradient>
      </View>
      <View className="w-full h-[33.333333%]">
        <ImageBackground
          source={require("../../../assets/images/song.jpg")}
          resizeMode="cover"
          style={{ width: windowWidth, height: fixHeight }}
        />
      </View>
      <View className="w-full h-[33.333333%] bottom-10">
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
                <Text
                  className={`text-white text-[10px] px-2 font-bold text-center`}
                >
                  {isFollowing ? "Following" : "Follow"}
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex flex-row justify-between items-center">
              <View className="flex flex-row space-x-8 items-center justify-start">
                <Ionicons name="md-heart" size={24} color="white" />
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
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default MusicPlayer;
