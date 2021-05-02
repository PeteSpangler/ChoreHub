import React, { useState, useEffect } from "react";
import styles from "../assets/appStyles";
import client from "../components/client";
import { View, FlatList, Text, Image } from "react-native";

const ChoreDetail = ({ route }) => {
  const [detail, setDetail] = useState("");
  const objurl = route.params;

  const getDetail = async (url) => {
    try {
      const response = await client.get(url);
      console.log(url);
      if (!response.ok) {
        setDetail(response.data);
      }
    } catch (error) {
      console.log(error.config);
      console.log(error);
    }
  };
  useEffect(() => {
    getDetail(objurl);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={detail.chore_images}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <Image
              style={styles.thumbnail}
              source={{
                uri: item.image,
              }}
            />
          );
        }}
      />
      <Text style={styles.title}>Owner: {detail.owner}</Text>
      <Text style={styles.details}>Address: {detail.task}</Text>
      <Text style={styles.details}>Priority: {detail.priority}</Text>
    </View>
  );
};

export default ChoreDetail;

//   Alert.alert("Success!", "Thank you! ", [
//     {
//       text: "Go to main screen",
//       onPress: () => NativeModules.DevSettings.reload(),
//     },
//   ]);
// };
// const handleSubmit = async (values) => {
//   const data = new FormData();
//   data.append("isComplete", values.isComplete);

//   // route to chosen chore url, so maybe absoluteurl?
//   try {
//     const response = await client.put("chores/update/{data.id}", data);
//     postedAlert(response);
//   } catch (error) {
//     console.log(error);
//   }
// };
