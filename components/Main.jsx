import { useState, useEffect } from "react";
import { View, FlatList, Text, Image } from "react-native";
import fetchEdificios from "../api/data";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { EdificioCard } from "./EdificioCard";

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
      <View style={{ paddingVertical: 20 }}>
        <Text style={{ fontWeight: "bold" }}>
          Universidad Javeriana de Cali
        </Text>
      </View>
      <FlatList
        data={edificios}
        keyExtractor={(edificio) => edificio.id.toString()}
        renderItem={({ item }) => <EdificioCard edificio={item} />}
      />
    </View>
  );
}
