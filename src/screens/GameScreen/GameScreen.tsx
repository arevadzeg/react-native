import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styleRules from "../../utils/styleRules";
import { TransformedCQuestions } from "../../api/useGetQuestions";
import { answerInterface } from "../../components/LandingPage";
import { replaceItemAt } from "../../utils/replaceArrayItem";
import gameScreenStyles from "./gameScreenStyles";

interface GameScreenInterface {
  questions: TransformedCQuestions[];
  setAnswers: React.Dispatch<React.SetStateAction<answerInterface[]>>;
  answers: answerInterface[];
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameScreen = ({
  questions,
  setAnswers,
  answers,
  setShowResults,
}: GameScreenInterface) => {
  const [numberOfQuestion, setNumberOfQuestion] = useState(0);

  const createTwoButtonAlert = () => {
    Alert.alert(
      "Are you sure you want to finish?",
      "Do you want to end the trivia game?",
      [
        {
          text: "Continue Playing",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Finish Game",
          onPress: () => setShowResults(true),
        },
      ]
    );
  };
  const isLastQuestion = numberOfQuestion === questions.length - 1;

  return (
    <View>
      <View>
        <Text>{decodeURIComponent(questions[numberOfQuestion].question)}</Text>

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
                {decodeURIComponent(answer)}
              </Text>
            );
          })}
        </View>

        <TouchableOpacity
          style={gameScreenStyles.button}
          onPress={() => {
            if (isLastQuestion) return createTwoButtonAlert();
            setNumberOfQuestion((prev) => ++prev);
          }}
        >
          <Text>{isLastQuestion ? "Finish" : "Next"}</Text>
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
