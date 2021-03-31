import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const SearchBar = ({ term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.iconStyle} name="search" color="black" />
      <TextInput
        style={styles.inputStyle}
        value={term}
        onChangeText={ onTermChange}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    marginHorizontal: 16,
    marginVertical: 16,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 32,
    alignSelf: 'center',
    marginHorizontal: 8,
  },
});

export default SearchBar;
