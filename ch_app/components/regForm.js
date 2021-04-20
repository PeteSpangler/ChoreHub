import React from "react";
import { TextInput, Button, Text, View, SafeAreaView } from "react-native";
import client from "./client";
import styles from "../assets/appStyles";
import { Formik } from "formik";

const RegForm = () => {
  const handleSubmit = async (values) => {
    const data = new FormData();
    data.append("username", values.username);
    data.append("password", values.password);
    try {
      console.log(data);
      const response = await client.post("/register/", data);
      alert(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <SafeAreaView style={styles.content}>
            <View style={styles.container}>
              <Text style={styles.title}>Register an account!</Text>
              <TextInput
                style={styles.textBox}
                value={values.username}
                type="text"
                placeholder="Username"
                onChangeText={handleChange("username")}
              />
              <Text style={styles.error}>{errors.username}</Text>
              <TextInput
                style={styles.textBox}
                value={values.password}
                placeholder="Password"
                onChangeText={handleChange("password")}
              />
              <Text style={styles.error}>{errors.password}</Text>
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

export default RegForm;
