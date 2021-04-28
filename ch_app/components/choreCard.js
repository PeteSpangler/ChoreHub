import React from "react";
import { Text } from "react-native";
import { Button, Card } from "react-native-paper";
import styles from "../assets/appStyles";

const ChoreCard = ({ owner, house, task, priority }) => {
  return (
    <Card style={styles.choreContainer}>
      <Card.Content style={styles.cardInner}>
        <Text style={styles.cardTitle}>{owner}</Text>
        <Text style={styles.cardTitle}>{house}</Text>
        <Text style={styles.cardTitle}>{task}</Text>
        <Text style={styles.cardTitle}>{priority}</Text>
      </Card.Content>
      <Card.Actions>
        <Button>Delete</Button>
        <Button>Add </Button>
      </Card.Actions>
    </Card>
  );
};

export default ChoreCard;
