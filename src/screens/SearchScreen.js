import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
      <ResultsList 
      results={filterResultsByPrice('$')} 
      title="FoodzY Budget" />
      <ResultsList 
      results={filterResultsByPrice('$$')} 
      title="FoodzY Prime" />
      <ResultsList
        results={filterResultsByPrice('$$$')}
        title="FoodzY Premium"
      />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});

export default SearchScreen;
