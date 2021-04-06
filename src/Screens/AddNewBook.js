import React, { useState, useEffect, useRef, } from 'react';
import { View, StyleSheet, ScrollView, Image, Platform, Alert, TouchableOpacity } from "react-native";
import { useColorScheme } from 'react-native-appearance';
import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import CustomButton from '../Components/CustomBotton'
import CustomTextInput from '../Components/CustomTextInput'
import Header from '../Components/Header'
import ErrorText from '../Components/ErrorText'
import { Formik } from 'formik';
import { validateBookData } from '../Constants/validationSchema/addBookValidation';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import { AddNewBookAction } from '../Redux/Actions/BooksActions';





export default AddNewBook = ({ navigation }) => {
    const colorScheme = useColorScheme()
    const [Img, setImage] = useState();
    const dispatch = useDispatch()

    const [imgError, setImgError] = useState(false)
    const formikRef = useRef();


    console.log('img', Img);

    useEffect(() => {

        CheckCamPermission()
    }, [])

    const CheckCamPermission = async () => {
        const { status, expires, permissions } = await Permissions.getAsync(
            Permissions.CAMERA,

        );
        if (status !== 'granted') {
            alert('Hey! You have not enabled selected permissions');
        }
    }


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);
        if (!result.cancelled) {

            setImage(result.uri)


        }
    };




    const _TakeImage = async () => {


        await Permissions.askAsync(Permissions.CAMERA);


        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            aspect: [4, 3],
            allowsEditing: false,
        });
        if (!result.cancelled) {
            formikRef.current?.setFieldValue('Img', result.uri);

            setImage(result.uri)

        }
    };


    const createThreeButtonAlert = () =>
        Alert.alert(
            'Add Image',
            "",
            [
                {
                    text: 'Choose From Library',
                    onPress: () => pickImage()
                },
                {
                    text: 'Cancel',

                    style: "cancel"
                },
                { text: 'Take Photo', onPress: () => _TakeImage() }
            ],
            { cancelable: false }
        );




    const _AddNewBook = (Title, date, Image, Description) => {
        dispatch(AddNewBookAction(Title, date, Image, Description)).then(
            () => {
                navigation.goBack()
            }
        )

    }

    return (
        <View>
            <Header title={'Add New Book'} hasLeft={true} goBack={() => {
                navigation.goBack()

            }} />
            <ScrollView>

                <Formik
                    initialValues={{
                        Title: '', date: '', Description: ''
                    }}
                    innerRef={formikRef}
                    enableReinitialize={true}
                    validationSchema={validateBookData}
                    onSubmit={(values, actions) => {
                        console.log('dd', Img);
                        if (Img === undefined) {
                            console.log('dd', Img);
                            setImgError(true)
                        } else {
                            _AddNewBook(values.Title, values.date, Img, values.Description)
                        }

                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue }) => (
                        <React.Fragment>
                            {Img === undefined ?
                                <TouchableOpacity onPress={() => createThreeButtonAlert()}>
                                    <Image source={require('../assets/noimage.png')} style={{ alignSelf: 'center', borderRadius: 20, borderColor: imgError ? 'red' : '#F8F8F8', borderWidth: 1, marginTop: 10 }} />

                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => createThreeButtonAlert()}>
                                    <Image source={{ uri: Img }} style={{ width: 250, height: 250, borderRadius: 20, alignSelf: 'center', marginTop: 10 }} />

                                </TouchableOpacity>}
                            {imgError &&
                                <View style={{ marginHorizontal: wp(10), top: Platform.OS == 'ios' ? hp(35.5) : hp(35.0), position: 'absolute', zIndex: 200 }} >
                                    <ErrorText message={'Choose an Image'} />
                                </View>
                            }


                            <View style={{

                                width: wp(85), alignSelf: 'center',
                                justifyContent: 'center', marginVertical: hp(4), padding: 5, paddingTop: 0,
                            }}>
                                <CustomTextInput

                                    onChangeText={(e) => setFieldValue('Title', e)}
                                    value={values.Title}
                                    style={[styles.BorderShadow, {
                                        marginVertical: 15,
                                        borderWidth: 1, borderColor: errors.Title ? 'red' : '#F8F8F8', alignSelf: 'center',
                                    }]}
                                    placeholder={'Title'}
                                    placeholderTextColor={'grey'}
                                    firstChild={null} secondChild={null} />

                                {errors.Title &&
                                    <View style={{ marginHorizontal: wp(6), top: Platform.OS == 'ios' ? hp(8.5) : hp(19.0), position: 'absolute', zIndex: 200 }} >
                                        <ErrorText message={errors.Title} />
                                    </View>
                                }



                                <CustomTextInput

                                    onChangeText={(e) => setFieldValue('Description', e)}
                                    value={values.Description}
                                    style={[styles.BorderShadow, {
                                        marginVertical: 16,
                                        borderWidth: 1, borderColor: errors.Description ? 'red' : '#F8F8F8', alignSelf: 'center',
                                    }]}
                                    placeholder={'Description'}
                                    placeholderTextColor={'grey'}
                                    firstChild={null} secondChild={null} />

                                {errors.Description &&
                                    <View style={{ marginHorizontal: wp(6), top: Platform.OS == 'ios' ? hp(19.4) : hp(19.4), position: 'absolute', zIndex: 200 }} >
                                        <ErrorText message={errors.Description} />
                                    </View>
                                }


                                <CustomTextInput

                                    onChangeText={(e) => setFieldValue('date', e)}
                                    value={values.date}
                                    style={[styles.BorderShadow, {
                                        marginTop: 15,
                                        borderWidth: 1, borderColor: errors.date ? 'red' : '#F8F8F8', alignSelf: 'center',
                                    }]}
                                    placeholder={'Date'}
                                    placeholderTextColor={'grey'}
                                    firstChild={null} secondChild={null} />

                                {errors.date &&
                                    <View style={{ marginHorizontal: wp(6), top: Platform.OS == 'ios' ? hp(29.8) : hp(29.8), position: 'absolute', zIndex: 200 }} >
                                        <ErrorText message={errors.date} />
                                    </View>
                                }
                            </View>


                            <CustomButton
                                onPress={(e) => {
                                    handleSubmit(e)
                                    setFieldValue('isSave', false)
                                }}
                                containerStyle={{ alignSelf: 'center', width: wp(40), height: Platform.OS == "ios" ? hp('6.5%') : hp('7.5%'), }}
                                extraStyle={[styles.BorderShadow, { width: wp(40), backgroundColor: '#d11a2a', }]}
                                textStyle={{ alignSelf: 'center', textAlign: 'center', top: hp('0.3%'), color: '#fff', fontWeight: 'bold', fontSize: (18) }}
                                title={'Add new book'}
                                hasIcon={false} />


                        </React.Fragment>
                    )}
                </Formik>
            </ScrollView>
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 200,
    },

    BorderShadow: {

        backgroundColor: 'white',
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
            },
            android: {
                elevation: 3,
            },
        }),
    }


});
