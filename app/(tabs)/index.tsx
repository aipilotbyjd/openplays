import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import StoryList from "../../components/stories/storylist";
import SliderList from "../../components/slider/sliderlist";

export default function TabOneScreen() {
  return (
    <View className="flex" style={{ backgroundColor: "#222222" }}>
      <StoryList />
      <SliderList />
    </View>
  );
}
