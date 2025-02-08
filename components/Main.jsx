import { useState, useEffect } from "react";
import { View, FlatList, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import fetchEdificios from "../api/data";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { EdificioCard } from "./EdificioCard";
import { DirectorioTel } from "./Icons";

export function Main() {
  const [edificios, setEdificios] = useState([]); // Estado para los edificios
  const [loading, setLoading] = useState(true); // Estado de carga
  const insets = useSafeAreaInsets();

  useEffect(() => {
    // Función para cargar los edificios
    const loadData = async () => {
      const data = await fetchEdificios(); // Llamamos a la API
      setEdificios(data); // Guardamos los datos en el estado
      setLoading(false); // Desactivamos el estado de carga
    };

    loadData(); // Llamamos a la función
  }, []); // Se ejecuta solo una vez cuando el componente se monta

  if (loading) {
    return (
      <View>
        <Text>Cargando edificios...</Text>
      </View>
    );
  }

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View className="flex-row justify-between items-center py-4">
        <View style={{ paddingVertical: 20 }}>
          <Text className="font-bold">Universidad Javeriana de Cali</Text>
        </View>
        <Link
          asChild
          href="/directoriotel"
          className="text-black mb-4 font-bold"
        >
          <Pressable>
            <DirectorioTel />
          </Pressable>
        </Link>
      </View>
      <FlatList
        data={edificios}
        keyExtractor={(edificio) => edificio.id.toString()}
        renderItem={({ item }) => <EdificioCard edificio={item} />}
      />
    </View>
  );
}
