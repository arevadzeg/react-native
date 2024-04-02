import { StyleSheet } from "react-native";

const homeScreenStyles = StyleSheet.create({
  homeScreen: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    flexDirection: "column",
    marginTop: "auto",
    marginBottom: "auto",
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 25,
    color: "black",
    width: "80%",
    backgroundColor: "#fff",
    textAlign: "center",
    marginLeft: "10%",
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 25,
    color: "black",
    width: "80%",
    backgroundColor: "#fff",
    textAlign: "center",
    marginLeft: "10%",
  },
});

export default homeScreenStyles;
