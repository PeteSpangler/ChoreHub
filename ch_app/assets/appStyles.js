import { StyleSheet } from "react-native";
import * as Paper from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#532f84",
    textAlign: "center",
  },
  updateChorepage: {
    flex: 1,
    backgroundColor: "#532f84",
    paddingTop: 25,
  },
  Button: {
    borderWidth: 20,
  },
  instructions: {
    color: "#1bb9ee",
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
  logo: {
    resizeMode: "contain",
  },
  addButton: {
    borderWidth: 1,
    borderColor: "#1bb9ee",
    backgroundColor: "#1bb9ee",
    padding: 15,
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  error: {
    color: "red",
    fontSize: 18,
    marginBottom: 7,
    fontWeight: "600",
    paddingLeft: 20,
  },
  textBox: {
    borderColor: "#CCCCCC",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  content: {
    padding: 0,
    backgroundColor: "#532f84",
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 30,
    color: "#1bb9ee",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 30,
    paddingBottom: 50,
  },
});
export default styles;
