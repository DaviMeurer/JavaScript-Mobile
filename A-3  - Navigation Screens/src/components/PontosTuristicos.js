import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const PontosTuristicos = ({ spot, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: spot.image }} style={styles.image} />
      <Text style={styles.name}>{spot.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 3,
  },
  image: { width: "100%", height: 150, borderRadius: 5 },
  name: { fontSize: 18, fontWeight: "bold", marginTop: 5, textAlign: "center" },
});

export default PontosTuristicos;
