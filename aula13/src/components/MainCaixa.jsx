import { View, StyleSheet, TextInput } from "react-native";

export default function MainCaixa(){
    return (
        <View style={styles.main}>
            <TextInput placeholder="Login" style={styles.textInput}></TextInput>
            <TextInput placeholder="Senha" style={styles.textInput}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        width: 300,
        height: 200,
        backgroundColor: "#ccc",
        borderRadius: "10%",
        gap: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    textInput:{
        backgroundColor: "gray",
        width: 200,
        height: 50,
        borderRadius: 20
    }
})