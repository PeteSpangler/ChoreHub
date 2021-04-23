import React from "react";
import { View, Text } from "react-native";
import styles from "../assets/appStyles";

const choreCard = ({ owner, task, priority }) => {
  return (
    <View style={styles.choreContainer}>
      <View style={styles.cardInner}>
        <Text style={styles.cardTitle}>{owner}</Text>
        <Text style={styles.cardTitle}>{task}</Text>
        <Text style={styles.cardTitle}>{priority}</Text>
      </View>
    </View>
  );
};

export default choreCard;
