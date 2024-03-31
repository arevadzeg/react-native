import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import useGetQuestions from "../api/useGetQuestions";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import GameScreen from "../screens/GameScreen/GameScreen";

export interface answerInterface {
  userAnswer: string;
  point: 1 | 0;
}
const LandingPage = () => {
  const [difficulty, setDifficulty] = useState<string | null>(null);
  const [category, setCategory] = useState<number | null>(null);

  const {
    data: questions,
    isFetching: isQuestionsLoading,
    refetch: getQuestions,
  } = useGetQuestions({
    category,
    difficulty,
  });

  const [answers, setAnswers] = useState<answerInterface[]>([]);

  useEffect(() => {
    if (questions) {
      const initialAnswers: answerInterface[] = Array.from(
        { length: questions.length },
        (v, i) => i
      ).map(() => {
        return {
          userAnswer: "",
          point: 0,
        };
      });
      setAnswers(initialAnswers);
    }
  }, [questions]);

  const isShowHomeScreen = !questions && !isQuestionsLoading;

  const isShowGameScreen = questions && !isQuestionsLoading;

  return (
    <View>
      <Text>
        {isQuestionsLoading && <ActivityIndicator />}

        {isShowHomeScreen && (
          <HomeScreen
            difficulty={difficulty}
            category={category}
            setDifficulty={setDifficulty}
            setCategory={setCategory}
            getQuestions={getQuestions}
          />
        )}

        {isShowGameScreen && (
          <GameScreen
            answers={answers}
            questions={questions}
            setAnswers={setAnswers}
          />
        )}
      </Text>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    flexDirection: "column",
  },
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
