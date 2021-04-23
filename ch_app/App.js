import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/homeScreen";
import LoginForm from "./components/loginForm";
import RegForm from "./components/regForm";
import AddChore from "./screens/addChores";
import ChoreList from "./screens/listChores";
import AppHeader from "./components/appHeader";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

ThemChores = () => (
  <Stack.Navigator
    screenOptions={{
      header: (props) => <AppHeader {...props} />,
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Add Chore" component={AddChore} />
    <Stack.Screen name="Chores List" component={ChoreList} />
  </Stack.Navigator>
);

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator drawerPosition="right">
          <Drawer.Screen name="Home" component={ThemChores} />
          <Drawer.Screen name="Login" component={LoginForm} />
          <Drawer.Screen name="Register" component={RegForm} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
export default App;
