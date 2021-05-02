import * as React from "react";
import { Appbar } from "react-native-paper";
import { Platform, StyleSheet } from "react-native";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

export default function AppHeader() {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content title="ChoreHub" />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#511F96",
    paddingTop: 15,
  },
});
