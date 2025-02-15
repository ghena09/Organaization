import { useRoute } from "@react-navigation/native"

import { Button, Linking, View } from "react-native";

//  import React from "react";
import { StyleSheet, Image, Text } from "react-native";
const moviePage = () => {
   const { params } = useRoute()
   console.log(params);
   const openURL = () => {
      try {
         if (!params.url) {
            console.log("url doesnt exist");

         } else {
            Linking.openURL(params.url)
         }
      } catch (error) {
         console.error("there was an error opening the link ", error);
      }
   }
   return (
      <View style={styles.container}>
         <Image source={params.image} style={styles.image} />
         <Text style={styles.title}>{params.title}</Text>
         <Text style={styles.news}>{params.news}</Text>
         <Button title="للمشاهده اضغط هنا" onPress={openURL} />
      </View>
   );
}
export default moviePage
const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#FFF',
      padding: 16,
   },
   image: {
      width: 200,
      height: 300,
      borderRadius: 8,
      marginBottom: 16,
   },
   title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
      color: '#610D0D',
      textAlign: 'center',
   },
   description: {
      fontSize: 16,
      color: '#333',
      textAlign: 'center',
   },
});


