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
      <Button
        color="#841584"
        title="You need to login before you assign any chores"
        onPress={() => navigation.navigate("Login")}
      />
      <Button
        color="#f194ff"
        title="Register an account!"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
}

export default HomeScreen;
