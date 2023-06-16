import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";

const MusicPlayer = () => {
  return (
    <View className="flex-1">
      <LinearGradient
        colors={["#67B26F", "#4ca2cd"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="absolute inset-0"
      >
        <TouchableOpacity className="flex-row items-center p-4">
          <FontAwesome name="chevron-left" size={24} color="white" />
          <Text className="text-white text-lg font-bold ml-2">
            Comrade Anthem (From "Dear Comrade")
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      <View className="flex-1 justify-center items-center">
        <ImageBackground
          source={require("../../../assets/images/song.jpg")}
          resizeMode="cover"
          className="w-full h-60 rounded-3xl p-4 justify-end items-center"
        ></ImageBackground>
      </View>
      <LinearGradient
        colors={["#3CA55C", "#B5AC49"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="absolute inset-x-0 bottom-0"
      >
        <Text className="text-white text-2xl font-bold mb-4 text-center">
          Comrade Anthem
        </Text>
        <View className="flex-row justify-around items-center w-2/3 p-4 rounded-lg">
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="comment-o" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="sharealt" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="download" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default MusicPlayer;
