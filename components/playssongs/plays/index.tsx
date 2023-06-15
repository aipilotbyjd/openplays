import React, { useEffect, useRef, useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { ResizeMode, Video } from "expo-av";
import { Entypo, AntDesign, FontAwesome, Fontisto } from "@expo/vector-icons";

const Post = () => {
  const [post, setPost] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const videook: any = require("../../../assets/video/vidok.mp4");
  const playbackInstance = useRef(null);

  const [paused, setPaused] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  const onLikePress = () => {};

  const getVideoUri = async () => {};

  useEffect(() => {
    getVideoUri();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <View>
          <Video
            ref={playbackInstance}
            source={videook}
            style={styles.video}
            className="h-48 my-2"
            resizeMode={ResizeMode.CONTAIN}
            shouldPlay
          />

          <View style={styles.uiContainer}>
            <View style={styles.rightContainer}>
              <Image
                style={styles.profilePicture}
                source={require("../../../assets/images/favicon.png")}
              />

              <TouchableOpacity
                style={styles.iconContainer}
                onPress={onLikePress}
              >
                <AntDesign
                  name={"heart"}
                  size={25}
                  color={isLiked ? "red" : "white"}
                />
                <Text style={styles.statsLabel}>222</Text>
              </TouchableOpacity>

              <View style={styles.iconContainer}>
                <FontAwesome name={"commenting"} size={25} color="white" />
                <Text style={styles.statsLabel}>2734</Text>
              </View>

              <View style={styles.iconContainer}>
                <Fontisto name={"share-a"} size={25} color="white" />
                <Text style={styles.statsLabel}>424</Text>
              </View>
            </View>

            <View style={styles.bottomContainer}>
              <View>
                <Text style={styles.handle}>@jaydeepdhrangiya</Text>
                <Text style={styles.description}>Song Name - Artist</Text>

                <View style={styles.songRow}>
                  <Entypo name={"beamed-note"} size={24} color="white" />
                  <Text style={styles.songName}>Song Name - Artist</Text>
                </View>
              </View>

              <Image
                style={styles.songImage}
                source={require("../../../assets/images/favicon.png")}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height - 130,
  },
  videPlayButton: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 100,
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  uiContainer: {
    height: "100%",
    justifyContent: "flex-end",
  },
  bottomContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  handle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
  },
  description: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "300",
    marginBottom: 10,
  },
  songRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  songName: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 5,
  },

  songImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: "#4c4c4c",
  },

  //  right container
  rightContainer: {
    alignSelf: "flex-end",
    height: 300,
    justifyContent: "space-between",
    marginRight: 5,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#fff",
  },

  iconContainer: {
    alignItems: "center",
  },
  statsLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 5,
  },
});
