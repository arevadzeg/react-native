import { StyleSheet } from "react-native";

const homeScreenStyles = StyleSheet.create({
  homeScreen: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    flexDirection: "column",
  },
  startButton: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
  },
});

export default homeScreenStyles;
