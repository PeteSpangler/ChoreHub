import React from "react";
import {
  TextInput,
  Button,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Formik } from "formik";
import client from "../../api/client";
import validationSchema from "./loginForm_valid";

const RegForm = () => {
  const handleSubmit = async (values) => {
    const data = new FormData();
    data.append("username", values.username);
    data.append("password", values.password);
    try {
      console.log(data);
      const response = await client.post("/register/", data);
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
        validationSchema={validationSchema}
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

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 18,
    marginBottom: 7,
    fontWeight: "600",
    paddingLeft: 20,
  },
  textBox: {
    borderColor: "#CCCCCC",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  content: {
    padding: 20,
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
  },
  addButton: {
    borderWidth: 1,
    borderColor: "#007BFF",
    backgroundColor: "#007BFF",
    padding: 15,
  },
  container: {
    paddingTop: 200,
  },
  title: {
    fontSize: 30,
    color: "black",
    textAlign: "center",
    paddingBottom: 50,
  },
});

export default RegForm;
