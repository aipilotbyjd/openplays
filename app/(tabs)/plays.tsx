import { View, Dimensions } from "react-native";
import PlaysVO from "../../components/playssongs/plays";

export default function Plays() {
  const backgroundColor = "#222222";
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <View
      style={{ backgroundColor: backgroundColor, width, height }}
      className="flex"
    >
      <PlaysVO />
    </View>
  );
}
