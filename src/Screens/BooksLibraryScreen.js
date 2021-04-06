import React, { useState, useEffect, useCallback, ReactNode, } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator, useColorScheme, StatusBar, } from "react-native";
import { GetBooksAction, } from '../Redux/Actions/BooksActions'
import { useDispatch, useSelector, } from 'react-redux';
import { ThemeStyle } from '../Utilities/Theme';
import BooksComponent from '../Components/BooksComponents/BooksComponent'
import Header from '../Components/Header'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol,
} from 'react-native-responsive-screen';


export default BooksLibraryScreen = ({ navigation }) => {
    const BooksState = useSelector((state) => state.books);

    const dispatch = useDispatch()
 
    const [isLoading, setLoading] = useState(false)

    const colorScheme = useColorScheme();

    useEffect(() => {
       console.log('reducer', BooksState.Books);
        dispatch(GetBooksAction())

    }, [])



    const _renderItem = ({ item, index }) => {

        return (
            <BooksComponent

                index={index}

                initialNumToRender={10}
                navigation={navigation}
                {...item}
            />

        );
    }


    return (

        <View style={[styles.container, colorScheme === 'light' ? ThemeStyle.lightContainer : ThemeStyle.darkContainer]} >
            <Header title={'Books Library'} hasRight={true} hasLeft={false} onPress={() => {
                navigation.navigate('NewBook')

            }} />
            <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
                {isLoading &&
                    <ActivityIndicator size='large' color='black' />
                }
                <>
                    <FlatList

                        data={BooksState.Books}
                        extraData={BooksState.Books}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={_renderItem}
                        onEndReachedThreshold={1}
                    />

                </>

            </View>

        </View >

    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: hp(15.5)
    },

});
