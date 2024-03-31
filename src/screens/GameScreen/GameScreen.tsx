import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import styleRules from "../../utils/styleRules";
import { TransformedCQuestions } from "../../api/useGetQuestions";
import { answerInterface } from "../../components/LandingPage";
import { replaceItemAt } from "../../utils/replaceArrayItem";
import gameScreenStyles from "./gameScreenStyles";

interface GameScreenInterface {
  questions: TransformedCQuestions[];
  setAnswers: React.Dispatch<React.SetStateAction<answerInterface[]>>;
  answers: answerInterface[];
}

const GameScreen = ({
  questions,
  setAnswers,
  answers,
}: GameScreenInterface) => {
  const [numberOfQuestion, setNumberOfQuestion] = useState(0);

  return (
    <View>
      <View>
        <Text>{questions[numberOfQuestion].question}</Text>

        <View style={gameScreenStyles.answersWrapper}>
          {questions[numberOfQuestion].allAnswers.map((answer) => {
            return (
              <Text
                style={styleRules(
                  gameScreenStyles.answer,
                  answers?.[numberOfQuestion]?.userAnswer === answer &&
                    gameScreenStyles.numberOfQuestionSelected
                )}
                onPress={() => {
                  setAnswers((prev) => {
                    const newAnswers: answerInterface[] = replaceItemAt(
                      prev,
                      numberOfQuestion,
                      {
                        userAnswer: answer,
                        point:
                          answer === questions[numberOfQuestion].correct_answer
                            ? 1
                            : 0,
                      }
                    );

                    return newAnswers;
                  });
                }}
              >
                {answer}
              </Text>
            );
          })}
        </View>

        <TouchableOpacity
          style={gameScreenStyles.button}
          onPress={() => {
            setNumberOfQuestion((prev) => ++prev);
          }}
        >
          <Text>Next</Text>
        </TouchableOpacity>
      </View>

      <View>
        {questions.map((_, index) => {
          return (
            <Text
              onPress={() => setNumberOfQuestion(index)}
              style={styleRules(
                gameScreenStyles.numberOfQuestion,
                numberOfQuestion === index &&
                  gameScreenStyles.numberOfQuestionSelected
              )}
            >
              {index + 1}
            </Text>
          );
        })}
      </View>
    </View>
  );
};

export default GameScreen;

// const styles = StyleSheet.create({
//   wrapper: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: 20,
//     flexDirection: "column",
//   },
//   button: {
//     alignItems: "center",
//     backgroundColor: "blue",
//     padding: 10,
//   },
//   numberOfQuestion: {
//     borderWidth: 1,
//     padding: 5,
//     margin: 5,
//     textAlign: "center",
//   },
//   numberOfQuestionSelected: {
//     color: "#fff",
//     backgroundColor: "blue",
//   },
//   answer: {
//     width: "100%",
//     backgroundColor: "#ccc",
//     padding: 20,
//     borderRadius: 64,
//   },
//   selectedAnswer: {
//     backgroundColor: "#green",
//     color: "#fff",
//   },
//   answersWrapper: {
//     display: "flex",
//     flexDirection: "column",
//     gap: 10,
//   },
// });
