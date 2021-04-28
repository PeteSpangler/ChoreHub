import React, { useState, useEffect } from "react";
import styles from "../assets/appStyles";
import client from "../components/client";
import styles from "../assets/appStyles";
import ChoreCard from "../components/choreCard";
import { SafeAreaView, View, FlatList } from "react-native";

const ChoreView = ({ navigation }) => {
  const [data, setData] = useState([]);
  const getChore = async () => {
    console.log(client);
    const response = await client.get("/api/v1/chores");
    setData(response.data);
  };

  useEffect(() => {
    getChore();
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
                  navigation.navigate("Detail", {
                    objurl: item.absolute_url,
                    hey: "Best Chore",
                  });
                }}
              >
                <ChoreCard
                  owner={item.owner}
                  task={item.task}
                  house={item.house}
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

export default ChoreView;
