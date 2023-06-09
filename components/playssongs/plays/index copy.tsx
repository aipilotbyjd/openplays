import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Animated,
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
import {
  Audio,
  InterruptionModeIOS,
  InterruptionModeAndroid,
  Video,
  ResizeMode,
} from "expo-av";
import Slider from "@react-native-community/slider";

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

const MusicPlayer = (props: PlaysVOProps) => {
  // State variables
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const opacityValue = new Animated.Value(0);
  const [post, setPost] = useState<PlaysVOProps | null>(null);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isAudio, setIsAudio] = useState(true);
  const [sliderValue, setSliderValue] = useState(0);
  const [duration, setDuration] = useState(0);

  // Effects
  useEffect(() => {
    if (props) {
      setPost(() => props);
    }
  }, [props]);

  useEffect(() => {
    if (currentLineIndex < textLines.length) {
      animateText();
    }
  }, [currentLineIndex]);

  useEffect(() => {
    let isMounted = true;

    const updateAudio = (playbackStatus: any) => {
      if (playbackStatus.isLoaded && playbackStatus.isPlaying) {
        const position = playbackStatus.positionMillis;
        const duration = playbackStatus.durationMillis;
        console.log(position + duration);
        if (isMounted) {
          setSliderValue(position);
          setDuration(duration);
        }
      }
    };

    if (sound) {
      sound.setOnPlaybackStatusUpdate(updateAudio);
    }

    return () => {
      isMounted = false;

      if (sound) {
        console.log("Unloading Sound");
        sound.unloadAsync();
      }
    };
  }, [sound]);

  useEffect(() => {
    if (sound) {
      sound.setOnPlaybackStatusUpdate((playbackStatus: any) => {
        if (playbackStatus.didJustFinish) {
          sound.replayAsync();
        }
      });
    }
  }, [sound]);
  const textLines = [
    "Hey girl, are you all right",
    "Come near me, I won't bite",
    "I find you sexy",
    "That's why I'm awake whole night",
    // Add more lines if needed
  ];

  const handleSliderValueChange = async (value: number) => {
    setSliderValue(value);

    if (sound) {
      const status = await sound.getStatusAsync();

      if (!status.isLoaded) {
        // Handle the case where the audio status is not loaded
        return;
      }

      const duration: any = status.durationMillis;
      const position = value * duration;
      await sound.setPositionAsync(position);

      // Update the playback status based on the new position
      const updatedStatus = await sound.getStatusAsync();
      if (updatedStatus && updatedStatus.isLoaded) {
        setIsPlaying(updatedStatus.isPlaying);
      }
    }
  };

  const animateText = () => {
    Animated.sequence([
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 500, // Adjust the duration as needed
        useNativeDriver: true,
      }),
      Animated.delay(3000), // Adjust the delay between lines as needed
      Animated.timing(opacityValue, {
        toValue: 0,
        duration: 500, // Adjust the duration as needed
        useNativeDriver: true,
      }),
    ]).start(() => {
      setCurrentLineIndex((prevIndex) => prevIndex + 1);
    });
  };

  const handleTogglePlay = async () => {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: true,
        interruptionModeIOS: InterruptionModeIOS.DuckOthers,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
        playThroughEarpieceAndroid: false,
      });

      if (sound) {
        if (isPlaying) {
          await sound.pauseAsync();
        } else {
          await sound.playAsync();
        }
        setIsPlaying((prevIsPlaying) => !prevIsPlaying);
      } else {
        const { sound: audioSound } = await Audio.Sound.createAsync(
          { uri: "https://domainback.000webhostapp.com/thalapathy.mp3" },
          { shouldPlay: true }
        );
        setSound(audioSound);
        setIsPlaying(true);
      }
    } catch (error) {
      console.log("Error handling audio:", error);
    }
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
    <ImageBackground
      source={{
        uri: "https://w0.peakpx.com/wallpaper/109/210/HD-wallpaper-abstract-background-colors-color-mix.jpg",
      }}
      resizeMode="cover"
      style={{ width: "100%", height: windowHeight - 43 , opacity: 0.55 }}
    >
      <View
        style={{ width: windowWidth, height: windowHeight }}
        className="flex"
      >
        <View className="flex pb-56">
          <View className="w-full h-[30%]">
            <LinearGradient
              colors={["#3CA55C", "#B5AC49"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              locations={[0.1, 0.9]}
              className="absolute"
              style={{ width: windowWidth, height: fixHeight }}
            >
              <View className="flex flex-row items-center justify-center py-2">
                <Text
                  className="text-white text-xs ml-2"
                  style={{ fontFamily: "LilitaOne" }}
                >
                  {post ? post.item.fullname : undefined}
                </Text>
              </View>

              <View className="flex flex-row items-center justify-center py-2">
                {textLines.map((line, index) => (
                  <Animated.View
                    key={index}
                    style={{
                      opacity: opacityValue,
                      marginBottom: 8,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 14,
                        fontFamily: "LilitaOne",
                      }}
                    >
                      {index === currentLineIndex ? line : ""}
                    </Text>
                  </Animated.View>
                ))}
              </View>
            </LinearGradient>
          </View>
          <View className="w-full h-[50%]">
            {isAudio ? (
              <ImageBackground
                source={require("../../../assets/images/song.jpg")}
                resizeMode="cover"
                style={{ width: "100%", opacity: 1 }}
                className="h-[120%] pt-10"
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
          <View className="w-full h-[20%]">
            <LinearGradient
              colors={["#3CA55C", "#B5AC49", "#46FFF9"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              locations={[0, 1, 0]}
              className="absolute flex-row items-center px-4 top-10 pb-24"
              style={{ width: windowWidth, height: fixHeight }}
            >
              <View className="flex-1">
                <View className="flex">
                  <Text
                    className="text-white text-lg"
                    style={{ fontFamily: "LilitaOne" }}
                  >
                    {post ? post.item.name : "unknown name"}
                  </Text>
                </View>
                <View className="flex flex-row space-x-2 items-center py-2">
                  <Text
                    className="text-white text-xs"
                    style={{ fontFamily: "LilitaOne" }}
                  >
                    {post ? post.item.artist : "unknown artist"}
                  </Text>
                  <TouchableOpacity
                    onPress={handleToggleFollow}
                    className="flex border border-white rounded-3xl"
                  >
                    <Text
                      className="text-white text-[10px] px-2 text-center"
                      style={{ fontFamily: "LilitaOne" }}
                    >
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
                        <MaterialIcons
                          name="repeat-one"
                          size={24}
                          color="white"
                        />
                      ) : (
                        <MaterialIcons name="repeat" size={24} color="white" />
                      )}
                    </TouchableOpacity>
                    <Entypo
                      name="dots-three-vertical"
                      size={24}
                      color="white"
                    />
                  </View>
                </View>
                <View className="flex flex-row items-center px-1 mb-[-60]">
                  <View className="flex w-1/10">
                    <TouchableOpacity onPress={handleTogglePlay}>
                      {isPlaying ? (
                        <FontAwesome5 name="pause" size={24} color="white" />
                      ) : (
                        <FontAwesome5 name="play" size={24} color="white" />
                      )}
                    </TouchableOpacity>
                  </View>
                  <View className="flex w-9/10">
                    <Slider
                      style={{
                        width: windowWidth * 0.86,
                        height: windowHeight * 0.06,
                      }}
                      minimumValue={0}
                      maximumValue={duration}
                      minimumTrackTintColor="#fff8dc"
                      maximumTrackTintColor="#f8f8ff"
                      onValueChange={handleSliderValueChange}
                      value={sliderValue}
                    />
                  </View>
                </View>
              </View>
            </LinearGradient>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MusicPlayer;
