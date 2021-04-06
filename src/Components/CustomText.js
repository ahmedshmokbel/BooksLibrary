import React from 'react'
import { StyleSheet, Text, Platform, I18nManager, Dimensions } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol,
} from "react-native-responsive-screen";
const { isRTL } = I18nManager;
const { width, height } = Dimensions.get('window');
const CustomText = ({ text, extraStyle, numberOfLines }) => {
    return (
        <Text style={[styles.text, extraStyle]} numberOfLines={numberOfLines}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: !isRTL ? "left" : "auto",
        marginTop: hp('1%'),

    }
})


export default CustomText

