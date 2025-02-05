import { View, StyleSheet, Text, Image } from "react-native";

export function EdificioCard({ edificio }) {
  return (
    <View key={edificio.id} style={styles.card}>
      <Image source={{ uri: edificio.image }} style={styles.image} />
      <Text style={styles.title}>{edificio.title}</Text>
      <Text style={styles.description}>{edificio.descripcion}</Text>
    </View>
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
