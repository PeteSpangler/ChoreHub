import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  NativeModules,
  Text,
  Alert,
  View,
} from "react-native";
import { Button } from "react-native-paper";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Formik } from "formik";
import styles from "../assets/appStyles";
import client from "../components/client";
import validationSchema from "./listChores_valid";

const ChoreList = () => {
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
    data.append("isComplete", values.isComplete);

    // route to chosen chore url, so maybe absoluteurl?
    try {
      const response = await client.put("chores/update/{data.id}", data);
      postedAlert(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Formik
        initialValues={{
          isComplete: false,
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <SafeAreaView style={styles.content}>
            <View style={[styles.updateChorepage, { flexDirection: "column" }]}>
              <BouncyCheckbox
                size={25}
                fillColor="#1bb9ee"
                unfillColor="#007BFF"
                text="Was this chore completed?"
                onPress={() => {
                  values.isComplete;
                }}
              />
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
export default ChoreList;
