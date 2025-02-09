import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Hero() {
  return (
    <View className="bg-cyan-950 p-4 rounded-lg my-4">
      <Text className="text-xl font-bold text-white mb-2">
        Descubre los edificios de la universidad
      </Text>
      <Text className="text-base text-white mb-4">
        Encuentra información detallada sobre cada facultad y espacio académico.
      </Text>
      <TouchableOpacity className="bg-white rounded-full px-5 py-2">
        <Text className="text-cyan-950 font-bold">Explorar</Text>
      </TouchableOpacity>
    </View>
  );
}
