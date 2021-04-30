import React from "react";
import { Text, View } from "react-native";
import { Button, Card } from "react-native-paper";
import styles from "../assets/appStyles";

const ChoreCard = ({ owner, task, priority }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardInner}>
        <Text style={styles.cardTitle}>{owner}</Text>
        <Text style={styles.cardTitle}>{task}</Text>
        <Text style={styles.cardTitle}>{priority}</Text>
      </View>
    </View>
  );
};

export default ChoreCard;
