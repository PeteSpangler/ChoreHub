import * as React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";

export default function AppHeader_LoginReg({ navigation }) {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content title="ChoreHub" />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 15,
  },
});
