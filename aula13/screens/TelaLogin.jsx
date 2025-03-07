import { StyleSheet, Text, View } from "react-native";

export default function TelaLogin(){
    return (
        <View>
            <Text style={styles.container}>
                Funcionou tela Login</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        color: "white",
        justifyContent: 'center',
        alignItems: 'center'
    }
})