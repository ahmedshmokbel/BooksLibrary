import { get_request } from '../../Network/networkLayer'
import { ADD_BOOKS, GET_BOOKS, GET_BOOKS_FAILED, GET_BOOKS_SUCCESS, } from '../Types';


export const GetBooksAction = () => async dispatch => {



    const API_KEY = process.env.REACT_APP_BOOKS_API_KEY;
    console.log(API_KEY);
    return new Promise((resolve, reject) => {
        try {
            get_request(`volumes?q=flowers+inauthor:keyes&&startIndex=0&&maxResults=2&&key=AIzaSyCxW6RZ3FseYeYxmvm3nw78E0a_93if7Jw`)
                .then(res => {
                    var BooksArray = res.items.map(item => {

                        return {
                            // ...item,
                            volumeInfo: {
                                title: item.volumeInfo.title,
                                publishedDate: item.volumeInfo.publishedDate,
                                imageLinks: { thumbnail: item.volumeInfo.imageLinks.thumbnail },
                                description: item.volumeInfo.description
                            }

                        }
                    })

                    console.log(BooksArray);
                    dispatch({
                        type: GET_BOOKS_SUCCESS,
                        Books: BooksArray,
                    });
                    resolve(BooksArray)

                })
                .catch(err => {
                    console.log(' error:', err)
                    dispatch({ type: GET_BOOKS_FAILED })

                })
        } catch (err) {
            dispatch({ type: GET_BOOKS_FAILED })
            reject(err);
        }
    });
}




export const AddNewBookAction = (Title, date, Image, Description) => dispatch => {

    var book = { volumeInfo: { title: Title, publishedDate: date, imageLinks: { thumbnail: Image }, description: Description } }
    dispatch({
        type: ADD_BOOKS,
        Book: book,
    });
}