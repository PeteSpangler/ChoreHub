import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { QueryClientProvider, QueryClient } from "react-query";
import HomeScreen from "./screens/homeScreen";
import RegForm from "./components/regForm";
import LoginForm from "./components/loginForm";
import AddChore from "./screens/addChores";
import ChoreList from "./screens/listChores";
import ChoreView from "./screens/viewChores";
import AppHeader from "./components/appHeader";
import ChoreStats from "./screens/choreStats";
import HouseForm from "./screens/houseForm";

const queryClient = new QueryClient();

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        header: (props) => <AppHeader {...props} />,
      }}
    >
      <HomeStack.Screen name="Home Screen" component={HomeScreen} />
      <HomeStack.Screen name="Login" component={LoginForm} />
      <HomeStack.Screen name="Register" component={RegForm} />
      <HomeStack.Screen name="Details" component={ChoreView} />
    </HomeStack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NavigationContainer>
          <AppHeader />
          <Tab.Navigator initialRouteName="Home Screen">
            <Tab.Screen
              name="Home"
              component={HomeStackScreen}
              options={{ tabBarIcon: "home-heart" }}
            />
            <Tab.Screen
              name="Chores"
              component={ChoreList}
              options={{ tabBarIcon: "broom" }}
            />
            <Tab.Screen
              name="Add"
              component={AddChore}
              options={{ tabBarIcon: "plus-box" }}
            />
            <Tab.Screen
              name="Create House"
              component={HouseForm}
              options={{ tabBarIcon: "home-plus" }}
            />
            <Tab.Screen
              name="Chore Stats"
              component={ChoreStats}
              options={{ tabBarIcon: "clipboard-check" }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}
export default App;

// Authentication Flow!
// isSignedIn ? (
//   <>
//     <Stack.Screen name="Home" component={HomeScreen} />
//     <Stack.Screen name="Profile" component={ProfileScreen} />
//     <Stack.Screen name="Settings" component={SettingsScreen} />
//   </>
// ) : (
//   <>
//     <Stack.Screen name="SignIn" component={SignInScreen} />
//     <Stack.Screen name="SignUp" component={SignUpScreen} />
//   </>
// )
// import * as SecureStore from 'expo-secure-store';

// const MY_SECURE_AUTH_STATE_KEY = 'MySecureAuthStateKey';

// function App() {
//   const [, response] = useAuthRequest({});

//   React.useEffect(() => {
//     if (response && response.type === 'success') {
//       const auth = response.params;
//       const storageValue = JSON.stringify(auth);

//       if (Platform.OS !== 'web') {
//         // Securely store the auth on your device
//         SecureStore.setItemAsync(MY_SECURE_AUTH_STATE_KEY, storageValue);
//       }
//     }
//   }, [response]);

//   // More login code...
// }
