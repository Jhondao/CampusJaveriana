import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, View, FlatList, Text } from "react-native";
import React, { useState, useEffect } from "react";
import fetchEdificios from "./api/data";

export default function App() {
  const [edificios, setEdificios] = useState([]); // Estado para los edificios
  const [loading, setLoading] = useState(true); // Estado de carga

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
      <View style={styles.container}>
        <Text>Cargando edificios...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <FlatList
        data={edificios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.descripcion}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5", // Fondo suave
  },
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
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    marginTop: 5,
    color: "#555",
  },
});
