import React from "react";
import { Alert, Text, View, SafeAreaView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import client from "../api/client";
import styles from "../assets/appStyles";
import { Formik } from "formik";

const RegForm = ({ navigation }) => {
  const postedAlert = () => {
    Alert.alert("Success!", "Thank you! ", [
      {
        text: "Now go Login!",
        onPress: () => navigation.popToTop(),
      },
    ]);
  };

  const handleSubmit = async (values) => {
    const data = new FormData();
    data.append("username", values.username);
    data.append("password", values.password);
    try {
      const response = await client.post("register/", data);
      postedAlert(response);
    } catch (error) {
      alert("User already exists or you made a mistake? Please try again!");
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
                secureTextEntry={true}
                onChangeText={handleChange("password")}
              />
              <Text style={styles.error}>{errors.password}</Text>
              <Button
                style={styles.addButton}
                mode="contained"
                color="#1bb9ee"
                onPress={handleSubmit}
              >
                Register and Get It Done!
              </Button>
            </View>
          </SafeAreaView>
        )}
      </Formik>
    </View>
  );
};

export default RegForm;
