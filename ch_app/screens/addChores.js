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
import PhotoPicker from "../components/photoPicker";

const AddChore = () => {
  const [photo, setPhoto] = useState("");
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
    data.append("task", values.task);
    data.append("priority", values.priority);
    data.append("ch_image", {
      uri: photo,
      name: "filename.jpg",
      type: "image/jpg",
    });

    try {
      const response = await client.post("api/v1/chores/create/", data);
      postedAlert(response);
    } catch (error) {
      console.log(error.config);
    }
  };

  return (
    <Formik
      initialValues={{
        owner: "",
        task: "",
        priority: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <SafeAreaView style={styles.content}>
          <ScrollView>
            <PhotoPicker photo={photo} onPressPhoto={(uri) => setPhoto(uri)} />
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
            <TextInput
              style={styles.textBox}
              value={values.priority}
              placeholder="Importance, scale of 1 to 10?"
              onChangeText={handleChange("priority")}
            />
            <Text style={styles.error}>{errors.priority}</Text>
            <Button
              style={styles.Button}
              mode="contained"
              color="#1bb9ee"
              onPress={handleSubmit}
            >
              Submit
            </Button>
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
};
export default AddChore;
