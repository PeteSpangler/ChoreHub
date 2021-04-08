import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
  NativeModules,
  Text,
  Alert,
} from "react-native";
import { Formik } from "formik";
import client from "../../api/client";
import styles from "./addChore_styles";
import validationSchema from "./addChore_valid";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const AddChore = () => {
  const postedAlert = () => {
    Alert.alert("Success!", "Thank you! ", [
      {
        text: "Go to main screen",
        onPress: () => NativeModules.DevSettings.reload(),
      },
    ]);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleSubmit = async (values) => {
    const data = new FormData();
    data.append("owner", values.owner);
    data.append("task", values.task);
    data.append("dueDate", values.dueDate);

    try {
      const response = await client.post("create/chores/", data);
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
          task: "",
          dueDate: "",
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
                value={values.task}
                placeholder="What is the Chore?"
                onChangeText={handleChange("task")}
              />
              <Text style={styles.error}>{errors.task}</Text>
              <DateTimePickerModal
                mode="dueDate"
                display="Chore Deadline?"
                onConfirm={handleChange("dueDate")}
                onCancel={hideDatePicker}
              />
              <Text style={styles.error}>{errors.dueDate}</Text>
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
export default AddChore;
