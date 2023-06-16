import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const MusicPlayer = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const everyviewheight = windowHeight / 3;

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: everyviewheight,
          backgroundColor: "#67B26F",
          paddingHorizontal: windowWidth * 0.02,
          paddingTop: 20,
          borderBottomRightRadius: 30,
          borderBottomLeftRadius: 30,
          zIndex: 2,
          elevation: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <FontAwesome
            name="chevron-left"
            size={windowWidth * 0.05}
            color="white"
          />
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 14, fontWeight: "bold" }}>
          Comrade Anthem (From "Dear Comrade")
        </Text>
        <TouchableOpacity style={{ marginRight: 10 }}>
          <Ionicons
            name="ellipsis-vertical"
            size={windowWidth * 0.05}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
          height: everyviewheight,
        }}
      >
        <ImageBackground
          source={require("../../../assets/images/song.jpg")}
          resizeMode="cover"
          style={{
            width: windowWidth - 40,
            height: "100%",
            borderRadius: 20,
            justifyContent: "flex-end",
            alignItems: "center",
            overflow: "hidden",
            shadowColor: "black",
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.3,
            shadowRadius: 10,
            elevation: 10,
          }}
        >
          <View style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", padding: 10 }}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
              Song Title
            </Text>
            <Text style={{ color: "white", fontSize: 16 }}>Artist Name</Text>
          </View>
        </ImageBackground>
      </View>
      <LinearGradient
        colors={["#3CA55C", "#B5AC49"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: everyviewheight,
          paddingTop: 20,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Comrade Anthem
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <TouchableOpacity>
            <AntDesign name="hearto" size={windowWidth * 0.06} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome
              name="comment-o"
              size={windowWidth * 0.06}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign
              name="sharealt"
              size={windowWidth * 0.06}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign
              name="download"
              size={windowWidth * 0.06}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default MusicPlayer;
