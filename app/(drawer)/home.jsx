import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import News from '../News';
import DropdownMenu, { MenuOption } from '../../components/DropdownMenu';
import Images from '../../assets/images/images';
import { movieData, NewsData } from '../../data/Data';
import MovieNavigate from '../movieNavigate';
import SeriesesNavigate from '../seriesesNavigate';
import SearchBox from './../SearchBox';
const size = Dimensions.get("screen")

const Home = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const Options = [
    { label: "مسلسلات عربيه", category: "مسلسلات عربيه" },
    { label: "مسلسلات اجنبيه", category: "مسلسلات اجنبيه" },
    { label: "مسلسلات تركيه", category: "مسلسلات تركيه" }
  ];
  
  const DropdownMenuRender = () => {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false);
  
    return (
      <DropdownMenu
        visible={visible}
        handleOpen={() => setVisible(true)}
        handleClose={() => setVisible(false)}
        trigger={
          <View style={styles.triggerStyle}>
            <Text style={styles.triggerText}>مسلسلات</Text>
          </View>
        }
      >
        {Options.map((option, index) => (
          <MenuOption 
            key={index} 
            onSelect={() => navigation.navigate('CategoryScreen', { category: option.category })}
          >
            <Text>{option.label}</Text>
          </MenuOption>
        ))}
      </DropdownMenu>
    );
  };

  const menuOptions = [
    { label: "افلام عربيه", category: "فيلم عربي" },
    { label: "افلام اجنبيه", category: "فيلم اجنبي" },
    { label: "افلام تركيه", category: "فيلم تركي" }
  ];
  const DropdownMenuRender2 = () => {
    const navigation = useNavigation();
    const [visible2, setVisible2] = useState(false);
  
    return (
      <DropdownMenu
        visible={visible2}
        handleOpen={() => setVisible2(true)}
        handleClose={() => setVisible2(false)}
        trigger={
          <View style={styles.triggerStyle}>
          <Text style={styles.triggerText}>افلام</Text>
        </View>
        }
      >
        {menuOptions.map((option, index) => (
          <MenuOption 
            key={index} 
            onSelect={() => navigation.navigate('MoviesListScreen', { category: option.category })}
          >
            <Text>{option.label}</Text>
          </MenuOption>
        ))}
      </DropdownMenu>
    );
  };
  return (
    <View style={styles.screenContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.box}>
          <SearchBox />
        </View>
        <View style={styles.menuContainer}>
          <DropdownMenuRender />
          <DropdownMenuRender2 />
        </View>
      </View>
      <Text style={styles.sectionTitle}>المقترحات</Text>
      <SeriesesNavigate/>
      <View style={styles.spase}/>
      <MovieNavigate/>
      <View style={styles.spaseEnd}/>
    </View>
  );

 
};

export default Home;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#610D0D',
    padding: 16,
  },
  cardContainer: {
    backgroundColor: '#610D0D',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  box: {
    marginBottom: 16,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  triggerStyle: {
    height: 40,
    backgroundColor: '#610D0D',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    borderBottomWidth: 2,
    borderColor: '#000',
    marginHorizontal: 8,
    backgroundColor: "white",
  },
  triggerText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'right',
  
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 16,
    textAlign: 'right',
  },
  newsContainer: {
    flexDirection: 'row', 
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 8, 
    marginRight: 8, 
    alignItems: 'flex-start',
    width: size.width*0.84,
  },
  newsImage: {
    width: 80, 
    height: 95,
    resizeMode: 'cover',
    borderRadius: 8,
    marginRight: 8,
  },
  newsTextContainer: {
    flex: 1,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
    textAlign: 'right',
  },
  newsHeadline: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
    textAlign: 'right',
  },
  newsText: {
    fontSize: 12,
    color: '#555',
    marginBottom: 2,
    textAlign: 'right',
  },
  ScrollViewHorizontal:{
    width:'100%',
  },
  spase:{
    margin:10
  },
  spaseEnd:{
    margin:20
  }
});