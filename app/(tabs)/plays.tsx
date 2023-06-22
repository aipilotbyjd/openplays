import React, { useRef } from "react";
import { View, Dimensions, FlatList } from "react-native";
import MusicPlays from "../../components/playssongs/plays";
import { Stack } from "expo-router";

const backgroundColor = "#806A56";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

interface Song {
  id: string;
  name: string;
  fullname: string;
  artist: string;
  duration: string;
  genre: string;
}

const Plays = () => {
  const flatListRef = useRef<FlatList<Song>>(null);

  const songs: Song[] = [
    {
      id: "1",
      name: "Dear Comrade",
      fullname:
        "Next.js Full Course for Beginners | Nextjs 13 Tutorial | 7 Hours",
      artist: "Rajbha Gadhavi",
      duration: "3:45",
      genre: "Pop",
      // Add more properties as needed
    },
    {
      id: "2",
      name: "Song 2",
      fullname: "Song 2",
      artist: "Artist 2",
      duration: "4:20",
      genre: "Rock",
      // Add more properties as needed
    },
    {
      id: "3",
      name: "Song 3",
      fullname: "Song 3",
      artist: "Artist 3",
      duration: "2:55",
      genre: "Hip Hop",
      // Add more properties as needed
    },
    {
      id: "4",
      name: "Song 4",
      fullname: "Song 4",
      artist: "Artist 4",
      duration: "3:30",
      genre: "Electronic",
      // Add more properties as needed
    },
    {
      id: "5",
      name: "Song 5",
      fullname: "Song 5",
      artist: "Artist 5",
      duration: "5:10",
      genre: "R&B",
      // Add more properties as needed
    },
    // Add more song objects as needed
  ];

  const renderItem = ({ item }: { item: Song }) => {
    return <MusicPlays item={item} />;
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <FlatList
        ref={flatListRef}
        data={songs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        snapToInterval={height}
        decelerationRate="fast"
        pagingEnabled={true}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default Plays;
