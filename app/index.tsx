import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import Images from '@/assets/images/images';
import { getBackgroundColorAsync } from 'expo-system-ui';

const index = () => {

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('home')
    }, 1000)
  }, [])

  return (
    <View style={styles.ZcreenContainer}>
      <Image source={Images.icon()} style={styles.headerImage} />

    </View>

  )
}

export default index


const styles = StyleSheet.create({
  ZcreenContainer: {
    flex: 1,
    backgroundColor: "#DEDFBF",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  headerImage: {
    width: 900,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20
  },




})
