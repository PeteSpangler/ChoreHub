import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5D3593",
    textAlign: "center",
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
    borderColor: "#007BFF",
    backgroundColor: "#007BFF",
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
    padding: 20,
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 30,
    color: "black",
    textAlign: "center",
    paddingBottom: 50,
  },
});
export default styles;
