import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { answerInterface } from "../../components/LandingPage";
import { useQueryClient } from "@tanstack/react-query";
import Icon from "react-native-vector-icons/FontAwesome6";
import resultsScreen from "./resultsScreen";
import Button from "../../components/Button/Button";

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
    <SafeAreaView style={resultsScreen.resultsScreen}>
      <Icon name="trophy" size={150} color={"#F6B907"} />
      <View style={resultsScreen.finish}>
        <Text style={resultsScreen.finishText}>Finish</Text>
      </View>

      <View style={resultsScreen.step}>
        <Text style={resultsScreen.current}>Your score {totalScore}</Text>

        <Text>/{answers.length}</Text>
      </View>
      <Button onPress={handleReStartGame} title="Re-start game" />
    </SafeAreaView>
  );
};

export default ShowResults;
