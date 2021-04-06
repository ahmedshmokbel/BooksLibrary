import React from "react";
import { StyleSheet, View, Text, TouchableNativeFeedback, ActivityIndicator, Platform, I18nManager } from "react-native";
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
 const {isRTL} = I18nManager;
 
export default class CustomButton extends React.PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <TouchableNativeFeedback disabled={this.props.disabled} onPress={!this.props.loading ? this.props.onPress : null}>
          <View style={[styles.button, this.props.extraStyle, this.props.disabled === true ? styles.unActive : styles.tt]}>
            {this.props.loading ? <ActivityIndicator color="#FFFFFF" size="large" /> :
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', alignSelf: 'stretch', }}>
                <Text style={[styles.text, this.props.textStyle]}>{this.props.disabled === true ? this.props.disabledText : this.props.title}</Text>
                {this.props.hasIcon &&
                  <Icon name={this.props.icon} size={20} color={this.props.iconColor || '#000000'} />
                }
              </View>
            }
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    justifyContent: "center",
    alignContent: "stretch",
    width: wp('40%'),
  },
  button: {
    //marginVertical:10,
    alignItems: "center",
    alignSelf:'center',
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#FDBB64",
    borderColor: "#ffff",
    borderWidth: 1,
    fontSize: 15,
    //padding:10,
    borderRadius: 29,
    flex: 1,
     width:wp('60%'),
     height:hp('40')
  }, unActive: {
    backgroundColor: "gray",
    borderColor: "gray",
  },
  text: {
    color: "rgb(49,74,86)",
    fontSize: (18),
    // fontFamily:Platform.OS =='ios' ?"DINNextLTW23-Light":'Din-Light',
    fontFamily: !I18nManager.isRTL ? Platform.OS == 'ios' ? 'Rockwell' : 'ROCK' : Platform.OS == 'ios' ? 'Rockwell-Bold' : 'ROCK',
    marginTop: !isRTL?-5:0
  },
  countContainer: {
    alignItems: "center",
  },
  countText: {
    color: "#FF00FF"
  }
});
