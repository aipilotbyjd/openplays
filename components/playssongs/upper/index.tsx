import React, { useEffect, useState } from "react";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fixHeight = windowHeight / 3;

const Upper = (upper: any) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const opacityValues = [
    useState(new Animated.Value(0))[0],
    useState(new Animated.Value(0))[0],
  ];

  const textLines = [
    "Hey girl, are you all right",
    "Come near me, I won't bite",
    "I find you sexy",
    "That's why I'm awake the whole night",
    // Add more lines if needed
  ];

  useEffect(() => {
    animateText();
  }, []);

  const animateText = () => {
    Animated.sequence([
      Animated.timing(opacityValues[0], {
        toValue: 1,
        duration: 1000, // Adjust the duration as needed
        useNativeDriver: true,
      }),
      Animated.delay(5000), // Adjust the delay between lines as needed
      Animated.timing(opacityValues[0], {
        toValue: 0,
        duration: 1000, // Adjust the duration as needed
        useNativeDriver: true,
      }),
      Animated.timing(opacityValues[1], {
        toValue: 1,
        duration: 1000, // Adjust the duration as needed
        useNativeDriver: true,
      }),
      Animated.delay(5000), // Adjust the delay between lines as needed
      Animated.timing(opacityValues[1], {
        toValue: 0,
        duration: 1000, // Adjust the duration as needed
        useNativeDriver: true,
      }),
    ]).start(() => {
      setCurrentLineIndex((prevIndex) => (prevIndex + 2) % textLines.length);
    });
  };

  return (
    <View>
      <LinearGradient
        colors={["#3CA55C", "#B5AC49"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0.1, 0.9]}
        className="absolute"
        style={{ width: windowWidth, height: fixHeight - 80 }}
      >
        <View className="flex flex-row items-center justify-center py-2">
          <Text
            className="text-white text-xs ml-2"
            style={{ fontFamily: "LilitaOne" }}
          >
            {upper.upper.fullname ? upper.upper.fullname : undefined}
          </Text>
        </View>

        <View className="flex flex-column items-center justify-center py-2">
          <Animated.View
            style={{
              opacity: opacityValues[0],
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
              {textLines[currentLineIndex]}
            </Text>
          </Animated.View>
          <Animated.View
            style={{
              opacity: opacityValues[1],
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
              {textLines[(currentLineIndex + 1) % textLines.length]}
            </Text>
          </Animated.View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Upper;

const styles = StyleSheet.create({});
