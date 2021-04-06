import React from 'react';
import { Text, Dimensions, Platform, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native-appearance';
import { ThemeStyle } from '../../Utilities/Theme';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol,
} from 'react-native-responsive-screen';

var colorSchemeStyle
const BooksComponent = (props) => {
    const colorScheme = useColorScheme()
    colorSchemeStyle = colorScheme
    return (
        <View onPress={props.onPress} style={[styles.rederItems, { height: props.volumeInfo.description ? hp(35) : hp(20) }]}
            key={props.index}>

            {props.volumeInfo.imageLinks === undefined ?
                <Image resizeMode='contain'
                source={require('../../assets/noimage.png')}
                style={[styles.Img, { height: props.volumeInfo.description ? hp(20) : hp(15) }]}
                /> :

                <Image
                    source={{ uri: props.volumeInfo.imageLinks.thumbnail }}
                    style={[styles.Img, { height: props.volumeInfo.description ? hp(20) : hp(15) }]} resizeMode='contain'
                />}

            <View style={{ marginTop: hp(5), marginHorizontal: wp(2) }} >
                <Text numberOfLines={6} lineBreakMode='clip' ellipsizeMode='clip' style={[{ width: wp(55), textAlign: 'left', fontSize: 15, fontWeight: 'bold', }, colorScheme === 'light' ? ThemeStyle.lightThemeText : ThemeStyle.darkThemeText]}>{props.volumeInfo.title}</Text>
                <Text style={[{ textAlign: 'left', fontSize: 15, fontWeight: 'bold', }, colorScheme === 'light' ? ThemeStyle.lightThemeText : ThemeStyle.darkThemeText]}>{props.volumeInfo.publishedDate}</Text>

            </View>
            {props.volumeInfo.description &&
                <View style={styles.footer}>
                    <Text numberOfLines={6} lineBreakMode='clip' ellipsizeMode='clip' style={[{ width: wp(80), textAlign: 'left', fontSize: 15, fontWeight: 'bold', }, colorScheme === 'light' ? ThemeStyle.lightThemeText : ThemeStyle.darkThemeText]}>{props.volumeInfo.description}</Text>

                </View>
            }
        </View>

    )
}

export default BooksComponent
const styles = StyleSheet.create({

    rederItems: {
        marginTop: hp(5),
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: colorSchemeStyle === 'light' ? 'f7d9d9' : '#f7d9d9',


        ...Platform.select({
            ios: {
                width: wp(90),
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
            },
            android: {
                //  width: 390,
                width: '95%',
                elevation: 3.5,

            },
        }),
    },

    Img: {

        top: hp(2),

        borderRadius: 10,
        ...Platform.select({
            ios: {
                width: wp(35),

            },
            android: {
                width: '100%',
            },
        }),

    },


    footer: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        width: '100%',
        position: 'absolute',
        zIndex: 50, padding: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'rgba(242, 242, 242,0.7)',



        ...Platform.select({
            ios: {
                bottom: 0.1,

            },
            android: {
                //  top: height / 5.26
                bottom: 0.01
            },
        }),
    }
    ,


});
