import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Image, Platform, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";
import styles from "../assets/appStyles";
import logo from "../assets/logo.png";

function HomeScreen({ navigation }) {
  return (
    <View style={[styles.container, { flexDirection: "column" }]}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.instructions}>Welcome to v1.0 of ChoreHub!</Text>
      <Text style={styles.instructions}>Swipe Left to login or register</Text>
      <Text style={styles.instructions}>
        then click below to add some chores!
      </Text>
      <View style={[styles.container, { flexDirection: "column" }]}>
        <Button
          style={styles.Button}
          mode="contained"
          color="#1bb9ee"
          onPress={() => navigation.navigate("Add Chore")}
        >
          Add a Chore!
        </Button>
        <Button
          style={styles.Button}
          mode="contained"
          color="#1bb9ee"
          onPress={() => navigation.navigate("Update Chore")}
        >
          Update a Chore!
        </Button>
      </View>
    </View>
  );
}

export default HomeScreen;
