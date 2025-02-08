import { Link } from "expo-router";
import { View, StyleSheet, Text, Image } from "react-native";

export function EdificioCard({ edificio }) {
  return (
    <Link href={`/${edificio.id}`} asChild>
      <View
        key={edificio.id}
        className="flex-row bg-white shadow-lg p-4 rounded-2xl gap-4 mb-6 border border-gray-200 hover:bg-slate-100 hover:scale-105"
      >
        <Image
          source={{ uri: edificio.image }}
          className="w-24 h-24 rounded-lg object-cover border border-gray-300"
        />
        <View className="flex-shrink">
          <Text className="text-lg font-bold text-gray-800">
            {edificio.title}
          </Text>
          <Text className="mt-2 text-sm text-gray-600 leading-relaxed">
            {edificio.descripcion.slice(0, 100)}...
          </Text>
        </View>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    marginTop: 5,
    color: "#555",
  },
});
