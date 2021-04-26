import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { QueryClientProvider, QueryClient } from "react-query";
import HomeScreen from "./screens/homeScreen";
import AddChore from "./screens/addChores";
import ChoreList from "./screens/listChores";
import AppHeader from "./components/appHeader";
import AddHouse from "./screens/addHouse";
import HouseForm from "./screens/houseForm";

const queryClient = new QueryClient();

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home Screen"
      screenOptions={{
        header: (props) => <AppHeader {...props} />,
      }}
    >
      <HomeStack.Screen name="Home Screen" component={HomeScreen} />
      <HomeStack.Screen name="Add Chore" component={AddChore} />
      <HomeStack.Screen name="Chores List" component={ChoreList} />
    </HomeStack.Navigator>
  );
}
const Tab = createMaterialBottomTabNavigator();
const AddButton = "plus-box";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NavigationContainer>
          <AppHeader />
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Chores" component={ChoreList} />
            <Tab.Screen
              name="Add"
              component={AddChore}
              options={{ tabBarIcon: AddButton }}
            />
            <Tab.Screen name="Create House" component={HouseForm} />
            <Tab.Screen name="Join House" component={AddHouse} />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}
export default App;
