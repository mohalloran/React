export function selectBook(book){

    console.log('A Book has been selected',book.title);

    //selectBook is an ActionCreator,It needs to return an action ,
    //an object with a type property
    return {
       type:'BOOK_SELECTED',
       payload:book
    }
}