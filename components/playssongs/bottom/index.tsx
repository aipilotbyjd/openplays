import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { ResizeMode, Video } from "expo-av";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fixHeight = windowHeight / 3;

const Bottom = () => {
  const [isAudio, setIsAudio] = useState(true);

  return (
    <View style={styles.main1}>
      {isAudio ? (
        <ImageBackground
          source={require("../../../assets/images/song.jpg")}
          resizeMode="cover"
          style={{ width: "100%", opacity: 1, height: fixHeight }}
        />
      ) : (
        <Video
          source={{
            uri: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
          }} // Replace with your video URL
          resizeMode={ResizeMode.CONTAIN}
          shouldPlay
          isLooping
          style={{ width: "100%" }}
          className="h-[150%] pt-10"
        />
      )}
    </View>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  main1: {
    height: 400,
  },
});
