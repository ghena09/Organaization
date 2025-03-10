import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Image, Text, Button, Linking, FlatList } from "react-native";
import Images from "../assets/images/images";

const Details = () => {
  const { params } = useRoute();
  console.log(params);

  const openURL = () => {
    try {
      if (!params.url) {
        console.log("url doesnt exist");
      } else {
        Linking.openURL(params.url);
      }
    } catch (error) {
      console.error("there was an error opening the link ", error);
    }
  };

  const suggestions= [
    { name: "مسلسل 1", image: {image: Images.keralik()} },
    { name: "مسلسل 2", image: { image: Images.aros()} },
    { name: "مسلسل 3", image: {  image: Images.evlelik() } },
  ]


  return (
    <View style={styles.container}> 
      <Image source={params.image} style={styles.image} />

      <View style={styles.contain}>
        <Text style={styles.title}>{params.title}</Text>
        <Text style={styles.description}>{params.news}</Text>
      </View>

     
      <Text style={styles.suggestionsTitle}>مقترحات</Text>
      <FlatList
        data={params.suggestions} 
        keyExtractor={(item, index) => index.toString()}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.suggestionItem}>
            <Image source={item.image} style={styles.suggestionImage} />
            <Text style={styles.suggestionText}>{item.name}</Text>
          </View>
        )}
      />

      <Button title="للمشاهده اضغط هنا" onPress={openURL} />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#a75c5c',
    padding: 16,
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 10,
    marginBottom: 16,
    position: 'absolute',
    borderColor: "black",
    borderWidth: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#610D0D',
    textAlign: 'center',
  },
  description: {
    alignSelf: 'center',
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  contain: {
    alignContent: 'space-evenly',
    flexDirection: 'column',
    marginTop: 300,
  },
  suggestionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    marginBottom: 10,
  },
  suggestionItem: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  suggestionImage: {
    width: 60,
    height: 60,
    borderRadius: 30, 
  },
  suggestionText: {
    marginTop: 5,
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
});