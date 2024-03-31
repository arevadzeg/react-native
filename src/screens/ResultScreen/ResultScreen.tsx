import { Button, Text, View } from "react-native";
import { answerInterface } from "../../components/LandingPage";
import { useQueryClient } from "@tanstack/react-query";

interface ShowResultsProps {
  answers: answerInterface[];
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>;
}
const ShowResults = ({ answers, setShowResults }: ShowResultsProps) => {
  const totalScore = answers.reduce((accumulator, currentAnswer) => {
    return accumulator + currentAnswer.point;
  }, 0);

  const queryClient = useQueryClient();

  const handleReStartGame = () => {
    queryClient.resetQueries({
      queryKey: ["questions"],
      exact: false,
    });

    setShowResults(false);
  };
  return (
    <View>
      <Text>Results</Text>
      <Text>
        Your score {totalScore}/{answers.length}
      </Text>
      <Button onPress={handleReStartGame} title="Play one more time" />
    </View>
  );
};

export default ShowResults;
