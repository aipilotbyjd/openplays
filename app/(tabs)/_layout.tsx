import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";

import Colors from "../../constants/Colors";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { SetStateAction, useState } from "react";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const Header = () => {
  const categories = ["Home", "Trending", "Subscriptions", "Library"];
  const [selectedCategory, setSelectedCategory] = useState("Home");

  const handleCategorySelection = (category: SetStateAction<string>) => {
    setSelectedCategory(category);
    // Perform any additional actions based on the selected category
  };

  const renderCategoryButtons = () => {
    return categories.map((category, index) => (
      <TouchableOpacity
        key={index}
        className={`px-2 py-1 rounded-lg ${
          selectedCategory === category ? "bg-white" : ""
        }`}
        onPress={() => handleCategorySelection(category)}
      >
        <Text
          className={`${
            selectedCategory === category
              ? "text-black font-bold"
              : "text-white font-medium"
          }`}
        >
          {category}
        </Text>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View
        className="flex flex-row items-center justify-between px-2 py-2"
        style={{ backgroundColor: "#282828" }}
      >
        <View className="flex flex-row space-x-2">
          {renderCategoryButtons()}
        </View>
      </View>
    </ScrollView>
  );
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.dark.tint,
        tabBarStyle: {
          backgroundColor: Colors.dark.background,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-lightning-bolt"
              size={24}
              color={color}
            />
          ),
          header: Header,
        }}
      />
      <Tabs.Screen
        name="plays"
        options={{
          title: "Plays",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="music-circle"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="explore" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="music-circle"
              size={24}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
