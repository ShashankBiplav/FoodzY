import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import yelp from '../api/yelp';

const RestaurantDetailScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null);
  const restaurantId = navigation.getParam('id');
  console.log(id);
  console.log(restaurant);
  useEffect(() => {
    getRestaurantDetail(restaurantId);
  }, []);

  const getRestaurantDetail = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setRestaurant(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!restaurant) {
    return null;
  }

  return (
    <View>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
        data={restaurant.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
            return (
                <Image style={styles.image} source={{uri:item}}/>
            );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    image:{
        height:200,
        width:300,
        borderRadius:10,
        marginLeft:16,
        marginTop:16
    }
});

export default RestaurantDetailScreen;
