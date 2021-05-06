import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, Text, Alert } from "react-native";
import { Button, TextInput } from "react-native-paper";
import styles from "../assets/appStyles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import client from "../components/client";

const UpdateChore = ({ route }, item) => {
  console.log(item);
  const { objurl } = route.params;

  const [owner, setOwner] = useState(item.owner);
  const [task, setTask] = useState(item.task);
  const [priority, setPriority] = useState(item.priority);
  const [checkboxState, setCheckboxState] = useState(false);

  const [detail, setDetail] = useState([]);

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

  const postedAlert = () => {
    Alert.alert("Updated?", "Thank you! ", [
      {
        text: "Back to your Chore List!",
        onPress: () => navigation.navigate("Chores"),
      },
    ]);
  };

  const handleSubmit = async (values) => {
    const data = new FormData();
    data.append("owner", owner);
    data.append("task", values);
    data.append("priority", value.priority);
    data.append("isComplete", values.isComplete);

    try {
      const response = await client.patch(detail.update, data);
      postedAlert(response);
    } catch (error) {
      console.log(error.config);
    }
  };

  return (
    <SafeAreaView style={styles.content}>
      <ScrollView>
        <TextInput
          style={styles.textBox}
          value={owner}
          placeholder="Who will do this Chore?"
          onChangeText={(value) => setOwner(value)}
        />
        <TextInput
          style={styles.textBox}
          value={task}
          placeholder="What is the Chore?"
          onChangeText={(value) => setTask(value)}
        />
        <TextInput
          style={styles.textBox}
          value={String(priority)}
          placeholder="Importance, scale of 1 to 10?"
          onChangeText={(value) => setPriority(value)}
        />
        <BouncyCheckbox
          size={25}
          fillColor="#1bb9ee"
          unfillColor="#007BFF"
          isChecked={checkboxState}
          text="Was this chore completed?"
          onPress={() => setCheckboxState(!checkboxState)}
          value={item.isComplete}
        />
        <Button
          style={styles.Button}
          mode="contained"
          color="#1bb9ee"
          onPress={handleSubmit}
        >
          Update!
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};
export default UpdateChore;
