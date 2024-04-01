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
  startButton: {
    alignItems: "center",
    backgroundColor: "#5DBF10",
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 40,
  },
  startButtonText: {
    fontSize: 25,
    fontWeight: "800",
    color: "#fff",
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
