import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { NewsData } from '../data/Data'; 

const CategoryScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { category } = route.params; 
  
  const filteredSeries = NewsData.filter((series) => series.headNews === category);
   console.log("f",category);
   

  return (

    <View style={styles.container}>
      <Text style={styles.title}>{category}</Text>
      <FlatList
        data={filteredSeries}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
            <View style={styles.seriesItem}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.seriesTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
export default CategoryScreen;
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
    seriesItem: {
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
    seriesTitle: {
      fontSize: 18,
      color: '#333',
    },
  });