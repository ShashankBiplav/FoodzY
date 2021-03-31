import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>results is {results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight:'bold'
    }
});

export default ResultsList;
