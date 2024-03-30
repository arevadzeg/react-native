import apiClient from "../apiClient";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

interface Category {
  id: number;
  name: string;
}

interface TransformedCategory {
  label: string;
  value: number;
}

interface ApiResponse {
  trivia_categories: Category[];
}

const useGetAllCategories = (): UseQueryResult<
  TransformedCategory[],
  Error
> => {
  const categories: UseQueryResult<TransformedCategory[], Error> = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        const response = await apiClient.get<ApiResponse>("api_category.php");
        return response.data.trivia_categories.map((category) => {
          return {
            label: category.name,
            value: category.id,
          };
        });
      } catch (error) {
        throw new Error("Failed to fetch categories");
      }
    },
  });

  return categories;
};

export default useGetAllCategories;
