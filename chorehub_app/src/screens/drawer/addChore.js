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
import PhotoPicker from "../components/shared/photo.js";
import DateTimePickerModal from "react-native-modal-datetime-picker";

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
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleSubmit = async (values) => {
    const data = new FormData();
    data.append("owner", values.owner);
    data.append("task", values.task);
    data.append("dueDate", values.dueDate);
    data.append("seller", values.seller);
    data.append("image", {
      uri: photo,
      name: "filename.jpg",
      type: "image/jpg",
    });

    try {
      const response = await client.post("api/create/chores", data);
      postedAlert(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{
        owner: "",
        task: "",
        dueDate: "",
        seller: "",
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
            <DateTimePickerModal
              mode="dueDate"
              display="Chore Deadline?"
              onConfirm={handleChange("dueDate")}
              onCancel={hideDatePicker}
            />
            <Text style={styles.error}>{errors.dueDate}</Text>
            <TextInput
              style={styles.textBox}
              value={values.seller}
              placeholder="Who is assigning this Chore?"
              onChangeText={handleChange("seller")}
            />
            <Text style={styles.error}>{errors.seller}</Text>
            <Button
              style={styles.addButton}
              onPress={handleSubmit}
              title="Submit"
            />
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
};
export default AddChore;
