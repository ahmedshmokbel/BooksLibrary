import React from 'react'
import { StyleSheet, Text, View, Platform, I18nManager, Alert } from 'react-native'
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Header = (props) => {
    const navigation = useNavigation()


    return (
        <View style={[styles.HeaderContainer]}>
            {props.hasLeft ?
                <TouchableOpacity onPress={props.goBack}
                    style={{ marginTop: Platform.OS == 'ios' ? hp('6%') : hp('0%'), marginLeft: wp(5) }}>
                    <Icon name={'arrow-back'} size={30} color='black' />


                </TouchableOpacity>
                :
                <View style={{ marginRight: wp(15) }} />
            }
            <Text style={styles.headerText}>{props.title}</Text>

            {props.hasRight ?
                <TouchableOpacity onPress={props.onPress}

                    style={{ marginTop: Platform.OS == 'ios' ? hp('7%') : hp('0%'), marginRight: wp(5) }}>
                    <Icon name={'add'} size={30} color='black' />

                </TouchableOpacity>
                :
                <View style={{ marginRight: wp(15) }} />
            }
        </View>
    )
}


const styles = StyleSheet.create({
    HeaderContainer: {
        flexDirection: 'row',
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: Platform.OS == 'ios' ? hp('13%') : hp('10%'),
        //position:'absolute'
    },
    headerText: {
        fontSize: 18,
        color: 'black',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: Platform.OS == 'ios' ? hp('6%') : 0

    }
})

export default Header
