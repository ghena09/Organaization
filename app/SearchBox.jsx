import { simagesetBackgroundColorAsync } from "expo-system-ui"
import { Image, StyleSheet, TextInput, View } from "react-native"
import Images from './../assets/images/images';

const SearchBox = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.SearchContainer}>
                <Image style={styles.img} source={Images.search()} />
                <TextInput style={styles.TextInput}
                    placeholder="Search..."
                    placeholderTextColor="black"
                />
            </View>
        </View>
    )

}
export default SearchBox
const styles = StyleSheet.create({
    Container: {
        alignSelf: 'center',
        height: 60,
        width: "80%",
        backgroundColor: "white",
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 0,

    },
    SearchContainer: {
        flexDirection: 'row',
        alignItems: "center"
    },
    TextInput: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: 'black',
        height: 50

    },
    img: {

    }

})