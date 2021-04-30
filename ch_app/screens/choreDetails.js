import React, { useState, useEffect } from "react";
import styles from "../assets/appStyles";
import client from "../components/client";
import ChoreCard from "../components/choreCard";
import { SafeAreaView, View, FlatList, TouchableOpacity } from "react-native";

const ChoreDetail = ({ route }) => {
  const [detail, setDetail] = useState("");
  const objurl = route.params;
  console.log(objurl);
  const getDetail = async (url) => {
    try {
      const response = await client.get(url);
      if (!response.ok) {
        setDetail(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetail(objurl);
  }, []);

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

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={detail.chore_images}
        keyExtractor={(item) => item.id.toString()}
      />
      );
    </View>
  );
};

export default ChoreDetail;
