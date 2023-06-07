import { ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import StoryList from "../../components/stories/storylist";
import SliderList from "../../components/slider/sliderlist";
import Feed from "../../components/feed";
import DisplayPlaylist from "../../components/playlist/displayplaylist";

export default function TabOneScreen() {
  return (
    <ScrollView>
      <View className="flex" style={{ backgroundColor: "#222222" }}>
        <StoryList />
        <SliderList />
        <Feed />
        <DisplayPlaylist />
        <Feed />
      </View>
    </ScrollView>
  );
}
