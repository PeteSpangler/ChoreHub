import React, { useContext } from "react";
import { Appbar } from "react-native-paper";
import { UserContext } from "./userContext";
import styles from "../assets/appStyles";

export default function AppHeader() {
  const { user } = useContext(UserContext);
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content title="ChoreHub" />
      <Appbar.Content title={user} />
    </Appbar.Header>
  );
}
