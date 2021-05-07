import React, { useState } from "react";
import styles from "../assets/appStyles";
import client from "../api/client";
import { Button } from "react-native-paper";
import { Alert, Image, View, SafeAreaView, TextInput } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const ChoreDetail = ({ route, navigation }) => {
  const {
    objurl,
    person,
    action,
    importance,
    isDone,
    digit,
    pic,
  } = route.params;

  const [detail, setDetail] = useState({
    owner: route.params.person,
    task: route.params.action,
    priority: route.params.importance,
    isComplete: route.params.isDone,
    num: route.params.digit,
    ch_image: route.params.pic,
  });
  const postedAlert = () => {
    Alert.alert("Got it done?", "Chore has been updated! ", [
      {
        text: "Chore Updated!",
        onPress: () => navigation.pop(),
      },
    ]);
  };

  const onChangeOwner = (value) => {
    setDetail({ ...detail, owner: value });
  };

  const onChangeTask = (value) => {
    setDetail({ ...detail, task: value });
  };

  const onChangePriority = (value) => {
    setDetail({ ...detail, priority: value });
  };

  const onChangeisComplete = (value) => {
    setDetail({ ...detail, isComplete: value });
  };

  const handleSubmit = async () => {
    const data = new FormData();
    data.append("owner", detail.owner);
    data.append("task", detail.task);
    data.append("priority", detail.priority);
    data.append("isComplete", detail.isComplete);

    try {
      const response = await client.put(objurl + "update/", data);
      if (!response.ok) {
        setDetail(response.data);
        postedAlert(response);
      }
    } catch (error) {
      console.log(error.config);
    }
  };

  return (
    <View>
      <SafeAreaView style={styles.content}>
        <View style={[styles.content, { flexDirection: "column" }]}>
          <Image style={styles.thumbnail} source={{ uri: detail.ch_image }} />
          <TextInput
            style={styles.textBox}
            placeholder={detail.owner}
            onChangeText={(value) => onChangeOwner(value)}
            value={detail.owner}
          />
          <TextInput
            style={styles.textBox}
            placeholder="What is the Chore?"
            onChangeText={(value) => onChangeTask(value)}
            value={detail.task}
          />
          <TextInput
            style={styles.textBox}
            placeholder="Importance, scale of 1 to 10?"
            onChangeText={(value) => onChangePriority(value)}
            value={String(detail.priority)}
            keyboardType="numeric"
          />
          <BouncyCheckbox
            size={25}
            fillColor="#1bb9ee"
            unfillColor="#007BFF"
            isChecked={detail.isComplete}
            text="Was this chore completed?"
            onPress={() => onChangeisComplete(!detail.isComplete)}
            value={detail.isComplete}
          />
          <Button
            style={styles.Button}
            mode="contained"
            color="#1bb9ee"
            onPress={handleSubmit}
          >
            Update!
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ChoreDetail;
