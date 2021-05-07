import React from "react";
import { Text, View } from "react-native";

import styles from "../assets/appStyles";

const Stats = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        This is where you would see the total chores completed by you and your
        household!
      </Text>
    </View>
  );
};

export default Stats;
