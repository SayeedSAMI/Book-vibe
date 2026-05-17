import { useContext, useEffect, useState } from 'react';
import { bookContext } from '../../Context/BookContext';


const ReadList = ({ sortingType }) => {
    // const { storedBook } = use(bookContext);
    const { readList } = useContext(bookContext);
    const [filterReadList, setFilterReadList] = useState(readList);
    useEffect(() => {
        if (sortingType) {
            if (sortingType === "pages") {
                const sortedData = [...readList].sort((a, b) => a.totalPages - b.totalPages)
                console.log(sortedData);
                setFilterReadList(sortedData);
            } else if (sortingType === 'rating') {
                const sortedData = [...readList].sort((a, b) => a.rating - b.rating)
                setFilterReadList(sortedData);
            }
        }
    }, [sortingType, readList])

    if (filterReadList.length === 0) {
        return (
            <div className="h-[50vh] bg-gray-100 flex items-center justify-center ">
                <h2 className="font-bold text-3xl">No read list data found</h2>
            </div>
        );
    }

    return (
        <div>
            {
                filterReadList.map(bookdata => (

                    <div key={bookdata.bookId} className="flex mt-[60px] gap-[48px] container mx-auto items-center border-0 shadow p-4 rounded-2xl">
                        <figure className="p-5 bg-base-200 flex justify-center rounded-xl  ">
                            <img src={bookdata.image} alt="" className="h-[200px]" />
                        </figure>
                        <div className="flex-1">
                            <h1 className="text-xl font-bold">{bookdata.bookName}</h1>
                            <p className="text-xl font-medium">By: {bookdata.author}</p>

                            <div className="flex gap-2.5">
                                <h1 className="font-bold text-[16px] ">Tag</h1>
                                {
                                    bookdata.tags?.map((t, index) => (<button key={index} className="badge badge-soft badge-success">#{t}</button>))
                                }
                            </div>
                            <div className="divider"></div>
                            <div className="">
                                <div className="flex">
                                    <h1 className="font-normal text-[16px] flex-1">Number of Pages:</h1>
                                    <p className="font-semibold text-[16px] flex-1">{bookdata.totalPages}</p>
                                </div>
                                <div className="flex ">
                                    <h1 className="font-normal text-[16px] flex-1">Publisher:</h1>
                                    <p className="font-semibold text-[16px] flex-1 ">{bookdata.publisher}</p>
                                </div>
                                <div className="flex">
                                    <h1 className="font-normal text-[16px] flex-1 ">Year of Publishing:</h1>
                                    <p className="font-semibold text-[16px] flex-1 ">{bookdata.yearOfPublishing}</p>
                                </div>
                                <div className="flex ">
                                    <h1 className="font-normal text-[16px] flex-1 ">Rating:</h1>
                                    <p className="font-semibold text-[16px] flex-1 ">{bookdata.rating}</p>
                                </div>
                            </div>

                        </div>
                    </div >

                ))
            }
        </div>
    );
};

export default ReadList;