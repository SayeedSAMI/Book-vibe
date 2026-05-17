import { use, useState } from "react";
import { bookContext } from "../../Components/Context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from "../../Components/Ui/ReadWishList-Card/ReadList";
import Wishlist from "../../Components/Ui/ReadWishList-Card/Wishlist";


const Books = () => {

    const [sortingType, setSortingType] = useState("");
    console.log(sortingType);
    // const { storedBook, wishlistBook } = use(bookContext);
    // console.log(storedBook);
    return (

        <div className="container mx-auto mt-5">

            <div className="p-10 text-center bg-base-300 rounded-xl mb-10">
                <h1 className="text-3xl font-bold">Books</h1>
            </div>

            <div className="flex justify-center my-3">
                <div className="dropdown dropdown-hover ">
                    <div tabIndex={0} role="button" className="btn m-1 bg-green-500 text-white rounded-xl">Sort By {sortingType}</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setSortingType('pages')}  className="bg-green-400 text-white" ><a>Pages</a></li>
                        <li onClick={() => setSortingType('rating')} className="bg-green-400 text-white" ><a>Rating</a></li>
                    </ul>
                </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <ReadList sortingType={sortingType}></ReadList>
                </TabPanel>
                <TabPanel>
                    <Wishlist sortingType={sortingType}></Wishlist>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;