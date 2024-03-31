import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import useGetAllCategories from "../api/useGetAllCategories";
import Select from "react-native-picker-select";
import { useEffect, useMemo, useState } from "react";
import useGetQuestions from "../api/useGetQuestions";
import { shuffleArray } from "../utils/shuffltArray";
import { replaceItemAt } from "../utils/replaceArrayItem";

const DIFFICULTY_OPTIONS = [
  { label: "Easy", value: "easy" },
  { label: "Medium", value: "medium" },
  { label: "Hard", value: "hard" },
];

const LandingPage = () => {
  const { data: categories, isLoading: isCategoriesLoading } =
    useGetAllCategories();
  const [difficulty, setDifficulty] = useState(null);
  const [category, setCategory] = useState(null);
  const {
    data: questions,
    isFetching: isQuestionsLoading,
    refetch: getQuestions,
  } = useGetQuestions({
    category,
    difficulty,
  });

  interface answerInterface {
    userAnswer: string;
    point: 1 | 0;
  }
  const [answers, setAnswers] = useState<answerInterface[]>([]);
  const [numberOfQuestion, setNumberOfQuestion] = useState(0);

  const isStartButtonDisabled = !(category && difficulty);

  const onStartPress = () => {
    getQuestions();
  };

  const styleRules = (...rules: any[]) => {
    return rules.filter(Boolean).reduce((result, rule) => {
      return { ...result, ...rule };
    }, {});
  };

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

  console.log("fffffffffffffffffffffffff", answers);

  // const shuffledArray = useMemo(() => {
  //   if (!questions) return [];
  //   return shuffleArray([
  //     ...questions[numberOfQuestion].incorrect_answers,
  //     questions[numberOfQuestion].correct_answer,
  //   ]);
  // }, [questions]);

  return (
    <View>
      <Text>
        {isQuestionsLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.wrapper}>
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
              style={styles.button}
              onPress={onStartPress}
              disabled={isStartButtonDisabled}
            >
              <Text>Press Here</Text>
            </TouchableOpacity>
          </View>
        )}
        {questions && (
          <View>
            <View>
              <Text>{questions[numberOfQuestion].question}</Text>

              <View style={styles.answersWrapper}>
                {questions[numberOfQuestion].allAnswers.map((answer) => {
                  return (
                    <Text
                      // style={styles.answer}
                      style={styleRules(
                        styles.answer,
                        answers?.[numberOfQuestion]?.userAnswer === answer &&
                          styles.numberOfQuestionSelected
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
                      {answer}
                    </Text>
                  );
                })}
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setNumberOfQuestion((prev) => ++prev);
                }}
              >
                <Text>Next</Text>
              </TouchableOpacity>
            </View>

            <View>
              {questions.map((_, index) => {
                return (
                  <Text
                    onPress={() => setNumberOfQuestion(index)}
                    style={styleRules(
                      styles.numberOfQuestion,
                      numberOfQuestion === index &&
                        styles.numberOfQuestionSelected
                    )}
                  >
                    {index + 1}
                  </Text>
                );
              })}
            </View>
          </View>
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
