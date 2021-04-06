import {
    ADD_BOOKS
} from '../Types';

const initialState = {

    NewBooks: [],
 

};
const BooksReducer = (state = initialState, action) => {

    switch (action.type) {
       

        case ADD_BOOKS:

            return {
                ...state,
                NewBooks: [...state.NewBooks, action.Book]
            }


        default:
            return state;
    }
};



export default BooksReducer;