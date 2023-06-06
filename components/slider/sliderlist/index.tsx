import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import SliderSingle from "../slidersingle";

const SliderList = () => {
  const items = [
    {
      id: 1,
      image: "https://img.youtube.com/vi/eBMxIV-0rvE/mqdefault.jpg",
      title:
        "How did British Empire take over India? What about the other countries",
      description:
        "This is a great guide to creating a new Indian film film series that will be made available to consumers everywhere in the world and will be made available to consumers in the world of Indian film production and film production that",
    },
    {
      id: 2,
      image: "https://img.youtube.com/vi/eBMxIV-0rvE/mqdefault.jpg",
      title:
        "How did British Empire take over India? What about the other countries",
      description:
        "This is a great guide to creating a new Indian film film series that will be made available to consumers everywhere in the world and will be made available to consumers in the world of Indian film production and film production that",
    },
    {
      id: 3,
      image: "https://img.youtube.com/vi/eBMxIV-0rvE/mqdefault.jpg",
      title:
        "How did British Empire take over India? What about the other countries",
      description:
        "This is a great guide to creating a new Indian film film series that will be made available to consumers everywhere in the world and will be made available to consumers in the world of Indian film production and film production that",
    },
  ];
  return (
    <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
      {items.map((item) => (
        <SliderSingle
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </ScrollView>
  );
};

export default SliderList;
