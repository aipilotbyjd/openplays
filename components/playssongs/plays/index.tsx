import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Upper from "../upper";

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
const fixHeight = windowHeight / 3;

const MusicPlays = (props: PlaysVOProps) => {
  const [post, setPost] = useState<PlaysVOProps | null>(null);
  const [upper, setUpper] = useState<{ name: string; fullname: string } | null>(
    null
  );

  // Effects
  useEffect(() => {
    if (props.item) {
      setPost(props);
      // Create a new object with 'name' and 'fullname' properties from props.item
      const { name, fullname } = props.item;
      setUpper({ name, fullname });
    }
  }, [props]);

  return (
    <View>
      <ImageBackground
        style={styles.image}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT99TYyxY9BY6UD5plN1vhRyVGJJrEnq5rou2_qh7Nr1TXpd3ZX3DeMGaT0QE3OxVQaxPE&usqp=CAU",
        }}
      >
        <View>
          <Upper upper={upper} />
        </View>
        <View></View>
      </ImageBackground>
    </View>
  );
};

export default MusicPlays;

const styles = StyleSheet.create({
  image: {
    width: windowWidth,
    height: windowHeight,
    opacity: 0.8,
  },
  text: {
    fontSize: 16,
  },
});
