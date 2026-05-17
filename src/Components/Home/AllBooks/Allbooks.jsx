import { use } from "react";
import BookCard from "../../Ui/BookCard/BookCard";

const bookPromise = fetch('/booksData.json').then(res => res.json());

const Allbooks = () => {

    const booksData = use(bookPromise);
    // console.log(booksData);
    return (
        <div className="mb-8 container mx-auto">
            <h1 className="font-bold text-[40px] text-center mb-10">Books</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:max-w-[1300px] mx-auto">
              {
                booksData.map((data,index) => (
                    <BookCard key={index} data={data}></BookCard>
                ))
              }
            </div>

        </div>
    );
};

export default Allbooks;
