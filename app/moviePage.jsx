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
      
            <View style={styles.contain} >
            <Text style={styles.title}>{params.title}</Text>
            <Text style={styles.description}>{params.news}</Text>
            </View>
            <Button title="للمشاهده اضغط هنا" onPress={openURL} />
          </View>
        );
}
export default moviePage
const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     backgroundColor:'#a75c5c',
 
     padding: 16,
   },
   image: {
     width: 485,
     height: 300,
     borderRadius:10,
     marginBottom: 16,
     marginTop: 0,
     position: 'absolute',
     width:200,
     borderColor:"back",
     borderWidth:3,
   },
   title: {
     fontSize: 24,
     fontWeight: 'bold',
     color: '#610D0D',
     textAlign: 'center',
   },
   description: {
     alignSelf:'center',    
     color: 'black',
     textAlign: 'center',
     fontWeight:'bold',
   },
   contain:{
     alignContent:'space-evenly',
     flexDirection:'column',
     marginTop:300,
   }
 });
 

