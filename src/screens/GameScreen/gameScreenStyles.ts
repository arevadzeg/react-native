import { StyleSheet } from "react-native";

const gameScreenStyles = StyleSheet.create({
  button: {
    marginTop: "auto",
  },

  answerSelected: {
    backgroundColor: "#F67443",
  },
  answerSelectedText: {
    color: "#fff",
  },
  answerText: {
    width: "100%",
    padding: 20,
  },
  answer: {
    borderRadius: 8,
    backgroundColor: "#E5E5E5",
  },

  answersWrapper: {
    padding: 20,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: 20,
    borderRadius: 16,
  },
  questionWrapper: {
    borderRadius: 8,
    backgroundColor: "#E5E5E5",
    marginBottom: 40,
    marginTop: 40,
    fontWeight: "bold",
  },
  question: {
    padding: 20,
    fontSize: 18,
  },
  gameScreen: {
    paddingTop: 20,
    width: "90%",
    marginLeft: "5%",
    height: "100%",
  },
});

export default gameScreenStyles;
