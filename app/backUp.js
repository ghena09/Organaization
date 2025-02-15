import { Button, ScrollView, StyleSheet, StyleShesssssset, Text, View } from 'react-native'
import { useNavigation } from 'expo-router';
import { getBackgroundColorAsync } from 'expo-system-ui';
import SearchBox from './SearchBox';
import React, { useState } from 'react';
import News from './News'
import DropdownMenu, { MenuOption } from '../components/DropdownMenu';
import { Image } from 'react-native-web';
import Images from '../assets/images/images';

const home = () => {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);

    const DropdownMenunRender = () => {
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
                <MenuOption onSelect={() => {

                    setVisible(false);
                }}>
                    <Text> مسلسلات عربيه</Text>
                </MenuOption>
                <MenuOption onSelect={() => {

                    setVisible(false);
                }}>
                    <Text>مسلسلات اجنبيه</Text>
                </MenuOption>
                <MenuOption onSelect={() => {

                    setVisible(false);
                }}>
                    <Text> مسلسلات تركيه</Text>
                </MenuOption>
            </DropdownMenu>
        )
    }

    const DropdownMenunRenderr = () => {
        return (
            <DropdownMenu
                visible={visible2}
                handleOpen={() => setVisible2(true)}
                handleClose={() => setVisible2(false)}
                trigger={
                    <View style={styles.triggerStylee}>
                        <Text style={styles.triggerTextt}>افلام</Text>
                    </View>
                }
            >
                <MenuOption onSelectt={() => {

                    setVisible2(false);
                }}>
                    <Text>افلام عربيه</Text>
                </MenuOption>
                <MenuOption onSelectt={() => {

                    setVisible2(false);
                }}>
                    <Text>افلام اجنبيه</Text>
                </MenuOption>
                <MenuOption onSelectt={() => {

                    setVisible2(false);
                }}>
                    <Text>افلام تركيه</Text>
                </MenuOption>
            </DropdownMenu>
        )

    }

    return (
        <View style={styles.ScreenContainer}>
            <View style={styles.CardContainer}>
                <View style={styles.box}>
                    <SearchBox />
                </View>
                <Button title='next' onPress={() => navigation.navigate("screenpage")} />
                <View style={styles.coo}>
                    <DropdownMenunRender />
                    <DropdownMenunRenderr />
                </View>
            </View>
            <Text style={StyleSheet.title}>
                المقترحات
            </Text>
            {renderNews()}
            <News />
        </View>

    )

}

export default home

const styles = StyleSheet.create({
    ScreenContainer: {
        height: "100%",
        width: "100%",
        // flix: 1,
        backgroundColor: "#610D0D",
    },
    CardContainer: {
        height: 400,
        backgroundColor: "#610D0D",
    },
    // box: {
    //     flex: 1,
    //     borderColor: 'black',
    //     borderWidth: 2,
    // },
    triggerStyle: {
        height: 40,
        backgroundColor: "#610D0D",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 100,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        borderBottomWidth: 2,
        borderColor: "#000"
    },
    triggerText: {
        fontSize: 14,
    },
    triggerStylee: {
        height: 40,
        backgroundColor: "#610D0D",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 100,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        borderBottomWidth: 2,
        borderColor: "#000"
    },
    triggerTextt: {
        fontSize: 14,
    },
    coo: {
        flexDirection: 'row',
        alignItems: "center",
        // backgroundColor:'#fff',
        justifyContent: "center",
    }
})

const renderNews = () => {
    return (
        <ScrollView horizontal>
            {NewsData.map((news, index) => (
                <News
                    key={index}
                    title={news.title}
                    headNews={news.headNews}
                    news={news.news}
                    image={news.image}
                />

            ))}
        </ScrollView>
    )
}

const NewsData = [
    {
        title: " حب للايجار",
        headNews: "تركي مسلسل",
        news: "يقرر جد عمر بيع القصر ولكن زوجة ابنه ناريمان تحاول منع ذلك. يمنحها الجد مهلة 6 أشهر كفرصة لتقوم بتزويج عمر. تبدأ ناريمان بالبحث عن عروس لعمر وتتعرف على دفنة وتعرض عليها المال مقابل أن تتزوج من عمر ليوم واحد فقط. فهل ستوافق؟",
        // image:Images.keralik
    },

]