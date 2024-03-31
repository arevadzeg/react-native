import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Select from "react-native-picker-select";
import useGetAllCategories from "../../api/useGetAllCategories";
import homeScreenStyles from "./homeScreenStyles";

const DIFFICULTY_OPTIONS = [
  { label: "Easy", value: "easy" },
  { label: "Medium", value: "medium" },
  { label: "Hard", value: "hard" },
];

interface HomeScreenProps {
  difficulty: string | null;
  category: number | null;
  setDifficulty: React.Dispatch<React.SetStateAction<string | null>>;
  setCategory: React.Dispatch<React.SetStateAction<number | null>>;
  getQuestions: () => void;
}
const HomeScreen = ({
  difficulty,
  category,
  setDifficulty,
  setCategory,
  getQuestions,
}: HomeScreenProps) => {
  const { data: categories, isLoading: isCategoriesLoading } =
    useGetAllCategories();

  const isStartButtonDisabled = !(category && difficulty);

  const handleStartGame = () => getQuestions();

  return (
    <View style={homeScreenStyles.homeScreen}>
      <Select
        disabled={isCategoriesLoading}
        onValueChange={(value) => setCategory(value)}
        items={categories ?? []}
        value={category}
        placeholder={{
          label: "Select category",
          value: null,
          color: "#9EA0A4",
        }}
      />
      <Select
        onValueChange={(value) => setDifficulty(value)}
        items={DIFFICULTY_OPTIONS}
        value={difficulty}
        placeholder={{
          label: "Select difficulty",
          value: null,
          color: "#9EA0A4",
        }}
      />

      <TouchableOpacity
        style={homeScreenStyles.startButton}
        onPress={handleStartGame}
        disabled={isStartButtonDisabled}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
