import { Link } from "expo-router";
import { View, StyleSheet, Text, Image } from "react-native";

export function EdificioCard({ edificio }) {
  return (
    <Link href={`/${edificio.id}`} asChild>
      <View
        key={edificio.id}
        className="flex-row bg-white shadow-slate-500 p-4 rounded-2xl gap-4 mb-6 border border-gray-200 hover:bg-slate-100 hover:scale-105"
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
