import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import yelp from '../api/yelp';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'san hose',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
        setErrorMessage('Something Went Wrong!');
    }
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      <Text>{term}</Text>
      <Text>{results.length} results</Text>
      {errorMessage?<Text>{errorMessage}</Text>:null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
