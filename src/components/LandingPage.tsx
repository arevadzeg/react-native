import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import useGetQuestions from "../api/useGetQuestions";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import GameScreen from "../screens/GameScreen/GameScreen";
import ShowResults from "../screens/ResultScreen/ResultScreen";

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

  console.log("ffffffffffffffffffffffffasd", questions);

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
            setShowResults={setShowResults}
          />
        )}

        {isShowResults && (
          <ShowResults
            answers={answers}
            setShowResults={setShowResults}
            difficulty={difficulty}
            category={category}
          />
        )}
      </Text>
    </View>
  );
};

export default LandingPage;
