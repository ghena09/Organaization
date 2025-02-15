import { useNavigation } from "expo-router"
import { TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView, View, Text } from "react-native";
import { movieData } from "../data/Data";

const size = Dimensions.get("screen")


const MovieNavigate = (props) => {

    const navigation = useNavigation();
    return (
        <ScrollView horizontal style={styles.ScrollViewHorizontal}>
            {movieData.map((news, index) => (
                <TouchableOpacity onPress={() => { 
                  navigation.navigate("moviePage", 
                {...news }) 
                }} key={index} style={styles.newsContainer}>
                    <Image source={news.image} style={styles.newsImage} />
                    <View style={styles.newsTextContainer}>
                        <Text style={styles.newsTitle}>{news.title}</Text>
                        <Text style={styles.newsHeadNews}>{news.headNews}</Text>
                        {news.news.slice(0, 4).map((line, lineIndex) => (
                            <Text key={lineIndex} style={styles.newsText}>
                                {line}
                            </Text>
                        ))}
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}
export default MovieNavigate

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
    flexDirection: 'row', // Arrange image and text side by side
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 8, // Reduce padding for smaller container
    marginRight: 8, // Reduce margin between news items
    alignItems: 'flex-start',
    width: size.width*0.84, // Set a fixed width
    // height: "60%",
  },
  newsImage: {
    width: 80, // Smaller image
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
    // backgroundColor:'black'
  },
  spase:{
    margin:10
  },
  spaseEnd:{
    margin:20
  }
});
