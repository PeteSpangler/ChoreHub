import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  instructions: {
    color: "#888",
    fontSize: 22,
  },
  logo: {
    width: 305,
    height: 159,
    resizeMode: "contain",
  },
  button1: {
    color: "#841584",
    paddingTop: 5,
    paddingBottom: 5,
  },
  button2: {
    color: "#f194ff",
    paddingTop: 5,
    paddingBottom: 5,
  },
  button3: {
    color: "green",
  },
  button4: {
    color: "orange",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
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
  addButton: {
    borderWidth: 1,
    borderColor: "#007BFF",
    backgroundColor: "#007BFF",
    padding: 15,
  },
  title: {
    fontSize: 30,
    color: "black",
    textAlign: "center",
    paddingBottom: 50,
  },
});
export default styles;
