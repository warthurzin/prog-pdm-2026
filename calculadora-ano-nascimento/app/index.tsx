import React, { useMemo, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "../components/Input";

export default function Index() {
  const [idade, setIdade] = useState("");
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");

  const anoNascimento = useMemo(() => {
    const idadeNumero = Number(idade);
    const diaNumero = Number(dia);
    const mesNumero = Number(mes);

    if (
      !idade ||
      isNaN(idadeNumero) ||
      !dia ||
      isNaN(diaNumero) ||
      !mes ||
      isNaN(mesNumero)
    ) {
      return "";
    }

    const today = new Date();
    const anoAtual = today.getFullYear();
    const mesAtual = today.getMonth() + 1;
    const diaAtual = today.getDate();

    let ano = anoAtual - idadeNumero;

    const aindaNaoFezAniversario =
      mesNumero > mesAtual || (mesNumero === mesAtual && diaNumero > diaAtual);

    if (aindaNaoFezAniversario) {
      ano = ano - 1;
    }

    return ano;
  }, [idade, dia, mes]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Calculadora de Ano de Nascimento</Text>

      <Text style={styles.label}>Digite a sua idade</Text>
      <Input value={idade} onChangeText={setIdade} placeholder="Ex: 25" />

      <Text style={styles.subtitle}>Aniversário</Text>

      <View style={styles.row}>
        <View style={styles.inputSmall}>
          <Input value={dia} onChangeText={setDia} placeholder="Dia" />
        </View>

        <View style={styles.inputSmall}>
          <Input value={mes} onChangeText={setMes} placeholder="Mês" />
        </View>
      </View>

      <Text style={styles.result}>Seu ano de nascimento é:</Text>
      <Text style={styles.year}>{anoNascimento ? anoNascimento : "—"}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
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
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 12,
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  inputSmall: {
    flex: 1,
  },
  result: {
    fontSize: 16,
    marginTop: 24,
  },
  year: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 4,
  },
});
