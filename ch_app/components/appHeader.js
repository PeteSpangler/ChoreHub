import * as React from "react";
import { Appbar } from "react-native-paper";
import { Platform, StyleSheet } from "react-native";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

export default function AppHeader({ navigation }) {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content title="ChoreHub" />
      <Appbar.Action icon={MORE_ICON} onPress={() => navigation.openDrawer()} />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 15,
  },
});
