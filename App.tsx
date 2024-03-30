import { StyleSheet, View } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LandingPage from "./src/components/LandingPage";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <View style={styles.container}>
      <QueryClientProvider client={queryClient}>
        <LandingPage />
      </QueryClientProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
