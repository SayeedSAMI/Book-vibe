
import { use } from "react";
import { useLoaderData, useParams } from "react-router";
import { bookContext } from "../../Components/Context/BookContext";


const Bookdetails = () => {

    const params = useParams();

    const data = useLoaderData();

    const { handleMarkAsRead,handleAddWishlist } = use(bookContext);
    const expectedBook = data.find(d => d.bookId == params.id);


    const {  bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = expectedBook;





    return (
        <div className="flex mt-[60px] gap-[48px] container mx-auto items-center">
            <figure className="flex-1 p-10 bg-base-200 flex justify-center rounded-4xl  ">
                <img src={image} alt="" className="h-[550px]" />
            </figure>
            <div className="flex-1 space-y-4">
                <h1 className="text-5xl font-bold">{bookName}</h1>
                <p className="text-2xl font-medium">By: {author}</p>
                <div className="divider"></div>
                <p className="text-2xl font-medium">{category}</p>
                <div className="divider"></div>
                <p className="font-normal text-[16px]"><span className="font-bold text-[16px]">Review: </span>{review}.</p>
                <div className="flex gap-2.5">
                    <h1 className="font-bold text-[16px] ">Tag</h1>
                    {
                        tags.map((t, index) => (<button key={index} className="badge badge-soft badge-success">#{t}</button>))
                    }
                </div>
                <div className="divider"></div>
                <div className="space-y-2">
                    <div className="flex">
                        <h1 className="font-normal text-[16px] flex-1">Number of Pages:</h1>
                        <p className="font-semibold text-[16px] flex-1">{totalPages}</p>
                    </div>
                    <div className="flex ">
                        <h1 className="font-normal text-[16px] flex-1">Publisher:</h1>
                        <p className="font-semibold text-[16px] flex-1 ">{publisher}</p>
                    </div>
                    <div className="flex">
                        <h1 className="font-normal text-[16px] flex-1 ">Year of Publishing:</h1>
                        <p className="font-semibold text-[16px] flex-1 ">{yearOfPublishing}</p>
                    </div>
                    <div className="flex ">
                        <h1 className="font-normal text-[16px] flex-1 ">Rating:</h1>
                        <p className="font-semibold text-[16px] flex-1 ">{rating}</p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button onClick={() => handleMarkAsRead(expectedBook)} className="btn btn-outline ">Mark as Read</button>
                    <button className="btn btn-info text-white" onClick={() => handleAddWishlist(expectedBook)}>Add to Wishlist</button>
                </div>

            </div>
        </div >
    );
};

export default Bookdetails;