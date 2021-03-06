import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import BooksLibraryScreen from '../Screens/BooksLibraryScreen'
import AddNewBook from '../Screens/AddNewBook';
const BooksLibraryStack = createStackNavigator()
var Theme = ''

export const MainNav = (props) => (
    <BooksLibraryStack.Navigator headerMode='none' >
        <BooksLibraryStack.Screen name='Books'
            component={BooksLibraryScreen}
            //if using the default header
            options={{
                title: 'Books Library',
                headerTintColor: Theme === 'light' ? '#000000DD' : 'white',
                headerStyle: { backgroundColor: Theme === 'light' ? 'white' : '#000000DD', },
                headerBackTitleVisible: false,

            }} />


        <BooksLibraryStack.Screen name='NewBook'
            component={AddNewBook}

            options={{
                title: 'Add new Book',
                headerTintColor: Theme === 'light' ? '#000000DD' : 'white',
                headerStyle: { backgroundColor: Theme === 'light' ? 'white' : '#000000DD', },
                headerBackTitleVisible: false,
            }} />


    </BooksLibraryStack.Navigator>
)

