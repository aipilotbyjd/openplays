import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fixHeight = windowHeight / 3;

const Upper = (upper: any) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const opacityValue = new Animated.Value(0);

  const textLines = [
    "Hey girl, are you all right",
    "Come near me, I won't bite",
    "I find you sexy",
    "That's why I'm awake whole night",
    // Add more lines if needed
  ];

  useEffect(() => {
    console.log(upper);
    if (currentLineIndex < textLines.length) {
      animateText();
    }
  }, [currentLineIndex]);

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

  return (
    <View>
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
            {upper.upper.fullname ? upper.upper.fullname : undefined}
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
  );
};

export default Upper;

const styles = StyleSheet.create({});
