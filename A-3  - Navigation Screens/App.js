import { StatusBar } from 'expo-status-bar';
import HomeScreen from "./src/screens/HomeScreen"
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <HomeScreen>
    </HomeScreen>
  )
}

let funcao = (a, b) => (
  console.log("eba")
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});