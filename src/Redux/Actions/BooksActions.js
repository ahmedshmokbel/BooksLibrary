import { get_request } from '../../Network/networkLayer'
import { ADD_BOOKS, } from '../Types';


export const GetBooksAction = () => async dispatch => {

    return new Promise((resolve, reject) => {
        try {
            get_request(`volumes?q=flowers+inauthor:keyes&&startIndex=0&&maxResults=2&&key=AIzaSyCxW6RZ3FseYeYxmvm3nw78E0a_93if7Jw`)
                .then(res => {
                    var BooksArray = res.items.map(item => {


                        return {

                            title: item.volumeInfo.title,
                            publishedDate: item.volumeInfo.publishedDate,
                            thumbnail: item.volumeInfo.imageLinks.thumbnail,
                            description: item.volumeInfo.description
                        }
                    })
                    resolve(BooksArray)
                 })
                .catch(err => {
                    console.log(' error:', err)


                })
        } catch (err) {

            reject(err);
        }
    });
}




export const AddNewBookAction = (Title, date, Image, Description) => async dispatch => {

    var book = { title: Title, publishedDate: date, thumbnail: Image, description: Description }
    dispatch({
        type: ADD_BOOKS,
        Book: book,
    });

}