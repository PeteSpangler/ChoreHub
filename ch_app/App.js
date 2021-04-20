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

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

LoginOrRegister = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginForm} />
    <Stack.Screen name="Register" component={RegForm} />
  </Stack.Navigator>
);

ThemChores = () => (
  <Stack.Navigator>
    <Stack.Screen name="AddChore" component={AddChore} />
    <Stack.Screen name="UpdateChore" component={UpdateChore} />
    <Stack.Screen name="DeleteChore" component={DeleteChore} />
  </Stack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Login" component={LoginForm} />
        <Drawer.Screen name="Register" component={RegForm} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;
