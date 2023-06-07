import { Image, Text, View } from "react-native";
import React from "react";

const SingleDisplay = ({ image, name }: any) => {
  return (
    <View className="mr-4">
      <View className="w-24 h-24 rounded-lg overflow-hidden">
        <Image source={{ uri: image }} className="w-full h-full" />
      </View>
      <Text className="mt-2 text-xs text-center text-white font-semibold">
        {name}
      </Text>
    </View>
  );
};

export default SingleDisplay;
