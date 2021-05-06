import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import styles from "../assets/appStyles";
import client from "../components/client";

const ChoreList = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getChoreList = async () => {
    const response = await client.get("/api/v1/");
    setData(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getChoreList();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        onRefresh={() => getChoreList()}
        refreshing={loading}
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
                        person: item.owner,
                        action: item.task,
                        importance: item.priority,
                        isDone: item.isComplete,
                      });
                    }}
                  >
                    Update
                  </Button>
                  <Button
                    onPress={() => {
                      navigation.navigate("Delete", {
                        objurl: item.absolute_url,
                        person: item.owner,
                        action: item.task,
                        importance: item.priority,
                      });
                    }}
                  >
                    Delete
                  </Button>
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
