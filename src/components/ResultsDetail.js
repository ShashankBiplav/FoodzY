import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ResultsDetail = ({ detail }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: detail.image_url }} />
      <Text style={styles.name}>{detail.name}</Text>
      <Text style={styles.rating}>
        {detail.rating} Stars, {detail.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        marginLeft: 16
    },
  image: {
    width: 250,
    height: 150,
    borderRadius: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop:8,
    marginBottom:2
  },
  rating: {
    color: 'gray',
  },
});

export default ResultsDetail;
