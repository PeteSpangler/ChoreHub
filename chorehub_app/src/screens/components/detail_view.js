import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import client from "./../../api/client";

const DetailView = ({ route }) => {
  const [detail, setDetail] = useState("");
  const { objurl } = route.params;

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
  return (
    <View style={styles.center}>
      <FlatList
        horizontal={true}
        data={detail.choreImage}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <Image
              style={styles.Image}
              source={{
                uri: item.image,
              }}
            />
          );
        }}
      />
      <Text style={styles.title}>Owner: {detail.owner}</Text>
      <Text style={styles.details}>Task: {detail.task}</Text>
      <Text style={styles.details}>Due By: {detail.dueDate}</Text>
      <Text style={styles.details}>Chore Seller: {detail.seller}</Text>
      <Text style={styles.details}>Date Completed: {detail.dateCompleted}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Image: {
    width: 400,
    height: 400,
    borderRadius: 20,
  },
  title: {
    fontFamily: "Roboto",
    margin: 10,
    marginBottom: 5,
    color: "red",
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  details: {
    margin: 10,
    marginBottom: 5,
    color: "black",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default DetailView;
