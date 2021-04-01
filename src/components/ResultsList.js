import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({item}) => {return <ResultsDetail detail={item}/>}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        marginBottom:8
    },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:16,
    marginBottom:8
  },
});

export default ResultsList;
