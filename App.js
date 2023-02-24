import { SafeAreaView, StyleSheet, View } from "react-native";
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Homepage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: '100%'
  },
});
