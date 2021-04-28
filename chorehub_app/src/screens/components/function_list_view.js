import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import client from "./../../api/client";
import Card from "./shared/card";
import axios from "axios";

const ListView = ({ navigation }) => {
  const [data, setData] = useState([]);

  const getList = async () => {
    console.log(client);
    const response = await axios.get("http://127.0.0.1:8000/api/chores/");
    setData(response.data);
  };

  useEffect(() => {
    getList();
  }, []);

  const mytext = "A Spang Production";
  return (
    <SafeAreaView style={styles.center}>
      <Text style={styles.baseText}>
        ChoreHub: You Probably Forgot Something
      </Text>
      <Text style={styles.newText}>{mytext}</Text>
      <Text>{data.length} Chores</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Detail", {
                  objurl: item.absolute_url,
                });
              }}
            >
              <Card
                owner={item.owner}
                task={item.task}
                dateDue={item.dueDate}
              />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    marginBottom: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#577399",
    alignItems: "center",
    justifyContent: "center",
  },
  baseText: {
    color: "navy",
    fontSize: 30,
    fontStyle: "italic",
  },
  newText: {
    color: "red",
  },
  logoImage: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: "green",
    fontSize: 20,
  },
});

export default ListView;
