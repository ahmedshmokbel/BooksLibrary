import React from 'react';
import { Text, View, Dimensions, I18nManager } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/AntDesign";
 const {isRTL} = I18nManager;

 const ErrorText = ({
    message,
    extraStyle,
    numberOfLines
}) => (
    <View style={{flexDirection:'row',marginTop:hp('1%'),justifyContent:'flex-start',alignItems:"center"}}>
        {message?<Icon name="exclamationcircleo" size={15} color={extraStyle? "#f62433" :"#f62433"} />:null}
        <Text style={{color:'#f62433'},extraStyle}>{" "}</Text>
        <Text numberOfLines={numberOfLines} style={[{color:'#f62433',top:2.5,fontSize:(14),fontFamily:!isRTL?Platform.OS =='ios' ?'Rockwell':'ROCK':Platform.OS =='ios'?'Rockwell-Bold':'rockb'},extraStyle]}>{message}</Text>
    </View>
);

export default ErrorText;
