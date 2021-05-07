import "react-native-gesture-handler";
import React, { useState } from "react";
import * as SecureStore from "expo-secure-store";
import { UserContext, AuthContext } from "./components/userContext";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { QueryClientProvider, QueryClient } from "react-query";
import HomeScreen from "./screens/homeScreen";
import RegForm from "./screens/regForm";
import LoginForm from "./screens/loginForm";
import AddChore from "./screens/addChores";
import ChoreList from "./screens/listChores";
import ChoreDetail from "./screens/choreDetails";
import ChoreDelete from "./screens/choreDelete";
import AppHeader from "./components/appHeader";

const queryClient = new QueryClient();

const HomeStack = createStackNavigator();
// This should be the authentication flow bozo
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home Screen" component={HomeScreen} />
      <HomeStack.Screen name="Login" component={LoginForm} />
      <HomeStack.Screen name="Register" component={RegForm} />
    </HomeStack.Navigator>
  );
}

const ChoreStack = createStackNavigator();
function ChoreStackScreen() {
  return (
    <ChoreStack.Navigator screenOptions={{ headerShown: false }}>
      <ChoreStack.Screen name="Chore List" component={ChoreList} />
      <ChoreStack.Screen name="Details" component={ChoreDetail} />
      <ChoreStack.Screen name="Delete" component={ChoreDelete} />
    </ChoreStack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

function App() {
  const [user, setUser] = useState("butthead");
  const [userToken, setUserToken] = useState("");
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <AuthContext.Provider value={{ userToken, setUserToken }}>
          <UserContext.Provider value={{ user, setUser }}>
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
                  component={ChoreStackScreen}
                  options={{ tabBarIcon: "broom" }}
                />
                <Tab.Screen
                  name="Add"
                  component={AddChore}
                  options={{ tabBarIcon: "plus-box" }}
                />
              </Tab.Navigator>
            </NavigationContainer>
          </UserContext.Provider>
        </AuthContext.Provider>
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
