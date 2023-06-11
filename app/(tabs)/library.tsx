import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import History from "../../components/history";
import DisplayPlaylist from "../../components/playlistli/displayplaylist";

const Library = () => {
  const categories = ["બધા", "History", "Playists", "Artists"];
  const [selectedCategory, setSelectedCategory] = useState("બધા");

  const handleCategorySelection = (category: any) => {
    setSelectedCategory(category);
    // Perform any additional actions based on the selected category
  };

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ backgroundColor: "#222222" }}
      >
        <View className="flex items-center px-2 py-2">
          <View className="flex flex-row space-x-2">
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                className={`px-2 py-1 rounded-3xl ${
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
            ))}
          </View>
        </View>
      </ScrollView>
      {selectedCategory && selectedCategory === "History" ? (
        <ScrollView>
          <History />
        </ScrollView>
      ) : (
        <ScrollView style={{ backgroundColor: "#222222" }}>
          <DisplayPlaylist />
        </ScrollView>
      )}
    </View>
  );
};

export default Library;
