import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import styles from "../assets/appStyles";

const ChoreCard = ({ pic, person, action, importance }) => {
  return (
    <Card>
      <Card.Cover source={{ uri: pic }} />
      <Card.Content>
        <Title>{person}</Title>
        <Paragraph>{action}</Paragraph>
        <Paragraph>{importance}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default ChoreCard;
