import React, { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import client from "../api/client";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import styles from "../assets/appStyles";

const ChoreDelete = ({ route, navigation }) => {
  const { objurl } = route.params;

  const [detail, setDetail] = useState("");

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

  const deleteAlert = () => {
    Alert.alert("Got it done?", "Chore has been deleted! ", [
      {
        text: "Chore Deleted!",
        onPress: () => navigation.popToTop(),
      },
    ]);
  };

  const handleDelete = async () => {
    try {
      const res = await client.delete(objurl + "delete/");
      if (!res.ok) {
        setDetail(res.data);
        deleteAlert(res);
      }
    } catch (error) {
      console.log(error.config);
    }
  };

  return (
    <View style={styles.container}>
      <Card>
        <Card.Cover source={{ uri: detail.ch_image }} />
        <Card.Content>
          <Title>Owner: {detail.owner}</Title>
          <Paragraph>{detail.task}</Paragraph>
          <Paragraph>Priority: {detail.priority}</Paragraph>
        </Card.Content>
      </Card>
      <Button
        icon="trash-can-outline"
        style={styles.addButton}
        onPress={handleDelete}
      >
        Confirm Delete
      </Button>
    </View>
  );
};

export default ChoreDelete;
