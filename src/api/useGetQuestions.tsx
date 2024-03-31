import apiClient from "../apiClient";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { shuffleArray } from "../utils/shuffltArray";

interface Question {
  type: "boolean" | "multiple";
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface TransformedCQuestions {
  type: "boolean" | "multiple";
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  allAnswers: string[];
}

interface ApiResponse {
  response_code: number;
  results: Question[];
}

interface Props {
  category: number | null;
  difficulty: string | null;
}

const useGetQuestions = ({
  category,
  difficulty,
}: Props): UseQueryResult<TransformedCQuestions[], Error> => {
  const questions: UseQueryResult<TransformedCQuestions[], Error> = useQuery({
    queryKey: ["questions", category, difficulty],
    queryFn: async () => {
      try {
        const response = await apiClient.get<ApiResponse>(
          `api.php?amount=10&category=${category}&difficulty=${difficulty}`
        );

        return response.data.results.map((question) => {
          const shuffledArray = shuffleArray([
            ...question.incorrect_answers,
            question.correct_answer,
          ]);
          return { ...question, allAnswers: shuffledArray };
        });
      } catch (error) {
        throw new Error("Failed to fetch questions");
      }
    },
    enabled: false,
  });

  return questions;
};

export default useGetQuestions;
