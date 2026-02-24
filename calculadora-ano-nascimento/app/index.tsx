import React, { useMemo, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input } from "../components/Input";

export default function Index() {
  const [idade, setIdade] = useState("");

  const anoNascimento = useMemo(() => {
    const idadeNumero = Number(idade);

    if (!idade || isNaN(idadeNumero)) return "";

    const today = new Date();
    const anoAtual = today.getFullYear();

    return anoAtual - idadeNumero;
  }, [idade]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Ano de Nascimento</Text>

      <Text style={styles.label}>Digite a sua idade</Text>

      <Input value={idade} onChangeText={setIdade} placeholder="Ex: 25" />

      <Text style={styles.result}>Seu ano de nascimento é:</Text>

      <Text style={styles.year}>{anoNascimento ? anoNascimento : "—"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  result: {
    fontSize: 16,
    marginTop: 8,
  },
  year: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 4,
  },
});
