import React from "react";
import { Text, View, SafeAreaView, NativeModules } from "react-native";
import client from "../components/client";
import styles from "../assets/appStyles";
import { Formik } from "formik";
import { Button, TextInput } from "react-native-paper";

const LoginForm = () => {
  const handleSubmit = async (values) => {
    const data = new FormData();
    data.append("username", values.username);
    data.append("password", values.password);
    try {
      const response = await client.post("api-token-auth/", data);
      console.log(response.data.token);
      alert("Success!", "Thank you! ", [
        {
          text: "Go to main screen",
          onPress: () => NativeModules.DevSettings.reload(),
        },
      ]);
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
