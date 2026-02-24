import { Text, Image, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Image
          source={{
            uri: "https://m.media-amazon.com/images/I/91PbdrEjhaL.jpg",
          }}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>The Strokes</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 16,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
});
