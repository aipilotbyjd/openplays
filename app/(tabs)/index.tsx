import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import StoryList from "../../components/stories/storylist";

export default function TabOneScreen() {
  return (
    <View className="flex">
      <StoryList />
    </View>
  );
}
