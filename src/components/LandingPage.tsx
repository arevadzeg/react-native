import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import useGetQuestions from "../api/useGetQuestions";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import GameScreen from "../screens/GameScreen/GameScreen";
import ShowResults from "../screens/ResultScreen/ResultScreen";
import { LinearGradient } from "expo-linear-gradient";

export interface answerInterface {
  userAnswer: string;
  point: 1 | 0;
}
const LandingPage = () => {
  const [difficulty, setDifficulty] = useState<string | null>(null);
  const [category, setCategory] = useState<number | null>(null);
  const [answers, setAnswers] = useState<answerInterface[]>([]);
  const [isShowResults, setShowResults] = useState(false);

  const {
    data: questions,
    isFetching: isQuestionsLoading,
    refetch: getQuestions,
  } = useGetQuestions({
    category,
    difficulty,
  });

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

  const isShowHomeScreen = !questions && !isQuestionsLoading && !isShowResults;

  const isShowGameScreen = questions && !isQuestionsLoading && !isShowResults;

  return (
    <View style={style.mainWrapper}>
      <LinearGradient colors={["#ADDDD1", "#4BAACE"]} style={style.mainWrapper}>
        {isQuestionsLoading && <ActivityIndicator style={style.loader} />}

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
            setShowResults={setShowResults}
          />
        )}

        {isShowResults && (
          <ShowResults answers={answers} setShowResults={setShowResults} />
        )}
      </LinearGradient>
    </View>
  );
};

export default LandingPage;

const style = StyleSheet.create({
  mainWrapper: {
    height: "100%",
    width: "100%",
  },
  loader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
