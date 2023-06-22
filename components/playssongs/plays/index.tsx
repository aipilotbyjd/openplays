import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Upper from "../upper";
import Bottom from "../bottom";
import AudioPlay from "../audio";
import { ResizeMode, Video } from "expo-av";

interface Song {
  id: string;
  name: string;
  fullname: string;
  artist: string;
  duration: string;
  genre: string;
}

interface PlaysVOProps {
  item: Song;
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fixHeight = windowHeight / 3; // Adjust the height values as needed
const upperHeight = windowHeight / 4.5;

const MusicPlays = (props: PlaysVOProps) => {
  const [post, setPost] = useState<PlaysVOProps | null>(null);
  const [upper, setUpper] = useState<{ name: string; fullname: string } | null>(
    null
  );
  const [audiopost, setAudioPost] = useState<{
    name: string;
    artist: string;
  } | null>(null);
  const [isAudio, setIsAudio] = useState(true);

  // Effects
  useEffect(() => {
    if (props.item) {
      setPost(props);
      // Create a new object with 'name' and 'fullname' properties from props.item
      const { name, fullname, artist } = props.item;
      setUpper({ name, fullname });
      setAudioPost({ name, artist });
    }
  }, [props]);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT99TYyxY9BY6UD5plN1vhRyVGJJrEnq5rou2_qh7Nr1TXpd3ZX3DeMGaT0QE3OxVQaxPE&usqp=CAU",
        }}
        className="flex-1"
      >
        <View style={styles.upperContainer}>
          <Upper upper={upper} />
        </View>
        <View style={styles.bottomContainer}>
          {isAudio ? (
            <Bottom />
          ) : (
            <Video
              source={{
                uri: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
              }} // Replace with your video URL
              resizeMode={ResizeMode.CONTAIN}
              shouldPlay
              isLooping
              style={{
                width: "98%",
                height: "100%",
                alignSelf: "center",
              }}
            />
          )}
        </View>
        <View style={styles.emptyContainer}>
          <AudioPlay audiopost={audiopost} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default MusicPlays;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: windowWidth,
    height: windowHeight,
    opacity: 0.95,
  },
  upperContainer: {
    height: upperHeight, // Set a smaller height for the upperContainer
  },
  bottomContainer: {
    flex: 1, // Use flex: 1 to make bottomContainer take remaining height
    backgroundColor: "#f8f4a6",
  },
  emptyContainer: {
    flex: 1, // Use flex: 1 to make emptyContainer take remaining height
  },
});
