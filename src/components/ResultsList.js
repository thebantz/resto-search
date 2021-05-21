import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result, index) => {
          return result.id;
        }}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    marginBottom: 5,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
  },
});

export default ResultsList;
