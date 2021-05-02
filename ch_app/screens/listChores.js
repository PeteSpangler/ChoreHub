import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import { Button } from "react-native-paper";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import ChoreCard from "../components/choreCard";
import styles from "../assets/appStyles";
import client from "../components/client";

const ChoreList = ({ navigation }) => {
  const [data, setData] = useState([]);
  const getChoreList = async () => {
    console.log(client);
    const response = await client.get("api/v1/chores/");
    console.log(response.config);
    setData(response.data);
  };

  useEffect(() => {
    getChoreList();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Details", {
                  objurl: item.absolute_url,
                });
              }}
            >
              <ChoreCard
                pic={item.ch_image}
                person={item.owner}
                action={item.task}
                importance={item.priority}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ChoreList;
