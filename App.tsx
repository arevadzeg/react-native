import { View } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <View>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </View>
  );
}
