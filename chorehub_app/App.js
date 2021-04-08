import React from "react";
import { StyleSheet, Text, SafeAreaView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListView from "./src/screens/components/function_list_view";
import DetailView from "./src/screens/components/detail_view";
import AddChore from "./src/screens/drawer/addChore.js";
import RegForm from "./src/screens/drawer/regForm.js";
import LoginForm from "./src/screens/drawer/loginForm.js";
import TabOne from "./src/screens/tabs/tab1.js";
import TabTwo from "./src/screens/tabs/tab2.js";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

renderTabComponents = () => (
  <Tab.Navigator>
    <Tab.Screen name="Tab 1" component={TabOne} />
    <Tab.Screen name="Tab 2" component={TabTwo} />
  </Tab.Navigator>
);

renderScreenComponents = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={ListView} />
    <Stack.Screen name="Detail" component={DetailView} />
    <Stack.Screen name="Tabs" children={this.renderTabComponents} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#92A8D1",
    alignItems: "center",
    justifyContent: "center",
  },
  baseText: {
    color: "#0f1e90",
    fontSize: 30,
    fontStyle: "normal",
  },
  newText: {
    color: "red",
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" children={this.renderScreenComponents} />
        <Drawer.Screen name="Add Chore" component={AddChore} />
        <Drawer.Screen name="Registration" component={RegForm} />
        <Drawer.Screen name="Login" component={LoginForm} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
