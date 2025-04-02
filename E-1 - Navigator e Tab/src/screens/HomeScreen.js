import React from 'react';
import {Text} from 'react-native'

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
}