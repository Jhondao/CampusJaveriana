import { Link } from "expo-router";
import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Detail() {
    const { idedificio } = useLocalSearchParams();
  return (
    <View className="flex-1 justify-center items-center">
      <View>
        <Text>Detalle del edificio {idedificio} </Text>
        <Link href="/" className="text-blue-500">
          Volver atrás
        </Link>
      </View>
    </View>
  );
}
