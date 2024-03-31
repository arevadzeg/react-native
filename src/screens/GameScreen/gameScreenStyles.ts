import { StyleSheet } from "react-native";

const gameScreenStyles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
  },
  numberOfQuestion: {
    borderWidth: 1,
    padding: 5,
    margin: 5,
    textAlign: "center",
  },
  numberOfQuestionSelected: {
    color: "#fff",
    backgroundColor: "blue",
  },
  answer: {
    width: "100%",
    backgroundColor: "#ccc",
    padding: 20,
    borderRadius: 64,
  },
  selectedAnswer: {
    backgroundColor: "#green",
    color: "#fff",
  },
  answersWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
});

export default gameScreenStyles;
