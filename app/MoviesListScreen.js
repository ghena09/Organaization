import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { movieData } from '../data/Data';

const MoviesListScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { category } = route.params; 
  const filteredMovies = movieData.filter((movie) => movie.headNews === category);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category}</Text>
      <FlatList
        data={filteredMovies}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
            <View style={styles.movieItem}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.movieTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MoviesListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#610D0D',
    textAlign: 'center',
  },
  movieItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 80,
    height: 120,
    marginRight: 10,
    borderRadius: 8,
  },
  movieTitle: {
    fontSize: 18,
    color: '#333',
  },
});