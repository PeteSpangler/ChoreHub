import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
  NativeModules,
  Text,
  Alert,
  View,
} from "react-native";
import { Formik } from "formik";
import styles from "../assets/appStyles";
import client from "../components/client";
import validationSchema from "./updateChores_valid";

const UpdateChore = () => {
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
      const response = await client.patch("/chores/{chore.id}", data);
      postedAlert(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Formik
        initialValues={{
          isComplete: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <SafeAreaView style={styles.content}>
            <View style={styles.container}>
              {/* add checkbox thing */}
              <Button
                style={styles.addButton}
                onPress={handleSubmit}
                title="Submit"
              />
            </View>
          </SafeAreaView>
        )}
      </Formik>
    </View>
  );
};
export default UpdateChore;
