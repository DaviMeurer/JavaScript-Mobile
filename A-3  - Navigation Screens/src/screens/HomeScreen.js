import React from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import pontosTuristicos from "../data/mockData";
import PontosTuristicos from "../components/PontosTuristicos";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pontos Turísticos de Ponta Porã</Text>
      <FlatList
        data={pontosTuristicos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PontosTuristicos
            spot={item}
            onPress={() => navigation.navigate("TouristSpot", { spot: item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
});

export default HomeScreen;
