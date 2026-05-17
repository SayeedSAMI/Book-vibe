import { Children, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addReadListToLocalDB, addWishListToLocalDB, getAllReadListFromLocalDB, getAllWishListFromLocalDB } from "../utils/localDB";


export const bookContext = createContext();
// const [storedBook, setStoredBook] = useState([]);
export const BookProvider = ({ children }) => {

    const [readList, setReadList] = useState(() => getAllReadListFromLocalDB());


    // useEffect(() => {
    //     const getReadListFromLocalDB = getAllReadListFromLocalDB();
    //     console.log(getReadListFromLocalDB);
    // }, [])


    const handleMarkAsRead = (currentBook) => {
        addReadListToLocalDB(currentBook);
        const isExistBook = readList.find((book) => book.bookId === currentBook.bookId);
        // console.log(readList);

        if (isExistBook) {
            toast.error('This Book already added');
        } else {
            setReadList([...readList, currentBook]);
            toast.success(`${currentBook.bookName} added to the Booklist`);
            // console.log(storedBook);
        }



    }
    const [wishlistBook, setWishlistBook] = useState(() => getAllWishListFromLocalDB());


    const handleAddWishlist = (currentBook) => {
        addWishListToLocalDB(currentBook);
        const isExistInReadBook = readList.find(data => data.bookId === currentBook.bookId)
        if (isExistInReadBook) {
            toast.warning('This Book is already in ReadList');
            return;
        }


        const isExistBook = wishlistBook.find((book) => book.bookId === currentBook.bookId);
        // console.log(storedBook);

        if (isExistBook) {
            toast.error('This Book already added to wishlist');
        } else {
            setWishlistBook([...wishlistBook, currentBook]);
            toast.success(`${currentBook.bookName} added to the wishlist`);
            // console.log(storedBook);
        }



    }



    const data = {
        readList, setReadList, handleMarkAsRead, wishlistBook, setWishlistBook, handleAddWishlist
    }
    return <bookContext.Provider value={data}>
        {children}
    </bookContext.Provider>


}
export default BookProvider;