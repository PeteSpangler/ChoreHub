import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import styles from "../assets/appStyles";
import client from "../components/client";

const ChoreList = ({ navigation }) => {
  const [data, setData] = useState([]);

  const getChoreList = async () => {
    const response = await client.get("/api/v1/");
    setData(response.data);
  };

  useEffect(() => {
    getChoreList();
  }, []);

  const DeleteChore = async (item) => {
    try {
      const res = await client.delete(item.delete);
      console.log(res);
      if (!res.ok) {
        setDetail(res.data);
      }
    } catch (error) {
      console.log(error.config);
    }
  };

  const postedAlert = (item) => {
    alert("Are you sure you want to delete this?", [
      {
        text: "DELETE",
        onPress: { DeleteChore },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View>
              <Card>
                <Card.Cover source={{ uri: item.ch_image }} />
                <Card.Content>
                  <Title>Owner: {item.owner}</Title>
                  <Paragraph>{item.task}</Paragraph>
                  <Paragraph>Priority: {item.priority}</Paragraph>
                </Card.Content>
                <Card.Actions>
                  <Button
                    onPress={() => {
                      navigation.navigate("Details", {
                        objurl: item.absolute_url,
                      });
                    }}
                  >
                    Update
                  </Button>
                  <Button onPress={postedAlert}>Delete</Button>
                </Card.Actions>
              </Card>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ChoreList;
