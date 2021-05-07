import React, { useState, useContext } from "react";
import { Alert, Text, View, SafeAreaView, NativeModules } from "react-native";
import { UserContext, AuthContext } from "../components/userContext";
import * as SecureStore from "expo-secure-store";
import client from "../api/client";
import styles from "../assets/appStyles";
import { Formik } from "formik";
import { Button, TextInput } from "react-native-paper";

const LoginForm = ({ navigation }) => {
  const { user, setUser } = useContext(UserContext);
  const { userToken, setUserToken } = useContext(AuthContext);

  const postedAlert = () => {
    Alert.alert("Success!", "Thank you! ", [
      {
        text: "Time to do some Chores!!",
        onPress: () => navigation.pop(),
      },
    ]);
  };

  const handleSubmit = async (values) => {
    const data = new FormData();
    data.append("username", values.username);
    data.append("password", values.password);
    try {
      const response = await client.post("api-token-auth/", data);
      setUserToken(response.data.token);
      setUser(values.username);
      postedAlert(response);
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
        enableReinitialize={true}
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
                secureTextEntry={true}
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
