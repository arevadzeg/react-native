import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
import styleRules from "../../utils/styleRules";
import { TransformedCQuestions } from "../../api/useGetQuestions";
import { answerInterface } from "../../components/LandingPage";
import { replaceItemAt } from "../../utils/replaceArrayItem";
import gameScreenStyles from "./gameScreenStyles";
import Stepper from "../../components/Stepper/Stepper";

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
    <SafeAreaView style={gameScreenStyles.gameScreen}>
      <Stepper
        current={numberOfQuestion + 1}
        total={questions.length}
        setStep={setNumberOfQuestion}
        unit="Question"
      />
      <View>
        <View style={gameScreenStyles.questionWrapper}>
          <Text style={gameScreenStyles.question}>
            {decodeURIComponent(questions[numberOfQuestion].question)}
          </Text>
        </View>

        <View style={gameScreenStyles.answersWrapper}>
          {questions[numberOfQuestion].allAnswers.map((answer) => {
            return (
              <View
                key={answer}
                style={styleRules(
                  gameScreenStyles.answer,
                  answers?.[numberOfQuestion]?.userAnswer === answer &&
                    gameScreenStyles.answerSelected
                )}
              >
                <Text
                  style={styleRules(
                    gameScreenStyles.answerText,
                    answers?.[numberOfQuestion]?.userAnswer === answer &&
                      gameScreenStyles.answerSelectedText
                  )}
                  onPress={() => {
                    setAnswers((prev) => {
                      const newAnswers: answerInterface[] = replaceItemAt(
                        prev,
                        numberOfQuestion,
                        {
                          userAnswer: answer,
                          point:
                            answer ===
                            questions[numberOfQuestion].correct_answer
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
              </View>
            );
          })}
        </View>
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
    </SafeAreaView>
  );
};

export default GameScreen;
