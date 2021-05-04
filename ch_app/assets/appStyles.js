import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#511F96",
    textAlign: "center",
  },
  updateChorepage: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#511F96",
    paddingTop: 25,
  },
  Button: {
    borderWidth: 5,
  },
  fab: {
    position: "absolute",
  },
  instructions: {
    color: "#44CACB",
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
  logo: {
    resizeMode: "contain",
  },
  details: {
    fontSize: 15,
    margin: 10,
    fontWeight: "bold",
    color: "blue",
    textAlign: "center",
  },
  addButton: {
    borderWidth: 1,
    borderColor: "#44CACB",
    backgroundColor: "#44CACB",
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
    borderColor: "#8660B6",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  content: {
    padding: 0,
    backgroundColor: "#511F96",
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 30,
    color: "#44CACB",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 30,
    paddingBottom: 50,
  },
  cardInner: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: 100,
  },
  cardDetails: {
    fontSize: 10,
    color: "#44CACB",
    textAlign: "center",
  },
});
export default styles;
