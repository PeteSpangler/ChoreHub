import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  NativeModules,
  Text,
  Alert,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Button } from "react-native-paper";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Formik } from "formik";
import ChoreCard from "../components/choreCard";
import styles from "../assets/appStyles";
import client from "../components/client";

const ChoreList = ({ navigation }) => {
  const [data, setData] = useState([]);
  const getChoreList = async () => {
    console.log(client);
    const response = await client.get("api/v1/chores/");
    setData(response.data);
  };

  useEffect(() => {
    getChoreList();
  }, []);

  return (
    <SafeAreaView>
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
                  owner={item.owner}
                  task={item.task}
                  priority={item.priority}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChoreList;
