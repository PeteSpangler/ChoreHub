import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  Button,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/homeScreen";
import LoginForm from "./components/loginForm";
import RegForm from "./components/regForm";
import AddChore from "./screens/addChores";
import UpdateChore from "./screens/updateChore";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

ThemChores = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Add Chore" component={AddChore} />
    <Stack.Screen name="Update Chore" component={UpdateChore} />
  </Stack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" children={this.ThemChores} />
        <Drawer.Screen name="Login" component={LoginForm} />
        <Drawer.Screen name="Register" component={RegForm} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;
