import { StyleSheet } from "react-native";

const resultsScreen = StyleSheet.create({
  resultsScreen: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 30,
    marginTop: "30%",
  },
  reStartButton: {
    alignItems: "center",
    backgroundColor: "#5DBF10",
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 40,
  },
  reStartButtonText: {
    fontSize: 25,
    fontWeight: "800",
    color: "#fff",
  },
  finish: {
    backgroundColor: "#401D66",
    borderRadius: 16,
    paddingVertical: 5,
    paddingHorizontal: 25,
    width: "auto",
  },
  finishText: {
    color: "#E7BE1A",
    fontSize: 45,
    fontWeight: "bold",
  },
  step: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
  },
  current: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default resultsScreen;
