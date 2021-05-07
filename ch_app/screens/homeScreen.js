import "react-native-gesture-handler";
import React, { useContext } from "react";
import { UserContext, AuthContext } from "../components/userContext";
import { Image, Text, View } from "react-native";
import { Button } from "react-native-paper";
import styles from "../assets/appStyles";
import logo from "../assets/logo.png";

function HomeScreen({ navigation }) {
  const { user, setUser } = useContext(UserContext);
  const { setUserToken } = useContext(AuthContext);

  const Logout = () => {
    setUser("Not Logged In");
    setUserToken("");
  };

  return (
    <View style={[styles.container, { flexDirection: "column" }]}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.instructions}>Welcome to v1.0 of ChoreHub!</Text>

      {user == "Not Logged In" ? (
        <View style={[styles.container, { flexDirection: "column" }]}>
          <Button
            style={styles.Button}
            mode="contained"
            color="#8660B6"
            onPress={() => navigation.navigate("Register")}
          >
            Register!
          </Button>
          <Button
            style={styles.Button}
            mode="contained"
            color="#1bb9ee"
            onPress={() => navigation.navigate("Login")}
          >
            Login!
          </Button>
        </View>
      ) : (
        <View style={[styles.container, { flexDirection: "column" }]}>
          <Button
            style={styles.Button}
            mode="contained"
            color="#AC8CCC"
            onPress={() => Logout()}
          >
            Logout!
          </Button>
        </View>
      )}
    </View>
  );
}

export default HomeScreen;
