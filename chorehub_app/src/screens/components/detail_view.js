import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import client from "./../../api/client";
import axios from "axios";

const DetailView = ({ route }) => {
  const [detail, setDetail] = useState("");
  const { objurl } = route.params;

  const getDetail = async (url) => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/chores");
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
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.title}>
              <Text style={styles.title}>Owner: {detail.owner}</Text>
              <Text style={styles.details}>Task: {detail.task}</Text>
              <Text style={styles.details}>Due By: {detail.dueDate}</Text>
            </View>
          );
        }}
      />
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
