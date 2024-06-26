import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Select from "react-native-picker-select";
import useGetAllCategories from "../../api/useGetAllCategories";
import homeScreenStyles from "./homeScreenStyles";
import Button from "../../components/Button/Button";

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
      <Image source={require("../../../assets/lightBulb.png")} />
      <Select
        disabled={isCategoriesLoading}
        onValueChange={(value) => setCategory(value)}
        style={homeScreenStyles}
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
        style={homeScreenStyles}
        value={difficulty}
        placeholder={{
          label: "Select difficulty",
          value: null,
          color: "#9EA0A4",
        }}
      />
      <Button
        title="Press Here"
        onPress={handleStartGame}
        disabled={isStartButtonDisabled}
      />
    </View>
  );
};

export default HomeScreen;
