import { Button, Text, View } from "react-native";
import { answerInterface } from "../../components/LandingPage";
import { useQueryClient } from "@tanstack/react-query";

interface ShowResultsProps {
  answers: answerInterface[];
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>;
  category: number | null;
  difficulty: string | null;
}
const ShowResults = ({
  answers,
  setShowResults,
  category,
  difficulty,
}: ShowResultsProps) => {
  const totalScore = answers.reduce((accumulator, currentAnswer) => {
    return accumulator + currentAnswer.point;
  }, 0);

  const queryClient = useQueryClient();

  const onReStartButton = () => {
    queryClient.resetQueries({
      queryKey: ["questions", category, difficulty],
    });

    setShowResults(false);
  };
  return (
    <View>
      <Text>Results</Text>
      <Text>
        Your score {totalScore}/{answers.length}
      </Text>
      <Button onPress={onReStartButton} title="Play one more time" />
    </View>
  );
};

export default ShowResults;
