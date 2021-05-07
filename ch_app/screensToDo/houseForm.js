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
import client from "../api/client";

const HouseForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        This is where you would create or join a house!
      </Text>
    </View>
  );
};

export default HouseForm;
