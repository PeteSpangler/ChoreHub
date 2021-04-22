import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  NativeModules,
  Text,
  Alert,
  View,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Formik } from "formik";
import styles from "../assets/appStyles";
import client from "../components/client";
import validationSchema from "./addChores_valid";

const AddChore = () => {
  const postedAlert = () => {
    Alert.alert("Success!", "Thank you! ", [
      {
        text: "Go to main screen",
        onPress: () => NativeModules.DevSettings.reload(),
      },
    ]);
  };

  const handleSubmit = async (values) => {
    const data = new FormData();
    data.append("owner", values.owner);
    data.append("house", values.house);
    data.append("task", values.task);

    try {
      const response = await client.post("/chores/create", data);
      postedAlert(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Formik
        initialValues={{
          owner: "",
          house: "",
          task: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <SafeAreaView style={styles.content}>
            <View style={styles.container}>
              <TextInput
                style={styles.textBox}
                value={values.owner}
                placeholder="Who will do this Chore?"
                onChangeText={handleChange("owner")}
              />
              <Text style={styles.error}>{errors.owner}</Text>
              <TextInput
                style={styles.textBox}
                value={values.house}
                placeholder="What is the house/address?"
                onChangeText={handleChange("house")}
              />
              <Text style={styles.error}>{errors.house}</Text>
              <TextInput
                style={styles.textBox}
                value={values.task}
                placeholder="What is the Chore?"
                onChangeText={handleChange("task")}
              />
              <Text style={styles.error}>{errors.task}</Text>
              <Button
                style={styles.Button}
                mode="contained"
                color="#1bb9ee"
                onPress={handleSubmit}
              >
                Submit
              </Button>
            </View>
          </SafeAreaView>
        )}
      </Formik>
    </View>
  );
};
export default AddChore;
