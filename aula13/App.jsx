import {SafeAreaView, StyleSheet, Text, View} from 'react-native'
import TelaLogin from './screens/TelaLogin'
import MainCaixa from './src/components/MainCaixa';

export default function App(){
  return (
    <View style={styles.container}>
      <MainCaixa/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
})