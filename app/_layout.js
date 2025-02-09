import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";
import "../global.css";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <View className="flex-1" style={styles.container}>
        <StatusBar style="dark" />
        <Slot />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDED",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
