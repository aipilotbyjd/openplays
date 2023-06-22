import { StyleSheet, Text, View } from "react-native";
import React from "react";

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

const MusicPlays = (props: PlaysVOProps) => {
  return (
    <View>
      <Text>MusicPlays</Text>
    </View>
  );
};

export default MusicPlays;

const styles = StyleSheet.create({});
