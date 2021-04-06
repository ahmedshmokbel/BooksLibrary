import React, { useState, useEffect, } from 'react';
import NetInfo from "@react-native-community/netinfo";
import { NavigationContainer, } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';

import NoInternetHeader from '../Components/NoInternetHeader'
import { MainNav } from './MainNavigation';
import { updateConnectionStatus } from '../Redux/Actions/ConnectionActions';
import { useColorScheme } from 'react-native-appearance';
import { useDispatch } from 'react-redux';

export default AppContainer = (props) => {
    //state 
    const [online, setOnline] = useState(true);
    const colorScheme = useColorScheme()
    const dispatch = useDispatch()
    
     useEffect(() => {
        // Subscribe for connection status
        const unsubscribe = NetInfo.addEventListener(state => {
            dispatch(updateConnectionStatus(state.isCoddddnnected));
            setOnline(state.isConnected);
        });
        return () => {
            unsubscribe();
        };
    }, [online])
    return (
        <NavigationContainer >
            {online ? null : <NoInternetHeader />}
            <MainNav theme={colorScheme}  />
        </NavigationContainer >
    )
}


