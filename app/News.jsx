import { Image, StyleSheet, Text, View, } from "react-native"
import Images from "../assets/images/images"

const News = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image style={styles.img} sourse={props.image?.() || Images.akhe()} />
                <View style={styles.titleHed}>
                    <Text style={styles.title}>{props.title || "Title"}</Text>
                    <Text style={styles.minTitle}>{props.headNews || ""}</Text>
                </View>
            </View>
            <Text numberOfLines={3} lineBreakMode="clip" style={styles.news}>{props.news || "No news"}</Text>
        </View>

    )
}

export default News

const styles = StyleSheet.create({
    container: {
        height: 250,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5,
        margin: 10,
    },
    top: {
        flexDirection: 'row',
        flex: 0.8,
    },
    titleHed: {

        flex: 1,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'cemnter',
        margin: 5,
        color: 'black',
    },
    minTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right',
        margin: 5,
        color: 'black',
    },
    img: {
        height: "100%",
        widthh: "50%",
        margin: 10,
        resizeMode: 'contain',
        backgroundColor: "#4545",
    },
    news: {
        flex: 1,
        padding: 10,
        fontSize: 20,
        color: 'black',
        height:60        
    },
})