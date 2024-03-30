import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import useGetAllCategories from "../api/useGetAllCategories";
import Select from "react-native-picker-select";
import { useState } from "react";

const DIFFICULTY_OPTIONS = [
  { label: "Easy", value: "easy" },
  { label: "Medium", value: "medium" },
  { label: "Hard", value: "hard" },
];

const LandingPage = () => {
  const { data, isLoading }: any = useGetAllCategories();
  const [difficulty, setDifficulty] = useState(null);
  const [category, setCategory] = useState(null);

  const isStartButtonDisabled = category && difficulty;

  const osStartPress = () => {};
  return (
    <View>
      <Text>
        <View style={styles.wrapper}>
          <Select
            disabled={isLoading}
            onValueChange={(value) => setCategory(value)}
            items={data ?? []}
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
            style={styles.button}
            onPress={osStartPress}
            disabled={!!isStartButtonDisabled}
          >
            <Text>Press Here</Text>
          </TouchableOpacity>
        </View>
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
});
