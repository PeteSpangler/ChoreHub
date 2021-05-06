import React, { useContext } from "react";
import { Appbar } from "react-native-paper";
import { Platform } from "react-native";
import styles from "../assets/appStyles";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

export default function AppHeader() {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content title="ChoreHub" />
    </Appbar.Header>
  );
}
