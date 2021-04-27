import * as React from "react";
import { Appbar } from "react-native-paper";
import { Platform, StyleSheet } from "react-native";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

export default function AppHeader() {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content title="ChoreHub" />
      <Appbar.Action
        icon={MORE_ICON}
        onPress={() => {
          alert(
            "This will say the current users name soon, instead of a crappy button that doesnt work!"
          );
        }}
      />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#511F96",
    paddingTop: 15,
  },
});
