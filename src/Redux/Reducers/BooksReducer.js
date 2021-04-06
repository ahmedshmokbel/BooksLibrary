import {
    GET_BOOKS_FAILED, GET_BOOKS, GET_BOOKS_SUCCESS, ADD_BOOKS
} from '../Types';

const initialState = {

    Books: [],
    isLoading: false,

};
const BooksReducer = (state = initialState, action) => {

    switch (action.type) {


        case GET_BOOKS:

            return {
                ...state,
                isLoading: true
            };

        case GET_BOOKS_SUCCESS:

            return {
                ...state,
                Books: action.Books,
                isLoading: false
            };



        case GET_BOOKS_FAILED:

            return {
                ...state,

                isLoading: false
            };

        case ADD_BOOKS:

            return {
                ...state,
                Books: [...state.Books, action.Book]
            }


        default:
            return state;
    }
};



export default BooksReducer;