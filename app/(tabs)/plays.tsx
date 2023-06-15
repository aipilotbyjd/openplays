import { Text, View } from "../../components/Themed";
import PlaysVO from "../../components/playssongs/plays";

export default function Plays() {
  const backgroundColor = "#222222";
  return (
    <View style={{ backgroundColor: backgroundColor }} className="flex">
      <PlaysVO />
    </View>
  );
}
