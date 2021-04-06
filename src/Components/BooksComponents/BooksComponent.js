import React from 'react';
import { Text, Platform, View, Image, StyleSheet } from 'react-native';
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
        <View onPress={props.onPress} style={[styles.rederItems, { backgroundColor: colorScheme === 'light' ? '#e4433f' : 'grey', height: props.description ? hp(48) : hp(35) }]}
            key={props.index}>

            {props.thumbnail === undefined ?
                <Image resizeMode='cover'
                    source={require('../../assets/noimage.png')}
                    style={[styles.Img, { height: props.description ? hp(20) : hp(10) }]}
                /> :

                <Image
                    source={{ uri: props.thumbnail }}
                    style={[styles.Img, { height: props.description ? hp(25) : hp(25) }]} resizeMode='contain'
                />}

            <View style={{ alignItems: 'center', marginTop: hp(3.5), marginHorizontal: wp(2) }} >
                <Text numberOfLines={6} lineBreakMode='clip' ellipsizeMode='clip' style={[{ width: wp(55), textAlign: 'center', fontSize: 15, fontWeight: 'bold', }, colorScheme === 'light' ? ThemeStyle.lightThemeText : ThemeStyle.darkThemeText]}>{props.title}</Text>
                <Text style={[{ textAlign: 'left', fontSize: 15, fontWeight: 'bold', }, colorScheme === 'light' ? ThemeStyle.lightThemeText : ThemeStyle.darkThemeText]}>{props.publishedDate}</Text>

            </View>
            {props.description &&
                <View style={styles.footer}>
                    <Text numberOfLines={6} lineBreakMode='clip' ellipsizeMode='clip' style={[{ width: wp(40), textAlign: 'center', fontSize: Platform.OS == 'ios' ? 13 : 10, fontWeight: 'bold', }, colorScheme === 'light' ? ThemeStyle.lightThemeText : ThemeStyle.darkThemeText]}>{props.description}</Text>

                </View>
            }
        </View>

    )
}

export default BooksComponent
const styles = StyleSheet.create({

    rederItems: {
        marginTop: hp(2),
        marginHorizontal: wp(1.5),
        alignItems: 'center',
        borderRadius: 10,



        ...Platform.select({
            ios: {
                width: wp(45),
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
                width: wp(45),
                elevation: 3.5,

            },
        }),
    },

    Img: {

        top: hp(2),

        borderRadius: 10,
        ...Platform.select({
            ios: {
                width: wp(40),

            },
            android: {
                width: wp(40),
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
