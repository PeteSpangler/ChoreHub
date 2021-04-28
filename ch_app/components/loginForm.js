import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import client from "./client";
import styles from "../assets/appStyles";
import { Formik } from "formik";
import { Button, TextInput } from "react-native-paper";

const LoginForm = () => {
  const handleSubmit = async (values) => {
    const data = new FormData();
    data.append("username", values.username);
    data.append("password", values.password);
    try {
      console.log(data);
      const response = await client.post(
        "http://127.0.0.1:8000/api-token-auth/",
        data
      );
      alert(response.data.token);
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
              <Text style={styles.title}>Login to your account</Text>
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
                mode="contained"
                color="#1bb9ee"
                onPress={handleSubmit}
                title="Submit"
              >
                Login and Get it Done!
              </Button>
            </View>
          </SafeAreaView>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;
