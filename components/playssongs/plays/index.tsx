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
          <Bottom />
        </View>
        <View style={styles.emptyContainer}>
          
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
    opacity: 0.8,
  },
  upperContainer: {
    height: upperHeight, // Set a smaller height for the upperContainer
  },
  bottomContainer: {
    flex: 1, // Use flex: 1 to make bottomContainer take remaining height
    backgroundColor: "black",
  },
  emptyContainer: {
    flex: 1, // Use flex: 1 to make emptyContainer take remaining height
  },
});
