import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  Button,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styles from "../assets/appStyles";
import logo from "../assets/logo.png";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.instructions}>Welcome to v1.0 of ChoreHub!</Text>
      <Text style={styles.instructions}>Swipe Left to login or register</Text>
      <Text style={styles.instructions}>
        then click below to add some chores!
      </Text>
      <Button
        title="Add a Chore!"
        onPress={() => navigation.navigate("Add Chore")}
      />
      <Button
        title="Update a Chore!"
        onPress={() => navigation.navigate("Update Chore")}
      />
    </View>
  );
}

export default HomeScreen;
