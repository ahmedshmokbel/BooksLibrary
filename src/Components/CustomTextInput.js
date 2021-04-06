import React from 'react';
import { Text, View,TextInput,StyleSheet,Dimensions ,I18nManager,TouchableOpacity} from 'react-native';
const {isRTL} = I18nManager;
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol,
} from 'react-native-responsive-screen';
const {width,height} = Dimensions.get('window');

const CustomTextInput = ({
    placeholder,
    onChangeText,
    style,
    onFocus,
    firstChild,
    secondChild,
    value,autoCapitalize,
    keyboardType,editable,onEndEditing,showPasswordPress,multiline,secureTextEntry,placeholderTextColor,refs,returnKeyLabel,returnKeyType,onSubmitEditing
}) => (
    <View style={[styles.inputContainer,style]}>
        <View style={{flexDirection:'row',alignItems:'center',flex:4,marginLeft:width*0.03}}>
        {firstChild}
        <View style={{marginLeft:width*0.03,width:width*0.5}}>
        <TextInput secureTextEntry={secureTextEntry}
         onEndEditing={onEndEditing} multiline={multiline} 
         returnKeyLabel={returnKeyLabel}
         returnKeyType={returnKeyType}
         onSubmitEditing={onSubmitEditing}
         value={value} 
         keyboardType={keyboardType} 
         editable={editable}  
         onChangeText={onChangeText} 
         onFocus={onFocus}
         style ={[isRTL == true ? styles.rightTxt : styles.leftTxt,{flex:1}]} 
         placeholder={placeholder}
         placeholderTextColor={placeholderTextColor}
         ref={refs}
         autoCapitalize={autoCapitalize}
         />
         </View>
        </View>
        <TouchableOpacity onPress={showPasswordPress} style={{flex:.5,alignItems:'flex-end',paddingRight:width*0.05}}>
            {secondChild}
        </TouchableOpacity>
        
    </View>
);

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
        marginTop:(height>width)?height*0.02:height*0.01,
        height:(height>width)?height*0.07:width*0.07,
        justifyContent:"space-between",
        alignItems:'center',
        borderRadius:30,
        backgroundColor:"#ffffff",
        paddingLeft:wp(1),
    },rightTxt:{
        textAlign:"right",
        color:'#000000',
        height:hp(5),
        fontFamily:Platform.OS == 'ios' ? 'Rockwell' : 'ROCK',
    },leftTxt:{
        textAlign:"left",
        color:'#000000',
        height:hp(30),
        fontFamily:Platform.OS == 'ios' ? 'Rockwell' : 'ROCK',
    },
});
export default CustomTextInput;