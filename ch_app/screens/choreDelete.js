import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import client from "../components/client";
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
    </View>
  );
};

export default ChoreDelete;
